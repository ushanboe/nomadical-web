"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Wifi } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)`, backgroundSize: '50px 50px' }} />
      </div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#263e0f] opacity-10 blur-[120px] rounded-full" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 7 }} className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#263e0f] bg-[#263e0f]/5">
              <span className="w-2 h-2 bg-[#263e0f] rounded-full animate-pulse" />
              <span className="text-[#263e0f] text-xs font-bold uppercase tracking-wider">Offline AI Survival Companion</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 7.1 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">AI SURVIVAL<br /><span className="text-[#263e0f]">KNOWLEDGE,</span><br />NO SIGNAL NEEDED</h1>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 7.2 }} className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">Nomadical is an offline survival companion powered by an on-device AI assistant, giving you intelligent answers, document analysis, and a curated library of 1,000+ survival articles — all without an internet connection. The AI runs entirely on your device using Gemma 4, meaning no subscriptions, no API costs, and complete privacy. Whether you are deep in the wilderness or facing an emergency, Nomadical works when connectivity does not.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 7.3 }} className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10"><Sparkles className="w-4 h-4 text-[#263e0f]" /><span className="text-white text-sm font-medium">On-Device AI Chat</span></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10"><Shield className="w-4 h-4 text-[#263e0f]" /><span className="text-white text-sm font-medium">1,000+ Survival Articles</span></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10"><Wifi className="w-4 h-4 text-[#263e0f]" /><span className="text-white text-sm font-medium">Works Fully Offline</span></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 7.4 }} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#download" className="group flex items-center justify-center gap-3 bg-[#263e0f] hover:bg-[#1a2a09] text-white px-8 py-5 font-bold text-lg transition-all hover:scale-[1.02]">DOWNLOAD FREE ON ANDROID<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 7.2 }} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 bg-[#263e0f]/20 border-2 border-[#263e0f]/40 flex flex-col items-center justify-center gap-3">
                <span className="text-6xl font-black text-[#263e0f]">N</span>
                <span className="text-white text-xl font-bold tracking-widest uppercase">Nomadical</span>
              </div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 7.5 }} className="absolute -top-5 -right-8 bg-[#263e0f] px-4 py-3 flex flex-col items-center shadow-lg">
                <span className="text-white text-2xl font-black leading-none">1,000+</span>
                <span className="text-white/70 text-xs font-bold uppercase tracking-wider mt-1">SURVIVAL ARTICLES</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 7.6 }} className="absolute -bottom-5 -left-8 bg-[#263e0f] px-4 py-3 flex flex-col items-center shadow-lg">
                <span className="text-white text-2xl font-black leading-none">22</span>
                <span className="text-white/70 text-xs font-bold uppercase tracking-wider mt-1">KNOWLEDGE CATEGORIES</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}