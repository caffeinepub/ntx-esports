import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToJoin = () => {
    document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
        }}
      />

      {/* Dark overlay layers */}
      <div className="absolute inset-0 bg-[oklch(0.09_0_0/0.75)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.09_0_0/0.3)] via-transparent to-[oklch(0.09_0_0/0.85)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.09_0_0/0.6)] via-transparent to-[oklch(0.09_0_0/0.6)]" />

      {/* Red atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[oklch(0.55_0.22_27/0.08)] blur-[120px] pointer-events-none" />

      {/* Scan line animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
        <div className="w-full h-px bg-white animate-[scan-line_4s_linear_infinite]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <img
              src="/assets/generated/nxt-logo-transparent.dim_400x400.png"
              alt="NTX Esports"
              className="h-28 w-28 sm:h-36 sm:w-36 object-contain animate-pulse-red"
            />
            <div className="absolute inset-0 rounded-full bg-[oklch(0.55_0.22_27/0.15)] blur-xl -z-10" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-2"
        >
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-nxt-red border border-[oklch(0.55_0.22_27/0.5)] px-4 py-1.5">
            Fortnite Competitive
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tight leading-none mb-6"
        >
          <span className="block text-white">FEAR THE</span>
          <span className="block text-nxt-red text-glow-red">NTX</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base sm:text-lg lg:text-xl text-[var(--nxt-text-muted)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A competitive Fortnite organization built on ambition, discipline, and
          next-level performance. We're developing the next generation of pro
          players.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            type="button"
            data-ocid="hero.join.primary_button"
            onClick={scrollToJoin}
            className="group relative px-8 py-4 bg-[var(--nxt-red)] text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[var(--nxt-red-bright)] glow-red hover:shadow-red-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nxt-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-w-[180px]"
          >
            <span className="relative z-10">Join NTX</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
          </button>

          <button
            type="button"
            data-ocid="hero.learn_more.secondary_button"
            onClick={scrollToAbout}
            className="px-8 py-4 border border-[oklch(0.55_0.22_27/0.6)] text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:border-[var(--nxt-red)] hover:bg-[oklch(0.55_0.22_27/0.1)] hover:shadow-red-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nxt-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-w-[180px]"
          >
            Learn More
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "2", label: "Founders" },
            { value: "FN", label: "Fortnite" },
            { value: "∞", label: "Potential" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-nxt-red text-glow-red">
                {stat.value}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--nxt-text-muted)] hover:text-[var(--nxt-red)] transition-colors duration-200 animate-bounce focus-visible:outline-none"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>

      {/* Corner decorations */}
      <div className="absolute top-20 left-6 w-12 h-12 border-l-2 border-t-2 border-[oklch(0.55_0.22_27/0.4)] pointer-events-none" />
      <div className="absolute top-20 right-6 w-12 h-12 border-r-2 border-t-2 border-[oklch(0.55_0.22_27/0.4)] pointer-events-none" />
      <div className="absolute bottom-20 left-6 w-12 h-12 border-l-2 border-b-2 border-[oklch(0.55_0.22_27/0.4)] pointer-events-none" />
      <div className="absolute bottom-20 right-6 w-12 h-12 border-r-2 border-b-2 border-[oklch(0.55_0.22_27/0.4)] pointer-events-none" />
    </section>
  );
}
