import { useDiscordMemberCount, useSocialMediaLinks } from "@/hooks/useQueries";
import {
  Calendar,
  Megaphone,
  MessageSquare,
  Swords,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import {
  SiDiscord,
  SiInstagram,
  SiTiktok,
  SiX,
  SiYoutube,
} from "react-icons/si";

const roles = [
  {
    name: "Members",
    color: "oklch(0.55 0.18 265)",
    borderColor: "oklch(0.55 0.18 265 / 0.4)",
    description: "All verified community members",
  },
  {
    name: "Competitive Team",
    color: "oklch(0.55 0.22 27)",
    borderColor: "oklch(0.55 0.22 27 / 0.4)",
    description: "Active roster players",
  },
  {
    name: "Staff",
    color: "oklch(0.65 0.18 50)",
    borderColor: "oklch(0.65 0.18 50 / 0.4)",
    description: "Moderators & managers",
  },
  {
    name: "Leadership",
    color: "oklch(0.78 0.18 90)",
    borderColor: "oklch(0.78 0.18 90 / 0.4)",
    description: "Founders & directors",
  },
];

const channels = [
  { icon: Megaphone, name: "Announcements", desc: "Official org updates" },
  { icon: Swords, name: "Tryouts", desc: "Recruitment & trials" },
  { icon: Users, name: "Scrims", desc: "Practice & custom matches" },
  { icon: MessageSquare, name: "Team Chats", desc: "Division coordination" },
  { icon: Calendar, name: "Events", desc: "Tournaments & drops" },
];

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  ocid: string;
  key: keyof {
    discord: string;
    twitter: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
}

const socialPlatforms: SocialLink[] = [
  {
    icon: SiDiscord,
    label: "Discord",
    ocid: "social.discord.link",
    key: "discord",
  },
  {
    icon: SiX,
    label: "Twitter/X",
    ocid: "social.twitter.link",
    key: "twitter",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    ocid: "social.instagram.link",
    key: "instagram",
  },
  {
    icon: SiYoutube,
    label: "YouTube",
    ocid: "social.youtube.link",
    key: "youtube",
  },
  {
    icon: SiTiktok,
    label: "TikTok",
    ocid: "social.tiktok.link",
    key: "tiktok",
  },
];

export default function DiscordSection() {
  const { data: memberCount, isLoading: countLoading } =
    useDiscordMemberCount();
  const { data: socialData } = useSocialMediaLinks();

  const displayCount =
    !countLoading && memberCount !== undefined && memberCount > BigInt(0)
      ? `${memberCount.toString()}+`
      : "0+";

  const getLink = (key: string): string => {
    const links = socialData as Record<string, string> | undefined;
    if (!links) return "#";
    const val = links[key];
    return val && val !== "" ? val : "#";
  };

  return (
    <section
      id="discord"
      className="py-24 lg:py-32 relative overflow-hidden bg-[oklch(0.10_0_0)]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[oklch(0.55_0.22_27/0.05)] rounded-full blur-[150px] pointer-events-none" />

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
            Community Hub
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none mb-6">
            <span className="text-white">Join the NTX</span>
            <br />
            <span className="text-nxt-red">Community Today</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-[var(--nxt-red)]" />
          </div>
          <p className="text-[var(--nxt-text-muted)] text-lg max-w-2xl mx-auto">
            Our Discord is the heartbeat of NTX Esports — where announcements
            drop, tryouts happen, scrims are organized, and the community bonds
            over competitive Fortnite.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Discord CTA + Channels */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Member Count */}
            <div
              data-ocid="discord.member_count.panel"
              className="flex items-center gap-4 mb-8 p-5 bg-[var(--nxt-dark)] border border-[var(--nxt-border)]"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-[var(--nxt-text-muted)]">
                  Active Members
                </span>
              </div>
              <div className="ml-auto font-display font-black text-3xl text-nxt-red">
                {countLoading ? (
                  <span className="text-[var(--nxt-text-muted)] text-xl animate-pulse">
                    Loading...
                  </span>
                ) : (
                  displayCount
                )}
              </div>
            </div>

            {/* Main Discord CTA */}
            <motion.a
              href={getLink("discord")}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="discord.join.primary_button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-3 w-full py-5 bg-[oklch(0.38_0.18_265)] hover:bg-[oklch(0.42_0.2_265)] text-white font-black text-lg tracking-wider uppercase transition-all duration-300 mb-6 glow-red hover:shadow-[0_0_30px_oklch(0.38_0.18_265_/_0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <SiDiscord className="h-7 w-7" />
              Join Our Discord
            </motion.a>

            {/* Channel List */}
            <div className="space-y-2">
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)] mb-4">
                What's Inside
              </p>
              {channels.map((channel, i) => (
                <motion.div
                  key={channel.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3 bg-[var(--nxt-dark)] border border-[var(--nxt-border)] hover:border-[oklch(0.55_0.22_27/0.4)] transition-colors duration-200"
                >
                  <channel.icon className="h-4 w-4 text-nxt-red flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-white">
                      #{channel.name.toLowerCase()}
                    </span>
                    <span className="text-xs text-[var(--nxt-text-muted)] ml-2">
                      — {channel.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Role System */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)] mb-4">
                Role System
              </p>
              <div className="grid grid-cols-1 gap-3">
                {roles.map((role, i) => (
                  <motion.div
                    key={role.name}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card-hover group flex items-center gap-4 p-4 bg-[var(--nxt-dark)] border"
                    style={{ borderColor: role.borderColor }}
                  >
                    <div
                      className="w-3 h-10 flex-shrink-0"
                      style={{ backgroundColor: role.color }}
                    />
                    <div>
                      <div
                        className="font-display font-bold text-sm uppercase tracking-wider"
                        style={{ color: role.color }}
                      >
                        {role.name}
                      </div>
                      <div className="text-xs text-[var(--nxt-text-muted)] mt-0.5">
                        {role.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-8 border-t border-[var(--nxt-border)]">
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)] mb-5">
                Follow Us
              </p>
              <div className="flex flex-wrap gap-3">
                {socialPlatforms.map((social) => (
                  <a
                    key={social.label}
                    href={getLink(social.key)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={social.ocid}
                    className="group flex items-center gap-2 px-4 py-2.5 bg-[var(--nxt-dark)] border border-[var(--nxt-border)] hover:border-[var(--nxt-red)] hover:text-nxt-red text-[var(--nxt-text-muted)] transition-all duration-200 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nxt-red)]"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
