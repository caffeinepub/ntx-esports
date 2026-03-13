import { Target, Trophy, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const missionPoints = [
  {
    icon: Target,
    title: "Recruit & Develop",
    description:
      "Identify and nurture upcoming competitive players with the talent and drive to go pro.",
  },
  {
    icon: Trophy,
    title: "Compete at the Top",
    description:
      "Participate in tournaments and scrims to test our skills against the best in the scene.",
  },
  {
    icon: Zap,
    title: "Build the Brand",
    description:
      "Establish NTX Esports as one of the most recognized and dominant organizations in competitive gaming.",
  },
  {
    icon: Users,
    title: "Unite the Community",
    description:
      "Create a supportive yet fiercely competitive environment where every member grows together.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[oklch(0.55_0.22_27/0.05)] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[oklch(0.55_0.22_27/0.04)] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4">
              <span className="inline-block text-xs font-bold tracking-[0.4em] uppercase text-nxt-red">
                Who We Are
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none mb-6">
              <span className="text-white">About</span>
              <br />
              <span className="text-nxt-red">NTX Esports</span>
            </h2>
            <div className="w-16 h-1 bg-[var(--nxt-red)] mb-8" />
            <p className="text-[var(--nxt-text-muted)] text-lg leading-relaxed mb-6">
              NTX Esports represents{" "}
              <span className="text-white font-semibold">
                ambition, growth, and next-level performance
              </span>
              . As an upcoming competitive Fortnite organization, we are focused
              on recruiting talented players, sharpening skills, and competing
              at the highest level.
            </p>
            <p className="text-[var(--nxt-text-muted)] text-lg leading-relaxed">
              Our goal is clear: become one of the most{" "}
              <span className="text-white font-semibold">
                recognized and dominant
              </span>{" "}
              esports organizations in the competitive gaming community. We
              don't just play — we compete, we grind, we rise.
            </p>

            {/* Decorative bracket */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-[var(--nxt-red)]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)]">
                  Est. 2025
                </span>
              </div>
              <span className="text-[var(--nxt-text-muted)]">•</span>
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)]">
                Fortnite Division
              </span>
            </div>
          </motion.div>

          {/* Right — Mission Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {missionPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover group p-6 bg-[var(--nxt-dark)] border border-[var(--nxt-border)] relative overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-[var(--nxt-red)] border-l-transparent group-hover:border-t-[var(--nxt-red-bright)] transition-colors duration-200" />

                <div className="mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.55_0.22_27/0.5)] text-nxt-red group-hover:bg-[oklch(0.55_0.22_27/0.15)] transition-colors duration-200">
                    <point.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-sm tracking-widest uppercase text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-[var(--nxt-text-muted)] leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
