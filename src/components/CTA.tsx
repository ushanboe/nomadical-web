"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8"
        >
          <span className="text-blue-400 text-sm font-medium">
            Coming Soon to Google Play
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Try Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Apps?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Our apps are launching soon on Google Play. Transform furniture, redesign rooms,
          and supercharge your productivity with AI — all from your phone.
        </motion.p>

        {/* Google Play Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105"
          >
            <Play className="w-7 h-7 fill-current" />
            <div className="text-left">
              <div className="text-xs text-gray-600">Coming soon on</div>
              <div className="text-lg font-bold">Google Play</div>
            </div>
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-white/40 text-sm mb-2">Get in touch</p>
          <a href="mailto:skippy@kangablue.au" className="text-[#263e0f] font-bold text-lg hover:text-blue-300 transition-colors">
            skippy@kangablue.au
          </a>
        </motion.div>
      </div>
    </section>
  );
}
