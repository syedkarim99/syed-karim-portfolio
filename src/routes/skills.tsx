import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code, Database, Globe, Network, Brain, Users, Lightbulb, Rocket, RefreshCw, BookOpen } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Syed Karim" },
      { name: "description", content: "Technical and professional skills: Python, Java, JavaScript, Node.js, MongoDB, PHP, data science, networking." },
    ],
  }),
  component: Skills,
});

const technical = [
  { name: "Software Engineering", level: 85, icon: Code },
  { name: "Python Programming", level: 90, icon: Code },
  { name: "Data Science & Analysis", level: 80, icon: Database },
  { name: "Web Development", level: 85, icon: Globe },
  { name: "Computer Networking", level: 75, icon: Network },
  { name: "Java", level: 78, icon: Code },
  { name: "JavaScript", level: 82, icon: Code },
  { name: "Node.js", level: 75, icon: Code },
  { name: "MongoDB", level: 72, icon: Database },
  { name: "PHP", level: 70, icon: Code },
];

const soft = [
  { name: "Problem-solving", icon: Brain },
  { name: "Critical thinking", icon: Lightbulb },
  { name: "Team collaboration", icon: Users },
  { name: "Project development", icon: Rocket },
  { name: "Adaptability", icon: RefreshCw },
  { name: "Continuous learning", icon: BookOpen },
];

function Skills() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-sm text-primary font-medium mb-3">Skills</div>
        <h1 className="text-4xl md:text-5xl font-bold">
          A growing <span className="text-gradient">technical toolkit</span>.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Languages and tools I use to design, build, and reason about software.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 mt-12">
        <div>
          <h2 className="text-xl font-display font-semibold mb-5">Technical</h2>
          <div className="space-y-4">
            {technical.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="card-gradient glass rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-medium">
                    <s.icon size={16} className="text-primary" />
                    {s.name}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.04 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold mb-5">Professional</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {soft.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-gradient glass rounded-xl p-5 hover:border-primary/50 hover:-translate-y-1 transition-all"
              >
                <s.icon size={22} className="text-primary mb-3" />
                <div className="font-medium">{s.name}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 card-gradient glass rounded-2xl p-6">
            <h3 className="font-display font-semibold mb-3">Tech Stack Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "JavaScript", "Node.js", "MongoDB", "PHP", "phpMyAdmin", "HTML/CSS", "Git"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
