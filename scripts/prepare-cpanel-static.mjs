import { cpSync, existsSync, mkdirSync, rmSync, renameSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const proxyPath = path.join(root, "src", "proxy.ts");
const proxyBackup = path.join(root, "src", "proxy.ts.bak");
const outDir = path.join(root, "out");
const deployDir = path.join(root, "cpanel-public_html");
const zipPath = path.join(root, "moroccancosmeticproducts-public_html.zip");

function restoreProxy() {
  if (existsSync(proxyBackup)) {
    renameSync(proxyBackup, proxyPath);
  }
}

try {
  if (existsSync(proxyPath)) {
    renameSync(proxyPath, proxyBackup);
  }

  execSync("next build", {
    stdio: "inherit",
    cwd: root,
    env: {
      ...process.env,
      CPANEL_STATIC: "1",
      NEXT_PUBLIC_SITE_URL:
        process.env.NEXT_PUBLIC_SITE_URL || "https://moroccancosmeticproducts.com",
      ...(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
        ? { NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID }
        : {}),
    },
  });
} finally {
  restoreProxy();
}

if (!existsSync(outDir)) {
  console.error("Static export folder 'out' not found.");
  process.exit(1);
}

if (existsSync(deployDir)) {
  rmSync(deployDir, { recursive: true, force: true });
}

mkdirSync(deployDir, { recursive: true });
cpSync(outDir, deployDir, { recursive: true });

writeFileSync(
  path.join(deployDir, ".htaccess"),
  `# Moroccan Cosmetic Products - Apache rules for static Next.js export
RewriteEngine On
RewriteBase /

# Force HTTPS
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

# Home -> English
RewriteRule ^$ /en/ [R=302,L]

# Add trailing slash for locale roots
RewriteRule ^(en|fr|ar)$ /$1/ [R=301,L]

DirectoryIndex index.html
Options -Indexes
`,
  "utf8",
);

writeFileSync(
  path.join(deployDir, "CPANEL-README.txt"),
  [
    "STATIC DEPLOY FOR CPANEL (NO NODE.JS REQUIRED)",
    "==============================================",
    "",
    "1) File Manager -> open public_html",
    "2) Delete old site files if needed (keep .well-known if SSL exists)",
    "3) Upload moroccancosmeticproducts-public_html.zip",
    "4) Extract directly inside public_html",
    "5) Ensure .htaccess is present (show hidden files in File Manager)",
    "6) Visit https://moroccancosmeticproducts.com/en/",
    "",
    "Google Analytics:",
    " - Set NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX before build",
    " - Example: $env:NEXT_PUBLIC_GA_MEASUREMENT_ID='G-XXXX'; npm run build:cpanel-static",
    "",
    "URLs:",
    " - https://moroccancosmeticproducts.com/en/",
    " - https://moroccancosmeticproducts.com/fr/",
    " - https://moroccancosmeticproducts.com/ar/",
  ].join("\n"),
  "utf8",
);

if (existsSync(zipPath)) {
  rmSync(zipPath, { force: true });
}

execSync(`tar -a -cf "${zipPath}" -C "${deployDir}" .`, {
  stdio: "inherit",
  cwd: root,
});

console.log(`\nDeploy folder: ${deployDir}`);
console.log(`Zip ready: ${zipPath}`);
