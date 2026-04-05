import { Target, Eye, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Target, title: "Our Mission", desc: "To empower smallholder farmers with digital tools that provide direct market access, fair pricing, and sustainable income growth." },
  { icon: Eye, title: "Our Vision", desc: "A future where every farmer, regardless of location, can connect with buyers transparently and trade without exploitation by middlemen." },
  { icon: Lightbulb, title: "Our Approach", desc: "We combine mobile-first technology with local market knowledge to build a platform that works even in low-connectivity rural areas." },
];

const team = [
  { name: "Project Lead", role: "Strategy & Business Development" },
  { name: "Tech Lead", role: "Full-Stack Development" },
  { name: "Marketing Lead", role: "Digital Marketing & Outreach" },
  { name: "Design Lead", role: "UX/UI & Brand Identity" },
];

const About = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-poster-green-dark text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Smart Market Connect</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            A university project tackling real-world agricultural trade challenges through ICT entrepreneurship and digital marketing.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Approach */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6 rounded-xl border border-border bg-card">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-semibold text-lg mb-2">{v.title}</h2>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">The Problem We Solve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "No Market Access", desc: "Smallholder farmers in rural areas lack direct access to urban buyers and retailers." },
              { title: "Middlemen Exploitation", desc: "Intermediaries take up to 40% of the final price, leaving farmers with minimal profit." },
              { title: "Unreliable Supply", desc: "Buyers struggle to find consistent, quality produce suppliers they can trust." },
            ].map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-destructive mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((t) => (
            <div key={t.role} className="p-4 rounded-xl border border-border bg-card">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-primary">
                {t.name.split(" ").map((w) => w[0]).join("")}
              </div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
