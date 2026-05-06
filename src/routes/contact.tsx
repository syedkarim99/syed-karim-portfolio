import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Syed Karim" },
      {
        name: "description",
        content:
          "Get in touch with Syed Karim for collaboration, internships, or freelance projects.",
      },
    ],
  }),
  component: Contact,
});

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: "kk1444556@gmail.com",
    href: "mailto:kk1444556@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 991 718 2612",
    href: "tel:+639917182612",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "syed-karim-773198377",
    href: "https://www.linkedin.com/in/syed-karim-773198377",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Baguio, Philippines",
    href: "#",
  },
];

function Contact() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-sm text-primary font-medium mb-3">
          Contact
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">
          Let’s <span className="text-gradient">talk</span>.
        </h1>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          Have a project, internship opportunity, or just want to say hi?
          Feel free to reach out through email, phone, or LinkedIn.
        </p>
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-5 gap-8">
        {/* LEFT CONTACT CARDS */}
        <div className="lg:col-span-2 space-y-3">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 card-gradient glass rounded-xl p-4 hover:border-primary/50 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon size={20} />
              </div>

              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">
                  {c.label}
                </div>

                <div className="font-medium truncate">
                  {c.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 card-gradient glass rounded-2xl p-8 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Let’s Connect
          </h2>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            I’m open to internship opportunities, collaborations,
            software development projects, and networking with
            professionals in tech. Feel free to contact me directly
            through email, phone, or LinkedIn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kk1444556@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-ring"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/syed-karim-773198377"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}