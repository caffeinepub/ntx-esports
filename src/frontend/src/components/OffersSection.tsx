import { BarChart3, Crown, Globe, Swords, Users } from "lucide-react";
import { motion } from "motion/react";

const offers = [
  {
    icon: Users,
    title: "Organized Competitive Teams",
    description:
      "Structured rosters with defined roles, clear hierarchy, and coordinated team strategies built for competitive success.",
    number: "01",
  },
  {
    icon: BarChart3,
    title: "Structured Practice & Improvement",
    description:
      "Regular practice schedules, VOD reviews, coaching insights, and individual skill development programs to elevate your game.",
    number: "02",
  },
  {
    icon: Crown,
    title: "Active Leadership & Management",
    description:
      "Experienced founders and staff who manage the organization professionally and ensure every member thrives.",
    number: "03",
  },
  {
    icon: Swords,
    title: "Tournament Participation",
    description:
      "Compete in official Fortnite tournaments, scrims, and community events to test your skills and build your reputation.",
    number: "04",
  },
  {
    icon: Globe,
    title: "Strong United Community",
    description:
      "A tight-knit Discord community built on mutual respect, competitive spirit, and shared ambition to reach the next level.",
    number: "05",
  },
];

export default function OffersSection() {
  return (
    <section
      id="offers"
      className="py-24 lg:py-32 relative overflow-hidden bg-[oklch(0.10_0_0)]"
    >
      {/* Background atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[oklch(0.55_0.22_27/0.04)] rounded-full blur-[120px] pointer-events-none" />

      {/* Diagonal background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.55 0.22 27) 0px, oklch(0.55 0.22 27) 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

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
            What We Provide
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none">
            <span className="text-white">What We</span>
            <br />
            <span className="text-nxt-red">Offer</span>
          </h2>
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-[var(--nxt-red)]" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.number}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-hover group relative p-8 bg-[var(--nxt-dark)] border border-[var(--nxt-border)] overflow-hidden ${
                i === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-4 font-display font-black text-6xl text-[oklch(0.55_0.22_27/0.08)] leading-none select-none group-hover:text-[oklch(0.55_0.22_27/0.15)] transition-colors duration-300">
                {offer.number}
              </div>

              {/* Bottom red line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--nxt-red)] group-hover:w-full transition-all duration-300" />

              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-14 h-14 flex items-center justify-center border-2 border-[oklch(0.55_0.22_27/0.5)] text-nxt-red group-hover:bg-[oklch(0.55_0.22_27/0.15)] group-hover:border-[var(--nxt-red)] transition-all duration-300">
                  <offer.icon className="h-6 w-6" />
                </div>
              </div>

              <h3 className="font-display font-black text-base tracking-wider uppercase text-white mb-3 leading-tight">
                {offer.title}
              </h3>
              <p className="text-sm text-[var(--nxt-text-muted)] leading-relaxed">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
