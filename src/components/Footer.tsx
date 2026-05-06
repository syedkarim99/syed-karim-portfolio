import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                SK
              </span>
              Syed Karim
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Computer Science student building thoughtful software, analytics tools, and web experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/syed-karim-773198377"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg glass hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:kk1444556@gmail.com"
                className="p-2 rounded-lg glass hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg glass hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Syed Karim. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
