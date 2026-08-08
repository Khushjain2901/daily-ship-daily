import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Flame, Target } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/dashboard", label: "Progress", icon: Flame },
  { to: "/day/12", label: "Today", icon: Target },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden"
    >
      <ul className="mx-auto flex max-w-md items-stretch">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                className={`flex min-h-14 flex-col items-center justify-center gap-1 py-2 text-[11px] font-medium ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon size={20} aria-hidden />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function TopBar({ right }: { right?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-3xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3.5">
        <Link to="/" className="min-w-0">
          <span className="font-display text-sm font-bold tracking-[0.22em]">ABTALKS</span>
        </Link>
        {right}
      </div>
    </header>
  );
}
