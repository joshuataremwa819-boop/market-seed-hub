import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Smartphone, TrendingUp, Users, ShoppingCart, BarChart3, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "500+", label: "Farmers Onboarded" },
  { value: "2,000+", label: "Weekly Orders" },
  { value: "30%", label: "Income Increase" },
  { value: "4.8★", label: "User Rating" },
];

const features = [
  { icon: ShoppingCart, title: "Product Listings", desc: "Farmers list fresh produce with photos, quantity, and pricing in seconds." },
  { icon: Users, title: "Direct Connection", desc: "Buyers connect directly with farmers — no middlemen, no hidden fees." },
  { icon: Smartphone, title: "Mobile-Friendly", desc: "Fully responsive design works seamlessly on any phone, tablet, or desktop." },
  { icon: TrendingUp, title: "Price Comparison", desc: "Compare prices across sellers to find the best deals in your area." },
  { icon: Truck, title: "Delivery Tracking", desc: "Track your order from farm to doorstep with real-time status updates." },
  { icon: ShieldCheck, title: "Secure Payments", desc: "Safe mobile money and bank transfer options with transaction protection." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Farmers get insights on sales trends, popular products, and revenue." },
];

const steps = [
  { num: "1", title: "Sign Up", desc: "Create a free account as a farmer or buyer in under a minute." },
  { num: "2", title: "List or Browse", desc: "Farmers upload products; buyers search by category, location, or price." },
  { num: "3", title: "Place Order", desc: "Buyers select products, choose quantity, and confirm the order." },
  { num: "4", title: "Get Delivered", desc: "Delivery is arranged and tracked until the produce reaches the buyer." },
];

const Home = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-poster-green-dark text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Connecting Farmers<br className="hidden md:block" /> to Buyers Digitally
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Smart Market Connect eliminates middlemen, enabling farmers to sell directly to hotels, households, and retailers at fair, transparent prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/features" className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Explore Features <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-5 text-center shadow-md">
              <p className="text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Core Features</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Seven powerful features designed to make agricultural trade simple, fair, and efficient.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Agricultural Trade?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Join hundreds of farmers and buyers already using Smart Market Connect for fair, transparent, digital trade.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
