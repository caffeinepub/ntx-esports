import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import DiscordSection from "./components/DiscordSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import JoinSection from "./components/JoinSection";
import LeadershipSection from "./components/LeadershipSection";
import Navigation from "./components/Navigation";
import OffersSection from "./components/OffersSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Toaster theme="dark" position="top-right" />
      <Navigation />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <OffersSection />
        <div className="section-divider" />
        <LeadershipSection />
        <div className="section-divider" />
        <DiscordSection />
        <div className="section-divider" />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
