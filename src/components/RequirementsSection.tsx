"use client";

import { motion } from "framer-motion";
import { Smartphone, HardDrive, Cpu, AlertTriangle } from "lucide-react";

const specs = [
    { platform: "Android", minOS: "Android 10+", minRAM: "6 GB", storage: "3 GB" },
];

export default function RequirementsSection() {
  return (
    <section id="requirements" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#263e0f] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#263e0f] bg-[#263e0f]/5 mb-6">
            <span className="text-[#263e0f] text-xs font-bold uppercase tracking-wider">System Requirements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WHAT YOU <span className="text-[#263e0f]">NEED</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Minimum device specifications to run this app and its AI features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 mb-16">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/5 border-2 border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-6 h-6 text-[#263e0f]" />
                <h3 className="text-xl font-black text-white">{spec.platform}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-white/40 shrink-0" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide">Min OS</p>
                    <p className="text-white text-sm font-medium">{spec.minOS}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <HardDrive className="w-4 h-4 text-white/40 shrink-0" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide">Min RAM</p>
                    <p className="text-white text-sm font-medium">{spec.minRAM}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <HardDrive className="w-4 h-4 text-white/40 shrink-0" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide">Storage</p>
                    <p className="text-white text-sm font-medium">{spec.storage}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-amber-500/5 border-2 border-amber-500/20 p-8"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-amber-400 font-bold text-lg mb-2">AI Content Disclaimer</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Nomadical uses on-device AI models to generate responses and identification results. AI-generated content may contain inaccuracies and is not a substitute for professional medical, navigational, or survival advice — always verify critical information from authoritative sources before acting on it. The developers of Nomadical are not responsible for any decisions made based on AI-generated content produced by the app.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
