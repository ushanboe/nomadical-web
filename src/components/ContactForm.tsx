"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/meelkzga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#263e0f]/30 to-transparent" />

      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            GET IN <span className="text-[#263e0f]">TOUCH</span>
          </h2>
          <p className="text-white/60">
            Have a question, feedback, or just want to say g&apos;day? Drop us a message.
          </p>
        </motion.div>

        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-white/60">Thanks for reaching out. We&apos;ll get back to you soon.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-[#263e0f] font-bold text-sm hover:text-blue-300 transition-colors cursor-pointer"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white/60 text-sm font-bold mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border-2 border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#263e0f] transition-colors placeholder:text-white/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/60 text-sm font-bold mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border-2 border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#263e0f] transition-colors placeholder:text-white/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white/60 text-sm font-bold mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border-2 border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#263e0f] transition-colors placeholder:text-white/20 resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or email us directly at{" "}
                <a href="mailto:skippy@kangablue.au" className="underline">skippy@kangablue.au</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group flex items-center justify-center gap-3 bg-[#263e0f] hover:bg-[#20350d] disabled:opacity-50 text-white px-8 py-4 font-bold text-lg transition-all hover:scale-[1.02] w-full cursor-pointer disabled:cursor-not-allowed"
            >
              {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
