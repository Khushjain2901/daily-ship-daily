import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Clock, Github, Linkedin, Signal } from "lucide-react";
import { BottomNav, TopBar } from "@/components/nav";
import { Card, Chip, Section, StreakBadge } from "@/components/ui-kit";
import { day12, isValidUrl, student } from "@/data/mock";

export const Route = createFileRoute("/day/$day")({
  head: () => ({
    meta: [
      { title: "Day 12 — Build a URL Shortener | ABTalks" },
      {
        name: "description",
        content:
          "Day 12 of the ABTalks 60-day challenge: build a URL shortener, ship it to GitHub and prove it on LinkedIn.",
      },
      { property: "og:title", content: "Day 12 — Build a URL Shortener" },
      {
        property: "og:description",
        content: "Build it. Ship it. Prove it. Day 12 of 60.",
      },
    ],
  }),
  component: DayPage,
});

function DayPage() {
  const challenge = day12;
  const [checked, setChecked] = useState<boolean[]>(
    () => challenge.requirements.map(() => false),
  );
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [touched, setTouched] = useState({ github: false, linkedin: false });
  const [submitted, setSubmitted] = useState(false);

  const githubOk = isValidUrl(github, "github.com");
  const linkedinOk = isValidUrl(linkedin, "linkedin.com");
  const ready = githubOk && linkedinOk;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched({ github: true, linkedin: true });
    if (ready) setSubmitted(true);
  };

  return (
    <div className="min-h-screen pb-24 md:pb-10">
      <TopBar right={<StreakBadge days={student.currentStreak} />} />

      <main className="mx-auto max-w-3xl">
        <Section className="pt-6">
          <p className="label-xs">
            Day {challenge.day} / {student.totalDays}
          </p>
          <h1 className="mt-2 font-display text-[2.5rem] leading-[0.95] font-bold tracking-tight uppercase">
            Build a URL
            <br />
            Shortener
          </h1>
          <p className="mt-4 font-mono text-xs tracking-[0.18em] text-primary uppercase">
            Build it. Ship it. Prove it.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip>
              <Clock size={13} aria-hidden /> {challenge.time}
            </Chip>
            <Chip>
              <Signal size={13} aria-hidden /> {challenge.difficulty}
            </Chip>
          </div>
        </Section>

        <Section label="Objective" className="pt-7">
          <p className="text-base leading-relaxed">{challenge.objective}</p>
        </Section>

        <Section label="Requirements" className="pt-7">
          <Card className="p-2">
            <ul>
              {challenge.requirements.map((r, i) => (
                <li key={r}>
                  <label className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl px-3 py-2">
                    <input
                      type="checkbox"
                      checked={checked[i]}
                      onChange={() =>
                        setChecked((c) => c.map((v, j) => (i === j ? !v : v)))
                      }
                      className="size-5 shrink-0 accent-[oklch(0.9_0.2_122)]"
                    />
                    <span
                      className={`min-w-0 text-sm ${
                        checked[i] ? "text-muted-foreground line-through" : ""
                      }`}
                    >
                      {r}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </Card>
        </Section>

        <Section label="Skills" className="pt-7">
          <div className="flex flex-wrap gap-2">
            {challenge.skills.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
          <p className="label-xs mt-6 mb-3">Suggested stack</p>
          <div className="flex flex-wrap gap-2">
            {challenge.stack.map((s) => (
              <Chip key={s} tone="primary">
                {s}
              </Chip>
            ))}
          </div>
        </Section>

        {/* Proof of work */}
        <Section className="pt-8">
          <div className="rounded-2xl border border-primary/35 bg-primary/[0.06] p-5">
            <h2 className="font-display text-2xl font-bold tracking-tight uppercase">
              Prove your work
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Your challenge isn't complete until you've shipped it publicly.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-xl border border-success/40 bg-success/10 p-5 text-center">
                <p className="flex items-center justify-center gap-2 font-display text-lg font-bold text-success">
                  <Check size={20} aria-hidden /> DAY 12 COMPLETE
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Proof locked. Your work is saved.
                </p>
              </div>
            ) : (
              <form className="mt-6 space-y-6" onSubmit={onSubmit} noValidate>
                <div>
                  <label
                    htmlFor="github"
                    className="flex items-center gap-2 text-sm font-semibold"
                  >
                    <Github size={16} aria-hidden /> GitHub
                  </label>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Push your project and paste your repository or commit URL.
                  </p>
                  <input
                    id="github"
                    type="url"
                    inputMode="url"
                    placeholder="https://github.com/you/url-shortener"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, github: true }))}
                    aria-invalid={touched.github && !githubOk}
                    className="mt-2.5 min-h-12 w-full rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground/70"
                  />
                  {github.length > 0 && githubOk ? (
                    <p className="mt-2 text-xs text-success">✓ GitHub link looks good</p>
                  ) : touched.github && !githubOk ? (
                    <p className="mt-2 text-xs text-destructive">
                      Please enter a valid GitHub URL
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="linkedin"
                    className="flex items-center gap-2 text-sm font-semibold"
                  >
                    <Linkedin size={16} aria-hidden /> LinkedIn
                  </label>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Share what you built publicly.
                  </p>
                  <input
                    id="linkedin"
                    type="url"
                    inputMode="url"
                    placeholder="https://linkedin.com/posts/..."
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, linkedin: true }))}
                    aria-invalid={touched.linkedin && !linkedinOk}
                    className="mt-2.5 min-h-12 w-full rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground/70"
                  />
                  {linkedin.length > 0 && linkedinOk ? (
                    <p className="mt-2 text-xs text-success">
                      ✓ LinkedIn link looks good
                    </p>
                  ) : touched.linkedin && !linkedinOk ? (
                    <p className="mt-2 text-xs text-destructive">
                      Please enter a valid LinkedIn URL
                    </p>
                  ) : null}
                </div>

                <div className="border-t border-border pt-4">
                  <p className="font-mono text-[11px] tracking-[0.14em] uppercase">
                    <span className={githubOk ? "text-success" : "text-muted-foreground"}>
                      {githubOk ? "✓" : "○"} GitHub
                    </span>
                    <span className="mx-3 text-border">|</span>
                    <span className={linkedinOk ? "text-success" : "text-muted-foreground"}>
                      {linkedinOk ? "✓" : "○"} LinkedIn
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {ready ? "Proof ready." : "Ship both links to complete Day 12."}
                  </p>
                  <button
                    type="submit"
                    disabled={!ready}
                    className="mt-4 min-h-13 w-full rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Submit Proof
                  </button>
                </div>
              </form>
            )}
          </div>
        </Section>

        <footer className="px-5 py-10">
          <p className="label-xs">Build → Ship → Prove → Repeat</p>
        </footer>
      </main>

      <BottomNav />
    </div>
  );
}
