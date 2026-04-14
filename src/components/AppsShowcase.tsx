"use client";

import { motion } from "framer-motion";
import { ArrowRight, Hammer, Home, Bot, Sparkles, PaintBucket, Wrench, Brain, Mic, Mail, Camera, Palette, BarChart3, ShoppingBag } from "lucide-react";

const apps = [
  {
    name: "FixerUppera",
    tagline: "AI-Powered Furniture Transformation",
    description: "Snap a photo of any furniture and get AI transformation ideas, step-by-step DIY plans, shopping lists, and photorealistic concept previews. Finished? Use Sell It mode to generate marketplace listings instantly.",
    icon: Hammer,
    color: "#a855f7",
    colorName: "purple",
    features: [
      { icon: Camera, text: "4 Modes: Standard, Pro, Creative Reuse & Sell It" },
      { icon: Sparkles, text: "AI Mockup Previews" },
      { icon: Wrench, text: "Step-by-Step DIY Plans" },
      { icon: ShoppingBag, text: "AI Marketplace Listings" },
      { icon: BarChart3, text: "Profit Calculator" },
    ],
    status: "Coming Soon to Google Play",
  },
  {
    name: "StyleMySpace",
    tagline: "Visualize Your Dream Room in Seconds",
    description: "Photograph any room and instantly see AI-generated transformations. Complete redesigns, furniture swaps, wall colors from 3,700+ paints, Design Battles, and Feng Shui optimization.",
    icon: Home,
    color: "#14b8a6",
    colorName: "teal",
    features: [
      { icon: Palette, text: "5 Design Modes" },
      { icon: Sparkles, text: "AI Room Mockups" },
      { icon: PaintBucket, text: "3,700+ Paint Colors" },
      { icon: BarChart3, text: "Design Battle Voting" },
      { icon: Camera, text: "Before/After Slider" },
    ],
    status: "Coming Soon to Google Play",
  },
  {
    name: "NovaSuperAgent",
    tagline: "The AI Super-Agent That Actually Does Things",
    description: "More than a chatbot — a personal AI assistant that manages your notes, reminders, email, calendar, and web searches. Runs locally on your phone or connects to powerful cloud AI.",
    icon: Bot,
    color: "#f59e0b",
    colorName: "amber",
    features: [
      { icon: Brain, text: "9 Built-In Tools" },
      { icon: Mic, text: "Hands-Free Voice Mode" },
      { icon: Mail, text: "Email Integration" },
      { icon: Sparkles, text: "Proactive Intelligence" },
      { icon: Camera, text: "Vision & Photo Analysis" },
    ],
    status: "Coming Soon to Google Play",
  },
];

export default function AppsShowcase() {
  return (
    <section id="apps" className="py-24 bg-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#3b82f6] bg-[#3b82f6]/5 mb-6">
            <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider">Our App Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            APPS THAT <span className="text-[#3b82f6]">MAKE A DIFFERENCE</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Each app is built with cutting-edge AI to solve real problems. Simple to use, powerful under the hood.
          </p>
        </motion.div>

        {/* App Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white/5 border-2 border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: app.color }} />

              <div className="p-8">
                {/* App Icon & Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 flex items-center justify-center"
                    style={{ backgroundColor: `${app.color}20` }}
                  >
                    <app.icon className="w-7 h-7" style={{ color: app.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{app.name}</h3>
                    <p className="text-sm font-medium" style={{ color: app.color }}>{app.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {app.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {app.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      <feature.icon className="w-4 h-4 flex-shrink-0" style={{ color: app.color }} />
                      <span className="text-white/80 text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${app.color}15`,
                      color: app.color,
                      border: `1px solid ${app.color}30`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: app.color }} />
                    {app.status}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/40 text-sm mt-12"
        >
          More apps in development. Stay tuned for what&apos;s next.
        </motion.p>
      </div>
    </section>
  );
}
