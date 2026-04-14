"use client";

import { motion } from "framer-motion";
import { Smartphone, Sparkles, Globe, Shield } from "lucide-react";

const stats = [
  {
    icon: Smartphone,
    value: "3",
    label: "Apps in Portfolio",
    color: "text-blue-400",
  },
  {
    icon: Sparkles,
    value: "AI",
    label: "Powered by Intelligence",
    color: "text-cyan-400",
  },
  {
    icon: Globe,
    value: "AU",
    label: "Made in Australia",
    color: "text-teal-400",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Privacy Focused",
    color: "text-indigo-400",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-2xl mb-4 border border-slate-700">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
