import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Syed Karim" },
      { name: "description", content: "Third-year Computer Science student at Saint Louis University Baguio with experience in Python, data science, web development, and networking." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-sm text-primary font-medium mb-3">About Me</div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Curious, persistent, <span className="text-gradient">always building</span>.
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I'm <span className="text-foreground font-medium">Syed Karim</span>, a third-year
            Computer Science student with hands-on experience in Python, data science, web
            development, and networking. I've worked on both academic and personal projects,
            strengthening my technical and collaborative skills while building practical software
            applications.
          </p>
          <p>
            I'm driven by problem-solving and continuous learning. Whether I'm prototyping a
            data pipeline, designing a web system, or wiring up a backend service, I care about
            the small details that make software feel intentional and reliable.
          </p>
          <p>
            Right now I'm focused on building an analytics application for traders — a project
            that combines my interests in software engineering and data-driven decision making.
          </p>

          <div className="pt-4">
            <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen size={18} className="text-primary" />
              Coursework Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Programming", "Data Science", "Web Development", "Computer Networking"].map((c) => (
                <span key={c} className="px-3 py-1.5 rounded-full glass text-sm">{c}</span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="card-gradient glass rounded-2xl p-6 h-fit"
        >
          <GraduationCap className="text-primary mb-3" size={28} />
          <div className="font-display font-semibold text-lg">BS Computer Science</div>
          <div className="text-sm text-muted-foreground mt-1">Saint Louis University</div>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" /> Baguio, Philippines
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-primary" /> Expected 2027
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
