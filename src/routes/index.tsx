import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Hammer, Rocket, BadgeCheck, RotateCw } from "lucide-react";
import { BottomNav, TopBar } from "@/components/nav";
import { Section, Card, Chip } from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABTalks — 60 Days of Shipping" },
      {
        name: "description",
        content:
          "A 60-day coding challenge for students: build every day, push to GitHub, share on LinkedIn, and make your progress impossible to ignore.",
      },
      { property: "og:title", content: "ABTalks — 60 Days of Shipping" },
      {
        property: "og:description",
        content:
          "Build → Ship → Prove → Repeat. 60 days, 60 builds, 60 public proofs.",
      },
    ],
  }),
  component: Landing,
});

const steps = [
  { n: "01", title: "BUILD", copy: "A focused build every single day.", icon: Hammer },
  { n: "02", title: "SHIP", copy: "Push it to GitHub. Real commits.", icon: Rocket },
  { n: "03", title: "PROVE", copy: "Post what you learned on LinkedIn.", icon: BadgeCheck },
  { n: "04", title: "REPEAT", copy: "Keep the streak alive for 60 days.", icon: RotateCw },
];

const milestones = [1, 15, 30, 45, 60];

function Landing() {
  return (
    <div className="min-h-screen pb-24 md:pb-10">
      <TopBar
        right={
          <Link
            to="/dashboard"
            className="rounded-full border border-border px-3.5 py-2 text-xs font-semibold text-foreground"
          >
            Dashboard
          </Link>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid-lines border-b border-border px-5 pt-10 pb-12">
          <div className="mx-auto max-w-3xl">
            <Chip tone="primary">60-day challenge</Chip>
            <h1 className="mt-5 font-display text-[3.25rem] leading-[0.92] font-bold tracking-tight sm:text-7xl">
              60 DAYS
              <br />
              <span className="text-primary">OF SHIPPING.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Build something every day. Push it. Post it. Make your progress
              impossible to ignore.
            </p>
            <Link
              to="/dashboard"
              className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-transform active:scale-[0.98] sm:w-auto"
            >
              Start the Challenge
              <ArrowRight size={18} aria-hidden />
            </Link>
            <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Build → Ship → Prove → Repeat
            </p>
          </div>
        </section>

        {/* The challenge */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-3xl grid-cols-3 divide-x divide-border">
            {[
              ["60", "Days"],
              ["60", "Builds"],
              ["60", "Proofs"],
            ].map(([v, l]) => (
              <div key={l} className="px-4 py-7 text-center">
                <p className="font-display text-4xl font-bold text-primary">{v}</p>
                <p className="label-xs mt-1">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <Section label="How it works" className="mx-auto max-w-3xl pt-10">
          <ul className="space-y-3">
            {steps.map(({ n, title, copy, icon: Icon }) => (
              <li
                key={n}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-4"
              >
                <span className="font-mono text-sm text-primary">{n}</span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-bold tracking-wide">{title}</p>
                  <p className="text-sm text-muted-foreground">{copy}</p>
                </div>
                <Icon size={20} className="shrink-0 text-muted-foreground" aria-hidden />
              </li>
            ))}
          </ul>
        </Section>

        {/* Journey */}
        <Section label="The journey" className="mx-auto max-w-3xl pt-10">
          <Card>
            <div className="relative">
              <div className="absolute inset-x-0 top-2.5 h-px bg-border" />
              <div className="absolute left-0 top-2.5 h-px w-1/4 bg-primary" />
              <ol className="relative flex justify-between">
                {milestones.map((d, i) => (
                  <li key={d} className="flex flex-col items-center gap-2">
                    <span
                      className={`size-5 rounded-full border-2 ${
                        i === 0
                          ? "border-primary bg-primary"
                          : "border-border bg-card"
                      }`}
                    />
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {String(d).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Week 1 you fight resistance. By day 30 it's a habit. By day 60 you
              have a portfolio nobody can argue with.
            </p>
          </Card>
        </Section>

        {/* Public proof */}
        <Section label="Public proof" className="mx-auto max-w-3xl pt-10">
          <div className="grid gap-3 sm:grid-cols-2">
            <Card>
              <Github size={20} className="text-primary" aria-hidden />
              <h2 className="mt-3 font-display text-lg font-bold">GitHub</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                60 days of commits. A green wall recruiters can verify in
                seconds.
              </p>
            </Card>
            <Card>
              <Linkedin size={20} className="text-primary" aria-hidden />
              <h2 className="mt-3 font-display text-lg font-bold">LinkedIn</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                60 posts of what you learned. Visibility compounds while you
                sleep.
              </p>
            </Card>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="mx-auto max-w-3xl pt-10">
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-center">
            <h2 className="font-display text-3xl leading-tight font-bold">
              Your first build
              <br />
              starts today.
            </h2>
            <Link
              to="/dashboard"
              className="mt-6 inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground active:scale-[0.98] sm:w-auto"
            >
              Start the 60-Day Challenge
            </Link>
          </div>
        </Section>

        <footer className="mx-auto max-w-3xl px-5 py-10">
          <p className="label-xs">ABTalks · Build → Ship → Prove → Repeat</p>
        </footer>
      </main>

      <BottomNav />
    </div>
  );
}
