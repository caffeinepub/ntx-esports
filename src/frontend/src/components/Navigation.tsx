import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", ocid: "nav.home.link" },
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Offers", href: "#offers", ocid: "nav.offers.link" },
  { label: "Leadership", href: "#leadership", ocid: "nav.leadership.link" },
  { label: "Discord", href: "#discord", ocid: "nav.discord.link" },
  { label: "Join Us", href: "#join", ocid: "nav.join.link" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.09_0_0/0.96)] backdrop-blur-md border-b border-[oklch(0.55_0.22_27/0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nxt-red)]"
            >
              <img
                src="/assets/generated/nxt-logo-transparent.dim_400x400.png"
                alt="NTX Esports Logo"
                className="h-10 w-10 object-contain group-hover:drop-shadow-[0_0_8px_var(--nxt-red)] transition-all duration-300"
              />
              <span className="font-display font-black text-xl tracking-widest uppercase text-white group-hover:text-nxt-red transition-colors duration-200">
                NTX <span className="text-nxt-red">Esports</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  data-ocid={link.ocid}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-sm font-semibold tracking-widest uppercase transition-all duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nxt-red)] rounded ${
                    link.label === "Join Us"
                      ? "ml-2 bg-[var(--nxt-red)] text-white hover:bg-[var(--nxt-red-bright)] glow-red"
                      : "text-[var(--nxt-text-muted)] hover:text-white"
                  }`}
                >
                  {link.label !== "Join Us" && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--nxt-red)] group-hover:w-full transition-all duration-300" />
                  )}
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nxt-red)]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[oklch(0.09_0_0/0.98)] backdrop-blur-md border-b border-[oklch(0.55_0.22_27/0.3)]"
          >
            <nav
              className="flex flex-col px-4 py-4 gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  data-ocid={link.ocid}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-4 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nxt-red)] rounded ${
                    link.label === "Join Us"
                      ? "mt-2 bg-[var(--nxt-red)] text-white text-center"
                      : "text-[var(--nxt-text-muted)] hover:text-white hover:bg-[oklch(0.15_0_0)]"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
