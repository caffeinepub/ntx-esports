import { useSocialMediaLinks } from "@/hooks/useQueries";
import { Heart } from "lucide-react";
import {
  SiDiscord,
  SiInstagram,
  SiTiktok,
  SiX,
  SiYoutube,
} from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Offers", href: "#offers" },
  { label: "Leadership", href: "#leadership" },
  { label: "Discord", href: "#discord" },
  { label: "Join Us", href: "#join" },
];

const socialIcons = [
  { icon: SiDiscord, label: "Discord", key: "discord" },
  { icon: SiX, label: "Twitter/X", key: "twitter" },
  { icon: SiInstagram, label: "Instagram", key: "instagram" },
  { icon: SiYoutube, label: "YouTube", key: "youtube" },
  { icon: SiTiktok, label: "TikTok", key: "tiktok" },
];

export default function Footer() {
  const { data: socialData } = useSocialMediaLinks();
  const currentYear = new Date().getFullYear();

  const getLink = (key: string): string => {
    const links = socialData as Record<string, string> | undefined;
    if (!links) return "#";
    const val = links[key];
    return val && val !== "" ? val : "#";
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.07_0_0)] border-t border-[var(--nxt-border)] relative overflow-hidden">
      {/* Top divider glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--nxt-red)] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/nxt-logo-transparent.dim_400x400.png"
                alt="NTX Esports"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display font-black text-lg tracking-widest uppercase text-white">
                NTX <span className="text-nxt-red">Esports</span>
              </span>
            </div>
            <p className="text-sm text-[var(--nxt-text-muted)] leading-relaxed max-w-xs">
              A competitive Fortnite organization built on ambition, discipline,
              and next-level performance.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-nxt-red" />
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)]">
                Fortnite Division
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)] mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-[var(--nxt-text-muted)] hover:text-white transition-colors duration-200 font-semibold tracking-wide flex items-center gap-2 group focus-visible:outline-none focus-visible:text-nxt-red"
                  >
                    <span className="w-0 h-px bg-nxt-red group-hover:w-4 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)] mb-5">
              Connect
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={getLink(social.key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[var(--nxt-dark)] border border-[var(--nxt-border)] text-[var(--nxt-text-muted)] hover:text-white hover:border-[var(--nxt-red)] hover:bg-[oklch(0.55_0.22_27/0.15)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nxt-red)]"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleNavClick("#join")}
              className="w-full py-3 bg-[var(--nxt-red)] text-white font-black text-xs tracking-widest uppercase hover:bg-[var(--nxt-red-bright)] transition-all duration-300 glow-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nxt-red)]"
            >
              Apply to Join
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--nxt-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--nxt-text-muted)]">
            © {currentYear} NTX Esports. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--nxt-text-muted)] hover:text-white transition-colors duration-200 flex items-center gap-1.5"
          >
            Built with <Heart className="h-3 w-3 text-nxt-red fill-current" />{" "}
            using{" "}
            <span className="font-semibold text-nxt-red hover:text-[var(--nxt-red-bright)]">
              caffeine.ai
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
