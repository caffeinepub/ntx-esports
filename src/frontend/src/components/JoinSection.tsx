import { useActor } from "@/hooks/useActor";
import { AlertCircle, CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FormData {
  playerName: string;
  gameUsername: string;
  age: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function JoinSection() {
  const { actor } = useActor();
  const [formData, setFormData] = useState<FormData>({
    playerName: "",
    gameUsername: "",
    age: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      setStatus("error");
      setErrorMessage("Unable to connect. Please try again.");
      return;
    }

    const ageNum = Number.parseInt(formData.age, 10);
    if (Number.isNaN(ageNum) || ageNum < 13 || ageNum > 99) {
      setStatus("error");
      setErrorMessage("Please enter a valid age between 13 and 99.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await actor.submitApplication(
        formData.playerName.trim(),
        formData.gameUsername.trim(),
        BigInt(ageNum),
        formData.message.trim(),
      );
      setStatus("success");
      setFormData({ playerName: "", gameUsername: "", age: "", message: "" });
    } catch (_err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="join" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[oklch(0.55_0.22_27/0.05)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[oklch(0.55_0.22_27/0.03)] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Pitch */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.4em] uppercase text-nxt-red mb-4">
              Open Recruitment
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none mb-6">
              <span className="text-white">Join</span>
              <br />
              <span className="text-nxt-red">NTX Esports</span>
            </h2>
            <div className="w-16 h-1 bg-[var(--nxt-red)] mb-8" />

            <p className="text-[var(--nxt-text-muted)] text-lg leading-relaxed mb-10">
              We are currently recruiting{" "}
              <span className="text-white font-semibold">
                dedicated and skilled players
              </span>{" "}
              who are ready to grow, compete, and represent NTX Esports with
              pride. If you have passion, skill, and ambition —{" "}
              <span className="text-nxt-red font-semibold">
                NTX is your next step
              </span>
              .
            </p>

            <div className="space-y-4">
              {[
                "Must be active and committed to improvement",
                "Competitive Fortnite experience required",
                "Team player with strong communication",
                "Ready to participate in scrims and tournaments",
                "Represent the NTX brand with professionalism",
              ].map((req) => (
                <motion.div
                  key={req}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="flex items-start gap-3"
                >
                  <ChevronRight className="h-4 w-4 text-nxt-red flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--nxt-text-muted)]">
                    {req}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Application Form */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-[var(--nxt-dark)] border border-[var(--nxt-border)] relative overflow-hidden">
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-[var(--nxt-red)] via-[oklch(0.62_0.24_27)] to-transparent" />

              <div className="p-8">
                <h3 className="font-display font-black text-xl uppercase tracking-wider text-white mb-1">
                  Application Form
                </h3>
                <p className="text-xs text-[var(--nxt-text-muted)] tracking-widest uppercase mb-8">
                  Fill out the form — we'll review and reach out via Discord
                </p>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      data-ocid="join.success_state"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <CheckCircle2 className="h-16 w-16 text-emerald-400 mb-4" />
                      <h4 className="font-display font-black text-2xl uppercase tracking-wider text-white mb-2">
                        Application Sent!
                      </h4>
                      <p className="text-[var(--nxt-text-muted)] text-sm max-w-xs leading-relaxed mb-6">
                        Your application has been received. Join our Discord and
                        look out for a message from leadership.
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="text-xs font-bold tracking-widest uppercase text-nxt-red hover:text-[var(--nxt-red-bright)] transition-colors duration-200"
                      >
                        Submit Another Application
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      {/* Player Name */}
                      <div>
                        <label
                          htmlFor="playerName"
                          className="block text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)] mb-2"
                        >
                          Player Name *
                        </label>
                        <input
                          id="playerName"
                          type="text"
                          name="playerName"
                          data-ocid="join.player_name.input"
                          value={formData.playerName}
                          onChange={handleChange}
                          required
                          placeholder="Your name or handle"
                          className="w-full bg-[oklch(0.09_0_0)] border border-[var(--nxt-border)] text-white placeholder-[var(--nxt-text-muted)] px-4 py-3 text-sm transition-all duration-200 focus:border-[var(--nxt-red)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_27/0.3)]"
                        />
                      </div>

                      {/* Game Username */}
                      <div>
                        <label
                          htmlFor="gameUsername"
                          className="block text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)] mb-2"
                        >
                          Fortnite IGN *
                        </label>
                        <input
                          id="gameUsername"
                          type="text"
                          name="gameUsername"
                          data-ocid="join.username.input"
                          value={formData.gameUsername}
                          onChange={handleChange}
                          required
                          placeholder="Your Fortnite in-game name"
                          className="w-full bg-[oklch(0.09_0_0)] border border-[var(--nxt-border)] text-white placeholder-[var(--nxt-text-muted)] px-4 py-3 text-sm transition-all duration-200 focus:border-[var(--nxt-red)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_27/0.3)]"
                        />
                      </div>

                      {/* Age */}
                      <div>
                        <label
                          htmlFor="age"
                          className="block text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)] mb-2"
                        >
                          Age *
                        </label>
                        <input
                          id="age"
                          type="number"
                          name="age"
                          data-ocid="join.age.input"
                          value={formData.age}
                          onChange={handleChange}
                          required
                          min="13"
                          max="99"
                          placeholder="Your age"
                          className="w-full bg-[oklch(0.09_0_0)] border border-[var(--nxt-border)] text-white placeholder-[var(--nxt-text-muted)] px-4 py-3 text-sm transition-all duration-200 focus:border-[var(--nxt-red)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_27/0.3)]"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-bold tracking-widest uppercase text-[var(--nxt-text-muted)] mb-2"
                        >
                          Why do you want to join? *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          data-ocid="join.message.textarea"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Tell us about yourself, your experience, and why you want to be part of NTX Esports..."
                          className="w-full bg-[oklch(0.09_0_0)] border border-[var(--nxt-border)] text-white placeholder-[var(--nxt-text-muted)] px-4 py-3 text-sm transition-all duration-200 focus:border-[var(--nxt-red)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_27/0.3)] resize-none"
                        />
                      </div>

                      {/* Error State */}
                      <AnimatePresence>
                        {status === "error" && (
                          <motion.div
                            data-ocid="join.error_state"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-2 p-3 bg-[oklch(0.55_0.22_27/0.1)] border border-[oklch(0.55_0.22_27/0.4)] text-sm text-[oklch(0.75_0.15_27)]"
                          >
                            <AlertCircle className="h-4 w-4 flex-shrink-0" />
                            {errorMessage}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit */}
                      <button
                        type="submit"
                        data-ocid="join.submit_button"
                        disabled={status === "loading"}
                        className="group relative w-full py-4 bg-[var(--nxt-red)] text-white font-black text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[var(--nxt-red-bright)] glow-red hover:shadow-red-md disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nxt-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nxt-dark)] overflow-hidden"
                      >
                        {status === "loading" ? (
                          <span
                            data-ocid="join.loading_state"
                            className="flex items-center justify-center gap-2"
                          >
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Submitting Application...
                          </span>
                        ) : (
                          <>
                            <span className="relative z-10">Apply Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
