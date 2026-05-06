import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Github, Bus, Stethoscope, LineChart } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Syed Karim" },
      { name: "description", content: "Selected software projects: Shuttle Service Management, Prescription Management, and an Analytics Application for Traders." },
    ],
  }),
  component: Projects,
});

type Project = {
  title: string;
  desc: string;
  tech: string[];
  category: "Web" | "Data" | "System";
  icon: typeof Bus;
  status?: string;
};

const projects: Project[] = [
  {
    title: "Shuttle Service Management System",
    desc: "A school transportation platform that streamlines routes, schedules, and rider interactions for safer, more efficient operations.",
    tech: ["Java", "JavaScript", "Node.js", "MongoDB"],
    category: "System",
    icon: Bus,
  },
  {
    title: "Prescription Management System",
    desc: "Web system enabling patients, doctors, and admins to manage prescriptions and medical records with role-based workflows.",
    tech: ["PHP", "JavaScript", "phpMyAdmin"],
    category: "Web",
    icon: Stethoscope,
  },
  {
    title: "Analytics Application for Traders",
    desc: "Ongoing analytics tool helping traders explore market data and make informed, data-driven decisions through clear visual insights.",
    tech: ["Python", "Data Analysis"],
    category: "Data",
    icon: LineChart,
    status: "In Development",
  },
];

const filters = ["All", "Web", "Data", "System"] as const;

function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="container mx-auto px-6 py-16 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-sm text-primary font-medium mb-3">Projects</div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Selected <span className="text-gradient">work</span>.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A mix of academic, personal, and ongoing projects across web, data, and systems.
        </p>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              active === f
                ? "bg-primary text-primary-foreground glow-ring"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {visible.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="group card-gradient glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
          >
            <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/15 to-transparent flex items-center justify-center">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <p.icon size={64} className="text-primary/80 group-hover:scale-110 transition-transform" />
              {p.status && (
                <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
                  {p.status}
                </span>
              )}
              <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full glass">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
