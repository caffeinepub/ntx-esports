import { Crown, Shield } from "lucide-react";
import { motion } from "motion/react";

const leaders = [
  {
    name: "NTX Drift",
    title: "Founder",
    role: "Visionary Leader",
    description:
      "The visionary leader who established NTX Esports and built its competitive foundation. Drift's ambition and drive created the organization from the ground up.",
    icon: Crown,
    initials: "ND",
    accentColor: "oklch(0.55 0.22 27)",
    game: "Fortnite",
    badge: "FOUNDER",
  },
  {
    name: "NTX Kxalid 22",
    title: "Co-Founder",
    role: "Strategic Operations",
    description:
      "Responsible for strategic growth, recruitment decisions, and maintaining professionalism within the organization. Kxalid 22 ensures NTX operates at the highest standard.",
    icon: Shield,
    initials: "NK",
    accentColor: "oklch(0.55 0.22 27)",
    game: "Fortnite",
    badge: "CO-FOUNDER",
  },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[oklch(0.55_0.22_27/0.04)] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[oklch(0.55_0.22_27/0.04)] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[0.4em] uppercase text-nxt-red mb-4">
            The Team Behind NTX
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none">
            <span className="text-white">Leadership</span>
            <br />
            <span className="text-nxt-red">Team</span>
          </h2>
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-[var(--nxt-red)]" />
          </div>
          <p className="mt-6 text-[var(--nxt-text-muted)] text-lg max-w-xl mx-auto">
            The founders who built NTX Esports from nothing into a rising
            competitive force.
          </p>
        </motion.div>

        {/* Leader Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-hover group relative overflow-hidden bg-[var(--nxt-dark)] border border-[var(--nxt-border)]"
            >
              {/* Top bar */}
              <div className="h-1 bg-gradient-to-r from-[var(--nxt-red)] to-transparent" />

              <div className="p-8">
                {/* Badge */}
                <div className="mb-6 flex items-start justify-between">
                  <span className="inline-block text-xs font-black tracking-[0.3em] uppercase text-nxt-red border border-[oklch(0.55_0.22_27/0.5)] px-3 py-1">
                    {leader.badge}
                  </span>
                  <leader.icon className="h-5 w-5 text-[var(--nxt-text-muted)] group-hover:text-nxt-red transition-colors duration-200" />
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-[oklch(0.55_0.22_27/0.15)] border-2 border-[oklch(0.55_0.22_27/0.5)] flex items-center justify-center group-hover:border-[var(--nxt-red)] group-hover:bg-[oklch(0.55_0.22_27/0.25)] transition-all duration-300">
                      <span className="font-display font-black text-lg text-nxt-red">
                        {leader.initials}
                      </span>
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[var(--nxt-dark)] rounded-full animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-wider text-white">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold tracking-widest uppercase text-nxt-red mt-0.5">
                      {leader.title}
                    </p>
                    <p className="text-xs text-[var(--nxt-text-muted)] mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--nxt-text-muted)] leading-relaxed border-t border-[var(--nxt-border)] pt-5">
                  {leader.description}
                </p>

                {/* Game tag */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-nxt-red" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--nxt-text-muted)]">
                    {leader.game}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
