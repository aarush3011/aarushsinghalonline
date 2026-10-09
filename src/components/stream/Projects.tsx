import { useEffect } from "react";
import { Play, Plus, Check, Github, ExternalLink, X, Download, Info } from "lucide-react";
import { Project } from "@/data/portfolio";
import { useMyList } from "@/hooks/useMyList";
import { Button } from "@/components/ui/button";

export const RowHeader = ({ title, subtitle, id }: { title: string; subtitle?: string; id?: string }) => (
  <div className="px-4 md:px-12 mb-1" id={id}>
    <h2 className="font-display text-3xl md:text-4xl tracking-wide">{title}</h2>
    {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
  </div>
);

export const ListButton = ({ id, compact = false }: { id: string; compact?: boolean }) => {
  const { has, toggle } = useMyList();
  const inList = has(id);
  if (compact)
    return (
      <button
        onClick={(e) => { e.stopPropagation(); toggle(id); }}
        aria-label={inList ? "Remove from My List" : "Add to My List"}
        className="w-9 h-9 rounded-full border-2 border-muted-foreground/70 hover:border-foreground flex items-center justify-center bg-background/60 transition"
      >
        {inList ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      </button>
    );
  return (
    <Button size="lg" variant="secondary" onClick={() => toggle(id)} className="bg-secondary/80 hover:bg-secondary">
      {inList ? <Check className="mr-2 h-5 w-5" /> : <Plus className="mr-2 h-5 w-5" />} My List
    </Button>
  );
};

export const ProjectCard = ({ project, onOpen, size = "wide" }: { project: Project; onOpen: (p: Project) => void; size?: "wide" | "large" }) => (
  <article
    className={`group relative shrink-0 snap-start rounded-md overflow-hidden bg-surface-2 cursor-pointer transition-all duration-500 hover:scale-[1.04] hover:z-10 hover:shadow-[var(--shadow-card)] focus-within:scale-[1.04] ${
      size === "large" ? "w-[78vw] sm:w-[420px] md:w-[520px] aspect-[16/10]" : "w-[72vw] sm:w-[320px] md:w-[360px] aspect-video"
    }`}
    onClick={() => onOpen(project)}
  >
    <img src={project.thumbnail} alt={`${project.title} preview`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 card-overlay opacity-80 group-hover:opacity-100 transition-opacity" />
    <div className="absolute inset-x-0 bottom-0 p-4">
      <p className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold">{project.category} · {project.year}</p>
      <h3 className="font-display text-2xl md:text-3xl leading-none mt-1">{project.title}</h3>
      <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-focus-within:max-h-40 group-focus-within:opacity-100 transition-all duration-500 overflow-hidden">
        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(project); }}
            aria-label={`Open ${project.title}`}
            className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
          >
            <Play className="w-4 h-4 fill-current" />
          </button>
          <ListButton id={project.id} compact />
          <span className="ml-auto text-[11px] text-muted-foreground truncate">{project.technologies.slice(0, 3).join(" · ")}</span>
        </div>
      </div>
      {project.progress !== undefined && (
        <div className="mt-3 h-[3px] bg-muted-foreground/30 rounded" aria-label={`${project.progress}% complete`}>
          <div className="h-full bg-primary rounded" style={{ width: `${project.progress}%` }} />
        </div>
      )}
    </div>
  </article>
);

export const ProjectRow = ({ projects, onOpen, size }: { projects: Project[]; onOpen: (p: Project) => void; size?: "wide" | "large" }) => (
  <div className="row-scroll">
    {projects.map((p) => <ProjectCard key={p.id} project={p} onOpen={onOpen} size={size} />)}
  </div>
);

export const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [project, onClose]);
  if (!project) return null;
  const primary = project.liveDemo || project.github;
  return (
    <div className="fixed inset-0 z-[70] bg-background/80 backdrop-blur-sm overflow-y-auto anim-fade" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="pm-title">
      <div className="relative max-w-4xl mx-auto my-0 md:my-10 bg-surface rounded-none md:rounded-lg overflow-hidden shadow-2xl anim-zoom" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary transition">
          <X className="w-5 h-5" />
        </button>
        <div className="relative aspect-video">
          <img src={project.thumbnail} alt={`${project.title} banner`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-fade-bottom" />
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
            <h2 id="pm-title" className="font-display text-4xl md:text-6xl leading-none">{project.title}</h2>
            <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
              <span className="text-primary font-semibold">{project.year}</span>
              <span className="border border-muted-foreground/50 px-2 text-xs">{project.category}</span>
              <span className="text-muted-foreground">{project.status}</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              {primary && (
                <Button size="lg" asChild>
                  <a href={primary} target="_blank" rel="noreferrer"><Play className="mr-2 h-5 w-5 fill-current" /> View Project</a>
                </Button>
              )}
              {project.github && (
                <Button size="lg" variant="secondary" asChild>
                  <a href={project.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-5 w-5" /> GitHub</a>
                </Button>
              )}
              {project.liveDemo && (
                <Button size="lg" variant="secondary" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 h-5 w-5" /> Live Demo</a>
                </Button>
              )}
              {project.download && (
                <Button size="lg" variant="secondary" asChild>
                  <a href={project.download}><Download className="mr-2 h-5 w-5" /> Code</a>
                </Button>
              )}
              <ListButton id={project.id} />
            </div>
            {!primary && (
              <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1"><Info className="w-3 h-3" /> Links coming soon.</p>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 p-6 md:p-10">
          <div className="md:col-span-2 space-y-6">
            <section>
              <h3 className="text-xs tracking-[0.3em] text-muted-foreground mb-2">WHAT IS IT?</h3>
              <p className="leading-relaxed">{project.description}</p>
            </section>
            <section>
              <h3 className="text-xs tracking-[0.3em] text-muted-foreground mb-2">MY CONTRIBUTION</h3>
              <p className="leading-relaxed text-muted-foreground">{project.contribution}</p>
            </section>
            <section>
              <h3 className="text-xs tracking-[0.3em] text-muted-foreground mb-3">FEATURES</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-primary rounded-full" />{f}</li>
                ))}
              </ul>
            </section>
          </div>
          <aside className="space-y-6 text-sm">
            <div>
              <h3 className="text-xs tracking-[0.3em] text-muted-foreground mb-2">MY ROLE</h3>
              {project.role.map((r) => <p key={r}>{r}</p>)}
            </div>
            <div>
              <h3 className="text-xs tracking-[0.3em] text-muted-foreground mb-2">TECHNOLOGIES</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => <span key={t} className="px-2 py-1 bg-muted rounded text-xs">{t}</span>)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
