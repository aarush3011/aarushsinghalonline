import { useEffect, useState } from "react";
import { Search, Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { PROFILES, ProfileId } from "./Gate";

const links = [
  { name: "Home", id: "home" },
  { name: "My Work", id: "work" },
  { name: "Experience", id: "experience" },
  { name: "About", id: "about" },
  { name: "Photography", id: "photography" },
  { name: "My List", id: "mylist" },
  { name: "Contact", id: "contact" },
];

export const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
};

interface Props {
  profileId: ProfileId;
  onSearch: () => void;
  onSwitch: () => void;
}

const StreamNav = ({ profileId, onSearch, onSwitch }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const p = PROFILES.find((x) => x.id === profileId)!;
  const Icon = p.icon;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "home";
      links.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= window.scrollY + 120) cur = l.id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-[0_8px_30px_hsl(0_0%_0%/0.6)]" : "bg-gradient-to-b from-background/90 to-transparent"
      }`}
    >
      <nav className="flex items-center h-16 px-4 md:px-12 gap-6" aria-label="Main">
        <button onClick={() => go("home")} className="font-display text-3xl text-primary tracking-wider leading-none">
          AARUSH
        </button>
        <ul className="hidden lg:flex items-center gap-5 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                aria-current={active === l.id ? "true" : undefined}
                className={`transition-colors ${active === l.id ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-4">
          <button onClick={onSearch} aria-label="Search" className="text-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden sm:block hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden sm:block hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <div className="relative">
            <button
              onClick={() => setMenu((m) => !m)}
              aria-label={`Profile: ${p.name}`}
              aria-expanded={menu}
              className="w-8 h-8 rounded bg-primary/80 flex items-center justify-center hover:ring-2 hover:ring-foreground transition"
            >
              <Icon className="w-4 h-4" />
            </button>
            {menu && (
              <div className="absolute right-0 mt-3 w-48 bg-surface-2 border border-border rounded-md py-2 shadow-2xl anim-fade">
                <p className="px-4 py-2 text-xs text-muted-foreground">Watching as {p.name}</p>
                <button onClick={() => { setMenu(false); onSwitch(); }} className="w-full text-left px-4 py-2 text-sm hover:bg-accent">
                  Switch Profile
                </button>
              </div>
            )}
          </div>
          <button className="lg:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 anim-fade">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => go(l.id)} className={`block w-full text-left py-3 text-base ${active === l.id ? "text-primary" : "text-foreground"}`}>
                {l.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default StreamNav;
