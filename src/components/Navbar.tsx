import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass shadow-lg" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              SK
            </span>
            <span className="hidden sm:inline">Syed Karim</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                activeProps={{ className: "px-3 py-2 text-sm text-primary rounded-lg bg-primary/10" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-3 animate-fade-in">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg"
                activeProps={{ className: "block px-4 py-3 text-sm text-primary bg-primary/10 rounded-lg" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
