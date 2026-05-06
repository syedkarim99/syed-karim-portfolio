import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Globe, Cog, BarChart3, Server, GraduationCap, Network } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Syed Karim" },
      { name: "description", content: "Software engineering, web development, custom software, data analytics, and academic project assistance." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Code2, title: "Software Engineering", desc: "Designing reliable, maintainable applications from spec to deployment." },
  { icon: Globe, title: "Web Application Development", desc: "Responsive, modern web apps with clean UI and solid backends." },
  { icon: Cog, title: "Custom Software Solutions", desc: "Tailored tools for your specific workflow and business problem." },
  { icon: BarChart3, title: "Data Analysis & Analytics", desc: "Turning raw data into clear, actionable visual insights." },
  { icon: Server, title: "Backend & Frontend Development", desc: "Full-stack development with Node.js, MongoDB, and modern UI tooling." },
  { icon: GraduationCap, title: "Academic Project Assistance", desc: "Guidance and collaboration on CS coursework and capstone projects." },
  { icon: Network, title: "Computer Networking Support", desc: "Basic networking setup, troubleshooting, and configuration help." },
];

function Services() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-sm text-primary font-medium mb-3">Services</div>
        <h1 className="text-4xl md:text-5xl font-bold">
          What I can <span className="text-gradient">help you build</span>.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Built with Python, Java, JavaScript, Node.js, MongoDB, and PHP.
        </p>
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group card-gradient glass rounded-2xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={22} />
            </div>
            <h3 className="mt-4 font-display font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
