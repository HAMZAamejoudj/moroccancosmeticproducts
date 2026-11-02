"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Factory } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import { useTranslation } from "@/context/LanguageContext";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/hero-images";

export default function ContactClient() {
  const { dict } = useTranslation();
  const contact = dict.Contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-sand pb-24">
      <PageHero image={heroImages.contact} alt="Contact Moroccan Cosmetic Products" className="min-h-[40vh]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            {contact.hero_title_part1} <span className="text-accent">{contact.hero_title_part2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
          >
            {contact.hero_subtitle}
          </motion.p>
      </PageHero>

      <section className="py-16 md:py-24 relative -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary/5 h-full flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-2">{contact.info_title}</h2>
                <p className="text-primary/70 mb-10">{contact.info_subtitle}</p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary/60 uppercase tracking-wider font-semibold mb-1">{contact.phone_label}</p>
                      <a href="tel:+212641517831" className="text-lg font-bold text-primary hover:text-accent transition-colors" dir="ltr">
                        0641517831
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary/60 uppercase tracking-wider font-semibold mb-1">{contact.email_label}</p>
                      <a
                        href="mailto:inquiry@moroccanorganica.com"
                        className="text-lg font-bold text-primary hover:text-accent transition-colors break-all"
                        dir="ltr"
                      >
                        inquiry@moroccanorganica.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary/60 uppercase tracking-wider font-semibold mb-1">{contact.hq_label}</p>
                      <p className="text-base font-medium text-primary" dir="ltr">
                        {contact.hq_address_line1}
                        <br />
                        {contact.hq_address_line2}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary/60 uppercase tracking-wider font-semibold mb-1">{contact.factory_label}</p>
                      <p className="text-base font-medium text-primary">{contact.factory_text}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-primary/10">
                <a
                  href="https://wa.me/212641517831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-[#25D366]/30"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  {contact.whatsapp_cta}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary/5"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-4">{contact.success_title}</h3>
                  <p className="text-primary/70 text-lg max-w-md">{contact.success_text}</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-8 py-3 bg-accent text-white rounded-xl font-bold hover:bg-primary transition-colors"
                  >
                    {contact.success_button}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-primary/80">
                        {contact.form_name_label}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-sand/30 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary"
                        placeholder={contact.form_name_placeholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-primary/80">
                        {contact.form_email_label}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-sand/30 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary"
                        placeholder={contact.form_email_placeholder}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-primary/80">
                        {contact.form_phone_label}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-sand/30 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary"
                        placeholder={contact.form_phone_placeholder}
                        dir="ltr"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-primary/80">
                        {contact.form_company_label}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-sand/30 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary"
                        placeholder={contact.form_company_placeholder}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-primary/80">
                      {contact.form_message_label}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-sand/30 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary resize-none"
                      placeholder={contact.form_message_placeholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-cream rounded-xl font-bold hover:bg-accent hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">{contact.form_submitting}</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {contact.form_submit}
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-primary/50 mt-4">{contact.form_privacy}</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
