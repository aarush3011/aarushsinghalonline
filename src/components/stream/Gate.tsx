import { useEffect, useState } from "react";
import { Code2, Briefcase, Sparkles } from "lucide-react";

export type ProfileId = "developer" | "recruiter" | "client";

export const PROFILES: { id: ProfileId; name: string; type: string; cta: string; icon: typeof Code2; tone: string }[] = [
  { id: "developer", name: "Aarush", type: "Developer", cta: "Explore the code", icon: Code2, tone: "from-primary/80 to-primary/20" },
  { id: "recruiter", name: "Recruiter", type: "Hiring", cta: "Explore Resume", icon: Briefcase, tone: "from-muted-foreground/60 to-muted/40" },
  { id: "client", name: "Client", type: "Collaborator", cta: "View My Work", icon: Sparkles, tone: "from-foreground/50 to-muted/30" },
];

export const Loader = ({ onDone }: { onDone: () => void }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 1400);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center anim-fade" role="status" aria-label="Loading">
      <span className="font-display text-6xl md:text-8xl text-primary anim-zoom tracking-wider">AARUSH</span>
      <div className="mt-6 h-[2px] w-40 bg-muted overflow-hidden rounded">
        <div className="h-full bg-primary origin-left" style={{ animation: "loadbar 1.2s cubic-bezier(.6,0,.2,1) both" }} />
      </div>
    </div>
  );
};

export const WhoIsWatching = ({ onSelect }: { onSelect: (p: ProfileId) => void }) => {
  const [leaving, setLeaving] = useState<ProfileId | null>(null);
  const pick = (id: ProfileId) => {
    setLeaving(id);
    setTimeout(() => onSelect(id), 450);
  };
  return (
    <div
      className={`fixed inset-0 z-[90] bg-background grain flex flex-col items-center justify-center px-6 transition-all duration-500 ${
        leaving ? "opacity-0 scale-110" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.12),transparent_60%)]" />
      <p className="relative text-xs tracking-[0.4em] text-muted-foreground mb-3 anim-rise">STREAM THE EXPERIENCE</p>
      <h1 className="relative font-display text-5xl md:text-7xl mb-12 anim-rise" style={{ animationDelay: "80ms" }}>
        Who's watching?
      </h1>
      <ul className="relative flex flex-wrap justify-center gap-6 md:gap-10">
        {PROFILES.map((p, i) => {
          const Icon = p.icon;
          return (
            <li key={p.id} className="anim-rise" style={{ animationDelay: `${160 + i * 90}ms` }}>
              <button onClick={() => pick(p.id)} className="group flex flex-col items-center gap-3 focus-visible:outline-none" aria-label={`Continue as ${p.name}`}>
                <span
                  className={`relative w-28 h-28 md:w-36 md:h-36 rounded-md bg-gradient-to-br ${p.tone} flex items-center justify-center ring-2 ring-transparent transition-all duration-300 group-hover:ring-foreground group-hover:scale-105 group-focus-visible:ring-primary`}
                >
                  <Icon className="w-12 h-12 md:w-14 md:h-14 text-foreground/90" strokeWidth={1.4} />
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-lg">{p.name}</span>
                <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground/70">{p.cta}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
