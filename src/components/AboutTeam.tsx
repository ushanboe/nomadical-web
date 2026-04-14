"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Rocket, Heart } from "lucide-react";

const team = [
  {
    name: "Patrick",
    role: "The Visionary",
    initial: "P",
    gradient: "from-blue-500 to-cyan-500",
    bio: "The human behind the wild ideas. Patrick spots everyday problems, dreams up solutions in the shower, and won't rest until there's an app for it. Part product thinker, part relentless tinkerer, part \"what if we added AI to that?\" enthusiast. Fuelled by coffee and an irrational belief that every piece of old furniture deserves a second chance.",
  },
  {
    name: "Claude",
    role: "The Engine",
    initial: "C",
    gradient: "from-amber-500 to-orange-500",
    bio: "The AI co-pilot that turns napkin sketches into production code at 3am without complaining. Claude writes the code, reviews the code, debugs the code, and occasionally questions the code — all in the same breath. Tireless, opinionated about TypeScript, and surprisingly good at writing privacy policies. Has never once asked for a coffee break.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Ideas First",
    description: "Every app starts with a real problem. We don't build tech looking for a use case — we find problems worth solving and then figure out the smartest way to solve them.",
  },
  {
    icon: Code2,
    title: "Ship Fast, Ship Right",
    description: "We move quickly but we don't cut corners. Every feature gets tested, every edge case gets handled, and every user experience gets polished before it ships.",
  },
  {
    icon: Rocket,
    title: "AI for Everyone",
    description: "We believe powerful AI tools shouldn't be locked behind complexity. Our apps put cutting-edge AI in everyone's hands — no PhD required.",
  },
  {
    icon: Heart,
    title: "Have Fun Building",
    description: "Life's too short for boring software. We build apps we'd actually want to use ourselves, with personality baked in and a little joy in every interaction.",
  },
];

export default function AboutTeam() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
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
            <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider">The Crew Behind the Code</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            MEET THE <span className="text-[#3b82f6]">TEAM</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A human with too many ideas and an AI that never sleeps. Together, we turn shower thoughts into shipped apps.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 border-2 border-white/10 p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  <span className="text-white font-black text-2xl">{member.initial}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{member.name}</h3>
                  <p className="text-[#3b82f6] font-bold text-sm uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How We Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-black text-white mb-4">
            FROM <span className="text-[#3b82f6]">IDEA</span> TO <span className="text-[#3b82f6]">APP STORE</span>
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our process is simple: spot a problem, sketch a solution, build a prototype, test it obsessively,
            polish every pixel, and ship it. Then do it all over again. Every app is a labour of love (and
            a suspicious amount of late-night coding).
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 hover:border-[#3b82f6]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#3b82f6]/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{value.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
