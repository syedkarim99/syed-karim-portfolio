import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, Building2, Code2 } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Syed Karim" },
      { name: "description", content: "Work and project experience: industrial work in Malaysia, student assistant at SLU Registrar, and software development projects." },
    ],
  }),
  component: Experience,
});

const items = [
  {
    icon: Briefcase,
    title: "Wire Factory Worker",
    org: "Malaysia",
    date: "2023",
    desc: "Built a strong work ethic, adaptability, teamwork, and communication skills in a professional industrial environment.",
  },
  {
    icon: Building2,
    title: "Student Assistant",
    org: "Saint Louis University — Registrar's Office",
    date: "August 1–6, 2024",
    desc: "Assisted with administrative tasks and student record management. Supported daily office operations and organizational workflows.",
  },
  {
    icon: Code2,
    title: "Software Development & Technical Projects",
    org: "Academic & Personal",
    date: "Ongoing",
    desc: "Building applications across Python, data analysis, web systems, and networking. Currently developing an analytics software application for traders.",
  },
];

function Experience() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-sm text-primary font-medium mb-3">Experience</div>
        <h1 className="text-4xl md:text-5xl font-bold">
          A path of <span className="text-gradient">learning by doing</span>.
        </h1>
      </motion.div>

      <div className="mt-12 relative">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground glow-ring">
                <it.icon size={18} />
              </div>
              <div className="card-gradient glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-semibold text-lg">{it.title}</h3>
                  <span className="text-xs font-mono text-primary">{it.date}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{it.org}</div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
