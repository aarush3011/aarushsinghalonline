import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { projects, experience, skills, photos, education, Project } from "@/data/portfolio";
import { scrollTo } from "./StreamNav";

type Result = { kind: string; title: string; sub: string; action: () => void };

const SearchOverlay = ({ open, onClose, onOpenProject }: { open: boolean; onClose: () => void; onOpenProject: (p: Project) => void }) => {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setTimeout(() => input.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo<Result[]>(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    const m = (...f: string[]) => f.join(" ").toLowerCase().includes(s);
    const go = (id: string) => () => { onClose(); setTimeout(() => scrollTo(id), 50); };
    const r: Result[] = [];
    projects.forEach((p) => m(p.title, p.description, p.category, ...p.technologies, ...p.role) &&
      r.push({ kind: "Project", title: p.title, sub: p.technologies.join(" · "), action: () => { onClose(); onOpenProject(p); } }));
    experience.forEach((e) => m(e.company, ...e.titles, ...e.skills, e.summary) &&
      r.push({ kind: "Experience", title: e.company, sub: e.titles.join(" · "), action: go("experience") }));
    skills.forEach((c) => c.items.forEach((i) => m(i.name, c.category) &&
      r.push({ kind: "Skill", title: i.name, sub: c.category, action: go("skills") })));
    education.forEach((e) => m(e.institution, e.degree) &&
      r.push({ kind: "Education", title: e.institution, sub: e.degree, action: go("origin") }));
    photos.forEach((p) => m(p.title, p.category, "photography") &&
      r.push({ kind: "Photography", title: p.title, sub: p.category, action: go("photography") }));
    return r;
  }, [q, onClose, onOpenProject]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-md anim-fade overflow-y-auto" role="dialog" aria-modal="true" aria-label="Search">
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <button onClick={onClose} aria-label="Close search" className="fixed top-5 right-5 w-10 h-10 rounded-full hover:bg-accent flex items-center justify-center">
          <X className="w-6 h-6" />
        </button>
        <label className="flex items-center gap-4 border-b-2 border-muted focus-within:border-primary transition-colors pb-3">
          <Search className="w-7 h-7 text-muted-foreground" />
          <span className="sr-only">Search projects, skills, experience</span>
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Projects, skills, experience…"
            className="flex-1 bg-transparent text-2xl md:text-4xl font-display tracking-wide outline-none placeholder:text-muted-foreground/50"
          />
        </label>
        {!q && <p className="mt-6 text-sm text-muted-foreground">Try “React”, “Python”, “Graphura” or “Street”.</p>}
        {q && results.length === 0 && (
          <div className="mt-16 text-center anim-rise">
            <p className="font-display text-3xl">No results found</p>
            <p className="text-muted-foreground mt-2">Nothing matches “{q}”. Try another title or skill.</p>
          </div>
        )}
        <ul className="mt-8 divide-y divide-border">
          {results.map((r, i) => (
            <li key={r.kind + r.title + i} className="anim-rise" style={{ animationDelay: `${i * 30}ms` }}>
              <button onClick={r.action} className="w-full text-left py-4 flex items-center gap-4 group">
                <span className="text-[10px] tracking-[0.25em] uppercase text-primary w-24 shrink-0">{r.kind}</span>
                <span className="flex-1">
                  <span className="block text-lg group-hover:text-primary transition-colors">{r.title}</span>
                  <span className="block text-xs text-muted-foreground">{r.sub}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchOverlay;
