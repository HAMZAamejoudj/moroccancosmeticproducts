import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const standaloneDir = path.join(root, ".next", "standalone");
const staticDir = path.join(root, ".next", "static");
const publicDir = path.join(root, "public");
const deployDir = path.join(root, "cpanel-deploy");
const zipPath = path.join(root, "moroccancosmeticproducts-cpanel.zip");

if (!existsSync(standaloneDir)) {
  console.error("Standalone build not found. Run: npm run build");
  process.exit(1);
}

if (existsSync(deployDir)) {
  rmSync(deployDir, { recursive: true, force: true });
}

mkdirSync(deployDir, { recursive: true });
cpSync(standaloneDir, deployDir, { recursive: true });

mkdirSync(path.join(deployDir, ".next"), { recursive: true });
cpSync(staticDir, path.join(deployDir, ".next", "static"), { recursive: true });
cpSync(publicDir, path.join(deployDir, "public"), { recursive: true });

writeFileSync(
  path.join(deployDir, "CPANEL-README.txt"),
  [
    "Moroccan Cosmetic Products - cPanel Deploy",
    "===========================================",
    "",
    "1) File Manager -> upload moroccancosmeticproducts-cpanel.zip",
    "2) Extract in: /home/moroccancosmetic/nodeapp (or your app folder)",
    "3) cPanel -> Setup Node.js App",
    "   - Node.js version: 20+",
    "   - Application root: folder where you extracted this zip",
    "   - Application URL: moroccancosmeticproducts.com",
    "   - Application startup file: server.js",
    "4) Environment variable:",
    "   NEXT_PUBLIC_SITE_URL=https://moroccancosmeticproducts.com",
    "   NODE_ENV=production",
    "   PORT=(auto from cPanel)",
    "5) Click 'Run NPM Install' is NOT needed (dependencies included in standalone)",
    "6) Start / Restart app",
    "",
    "If static files fail, also copy public_html proxy to Node app port from cPanel docs.",
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
