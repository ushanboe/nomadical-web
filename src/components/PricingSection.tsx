"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

const pricing = [
  {
    "tier": "Lifetime",
    "price": "$6.99",
    "period": "one-time",
    "currency": "USD"
  }
];
const freeFeatures = [
  "Full app access during 3-day free trial",
  "1,000+ curated offline articles",
  "AI plant/object scanner",
  "Emergency checklists",
  "Journal",
  "Digital compass",
  "Offline maps",
  "SOS tools",
  "Chat with uploaded PDFs (on-device RAG with Gemma 4 AI + OCR)"
];
const paidFeatures = [
  "Full app access after trial period expires (all features locked behind paywall after 3-day trial)"
];
const trialDays = 3;

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#263e0f] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#263e0f]/10 border border-[#263e0f]/30 rounded-full mb-4">
            <Star className="w-3.5 h-3.5 text-[#263e0f]" />
            <span className="text-[#263e0f] text-xs font-bold uppercase tracking-wider">Freemium</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Start free. Upgrade when you need more.
          </p>
          {trialDays > 0 && (
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">{trialDays}-day free trial</span>
            </div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Free tier */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8"
          >
            <div className="mb-6">
              <h3 className="text-white font-bold text-2xl mb-1">Free</h3>
              <p className="text-white/50 text-sm">Get started at no cost</p>
              <div className="mt-4">
                <span className="text-white font-black text-4xl">$0</span>
                <span className="text-white/50 text-sm ml-2">forever</span>
              </div>
            </div>
            <ul className="space-y-3">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Paid tier(s) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-[#263e0f]/10 to-transparent border-2 border-[#263e0f]/40 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-[#263e0f] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Recommended
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-white font-bold text-2xl mb-1">{pricing[0]?.tier || 'Pro'}</h3>
              <p className="text-white/50 text-sm">Unlock everything</p>
              <div className="mt-4">
                {pricing.length > 0 ? (
                  <>
                    <span className="text-white font-black text-4xl">{pricing[0].price}</span>
                    <span className="text-white/50 text-sm ml-2">/ {pricing[0].period}</span>
                  </>
                ) : (
                  <span className="text-white font-black text-4xl">Contact for pricing</span>
                )}
              </div>
              {pricing.length > 1 && (
                <p className="text-white/40 text-xs mt-2">
                  Also available: {pricing.slice(1).map(p => `${p.price}/${p.period}`).join(' · ')}
                </p>
              )}
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-semibold">Everything in Free, plus:</span>
              </li>
              {paidFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#263e0f] shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
