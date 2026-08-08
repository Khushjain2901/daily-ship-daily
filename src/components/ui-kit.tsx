import type { ReactNode } from "react";
import { Check, Flame } from "lucide-react";

export function Section({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-5 ${className}`}>
      {label ? <p className="label-xs mb-3">{label}</p> : null}
      {children}
    </section>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-5 ${className}`}>
      {children}
    </div>
  );
}

export function Chip({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "primary" | "success";
}) {
  const tones = {
    muted: "border-border bg-secondary text-muted-foreground",
    primary: "border-primary/40 bg-primary/10 text-primary",
    success: "border-success/40 bg-success/10 text-success",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function StreakBadge({ days }: { days: number }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-flame/40 bg-flame/10 px-3 py-1.5 text-sm font-semibold text-flame">
      <Flame size={16} aria-hidden />
      {days}
      <span className="sr-only">day streak</span>
    </span>
  );
}

export function Progress({ value, label }: { value: number; label?: string }) {
  return (
    <div>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? "Challenge progress"}
        className="h-2.5 w-full overflow-hidden rounded-full bg-secondary"
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function CheckDot({ done }: { done: boolean }) {
  return done ? (
    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-success/15 text-success">
      <Check size={14} aria-hidden />
    </span>
  ) : (
    <span className="size-6 shrink-0 rounded-full border border-dashed border-border" />
  );
}
