import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card.jsx";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";
import { profile } from "../src/data/portfolio.js";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(
      `mailto:michelhm22@icloud.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: profile.email,
      link: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: profile.phone,
      link: profile.phoneTel,
    },
    {
      icon: MapPin,
      title: "Location",
      value: profile.location,
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      url: profile.github,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      url: profile.linkedin,
    },
    {
      icon: Mail,
      title: "Email",
      url: `mailto:${profile.email}`,
    },
  ];

  const inputClass =
    "w-full rounded-lg p-3 text-sm text-warm-white placeholder:text-muted-text " +
    "border border-[rgba(255,255,255,0.08)] focus:border-amber-400/40 focus:outline-none focus:ring-0 transition-colors";

  return (
    <div className="min-h-screen py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeUp(0)}>
          <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-4">
            // get in touch
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Contact
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Always open to new opportunities, collaborations, or a conversation
            about technology and code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column — contact info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-2xl font-bold text-text-primary mb-6">
              Contact Information
            </h2>

            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-surface-1 border-border-subtle hover:border-amber-400/30 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-amber-400/10 rounded-lg shrink-0">
                          <info.icon className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                          <p className="text-xs font-mono text-text-muted mb-0.5">{info.title}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-sm text-text-primary hover:text-amber-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-sm text-text-primary">{info.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-4">
                // connect
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.url}
                    target={social.url.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={social.title}
                    className="p-3 bg-surface-1 border border-border-subtle rounded-lg text-text-secondary hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — message form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-surface-1 border-border-subtle">
              <CardHeader className="pb-2">
                <CardTitle className="font-serif text-xl text-text-primary">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                {/* Success banner */}
                {isSubmitted && (
                  <motion.div
                    className="flex items-center gap-3 mb-6 px-4 py-3 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    Message sent! Opening your email client…
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-text-muted mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={inputClass}
                        style={{ backgroundColor: "#161618" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-text-muted mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className={inputClass}
                        style={{ backgroundColor: "#161618" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono text-text-muted mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className={inputClass}
                      style={{ backgroundColor: "#161618" }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-text-muted mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project or just say hello!"
                      className={`${inputClass} resize-none`}
                      style={{ backgroundColor: "#161618" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 text-surface-0 font-semibold rounded-lg hover:bg-amber-300 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
