import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Clock, Flame, Github, Linkedin, Signal } from "lucide-react";
import { BottomNav, TopBar } from "@/components/nav";
import { Card, Chip, Progress, Section, StreakBadge, CheckDot } from "@/components/ui-kit";
import { achievements, initialProof, student, todaysMission } from "@/data/mock";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — ABTalks 60-Day Challenge" },
      {
        name: "description",
        content:
          "Your daily command center: streak, 60-day progress, today's mission and proof of work.",
      },
      { property: "og:title", content: "Dashboard — ABTalks" },
      {
        property: "og:description",
        content: "Track your streak, today's build and your public proof.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const [proof, setProof] = useState(initialProof);
  const done = Object.values(proof).filter(Boolean).length;
  const complete = done === 3;

  return (
    <div className="min-h-screen pb-24 md:pb-10">
      <TopBar right={<StreakBadge days={student.currentStreak} />} />

      <main className="mx-auto max-w-3xl">
        {/* Header */}
        <Section className="pt-6">
          <p className="text-sm text-muted-foreground">Good evening, {student.name}.</p>
          <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
            <div className="min-w-0">
              <p className="label-xs">{student.track}</p>
              <h1 className="font-display text-4xl font-bold tracking-tight">
                DAY {student.currentDay}
                <span className="text-muted-foreground"> / {student.totalDays}</span>
              </h1>
            </div>
            <p className="shrink-0 font-mono text-sm text-primary">
              {student.completion}%
            </p>
          </div>
          <div className="mt-4">
            <Progress value={student.completion} label="60-day challenge progress" />
          </div>
        </Section>

        {/* Today's mission */}
        <Section className="pt-7">
          <div className="rounded-2xl border border-primary/35 bg-primary/[0.06] p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="label-xs text-primary">Today's mission</p>
              <p className="font-mono text-[11px] text-muted-foreground">
                DAY {todaysMission.day}
              </p>
            </div>
            <h2 className="mt-3 font-display text-2xl leading-tight font-bold">
              {todaysMission.title}
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {todaysMission.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>
                <Clock size={13} aria-hidden /> {todaysMission.time}
              </Chip>
              <Chip>
                <Signal size={13} aria-hidden /> {todaysMission.difficulty}
              </Chip>
            </div>
            <Link
              to="/day/$day"
              params={{ day: "12" }}
              className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground active:scale-[0.98]"
            >
              Continue Mission
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </Section>

        {/* Proof progress */}
        <Section label="Today's progress" className="pt-7">
          <Card>
            <ul className="space-y-3">
              {(
                [
                  ["build", "Build", null],
                  ["github", "GitHub", Github],
                  ["linkedin", "LinkedIn", Linkedin],
                ] as const
              ).map(([key, label, Icon]) => {
                const isDone = proof[key];
                return (
                  <li
                    key={key}
                    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"
                  >
                    <CheckDot done={isDone} />
                    <span className="min-w-0 truncate text-sm font-medium">
                      {Icon ? (
                        <Icon size={14} className="mr-2 inline text-muted-foreground" aria-hidden />
                      ) : null}
                      {label}
                    </span>
                    {isDone ? (
                      <span className="font-mono text-[11px] text-success">DONE</span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setProof((p) => ({ ...p, [key]: true }))}
                        className="min-h-9 rounded-lg border border-primary/40 bg-primary/10 px-3 text-xs font-semibold text-primary"
                      >
                        Mark done
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 border-t border-border pt-4">
              {complete ? (
                <p className="font-display text-sm font-bold tracking-wide text-success">
                  DAY COMPLETE — proof locked.
                </p>
              ) : (
                <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                  {done} / 3 complete — your proof is waiting
                </p>
              )}
            </div>
          </Card>
        </Section>

        {/* Streak */}
        <Section label="Your streak" className="pt-7">
          <Card>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <p className="flex min-w-0 items-center gap-2 font-display text-2xl font-bold">
                <Flame size={22} className="shrink-0 text-flame" aria-hidden />
                {student.currentStreak} days
              </p>
              <p className="shrink-0 font-mono text-[11px] text-muted-foreground">
                LONGEST {student.longestStreak}
              </p>
            </div>
            <ul className="mt-5 flex justify-between">
              {student.week.map((d, i) => (
                <li key={i} className="flex flex-col items-center gap-2">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {d.label}
                  </span>
                  <span
                    className={`grid size-8 place-items-center rounded-full border ${
                      d.done
                        ? "border-flame/40 bg-flame/15 text-flame"
                        : "border-dashed border-border text-muted-foreground"
                    }`}
                  >
                    {d.done ? <Check size={14} aria-hidden /> : ""}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Day {student.missedDay} was missed. You don't need to restart — pick
              up today and keep moving.
            </p>
          </Card>
        </Section>

        {/* Achievements */}
        <Section label="Achievements" className="pt-7">
          <div className="flex flex-wrap gap-2">
            {achievements.map((a) => (
              <Chip key={a.label} tone={a.earned ? "success" : "muted"}>
                {a.earned ? <Check size={12} aria-hidden /> : null}
                {a.label}
              </Chip>
            ))}
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
