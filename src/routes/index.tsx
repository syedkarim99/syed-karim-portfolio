import resumePDF from "../assets/Syed_Karim_Resume.pdf";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Code2, LineChart, Globe } from "lucide-react";
import profile from "../assets/profile.jpg"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syed Karim — Computer Science Student & Software Developer" },
      { name: "description", content: "Aspiring software engineer building analytics tools, web apps, and data-driven systems. BS Computer Science, Saint Louis University Baguio." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Available for collaboration
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                Syed <span className="text-gradient">Karim</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground font-medium">
                Computer Science Student · Software Developer · Data Science Enthusiast
              </p>
              <p className="mt-5 text-muted-foreground max-w-lg leading-relaxed">
                Passionate about software engineering, analytics systems, and technology
                innovation. Currently developing an analytics application for traders to
                turn raw market data into actionable insight.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-ring"
                >
                  View Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} /> Contact Me
                </Link>
                <a
                  href={resumePDF}
target="_blank"
rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <Download size={16} /> Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden glass p-2">
                <img
                  src={profile}
                  alt="Syed Karim"
                  width={520}
                  height={520}
                  className="rounded-2xl w-full max-w-md object-cover aspect-square"
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-card hidden sm:block"
              >
                <div className="text-xs text-muted-foreground">Currently Building</div>
                <div className="font-display font-semibold flex items-center gap-2 mt-1">
                  <LineChart size={16} className="text-primary" />
                  Trader Analytics App
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Code2, title: "Software Engineering", desc: "Python · Java · Node.js" },
            { icon: LineChart, title: "Data & Analytics", desc: "Insight from raw data" },
            { icon: Globe, title: "Web Development", desc: "Full-stack systems" },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-gradient glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <f.icon className="text-primary mb-3" size={24} />
              <div className="font-display font-semibold">{f.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-16">
        <div className="card-gradient glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <Sparkles className="absolute top-8 left-8 text-primary/30" size={32} />
          <Sparkles className="absolute bottom-8 right-8 text-accent/30" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's build something <span className="text-gradient">meaningful</span>.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Open to internships, collaborations, and freelance projects in software development and analytics.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-ring"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
