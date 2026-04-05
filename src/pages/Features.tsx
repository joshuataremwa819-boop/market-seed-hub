import { ShoppingCart, Users, Smartphone, TrendingUp, Truck, ShieldCheck, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: ShoppingCart, title: "Product Listings", desc: "Farmers create detailed listings with images, pricing, available quantity, and harvest date. Buyers can filter by category, location, and freshness.", color: "bg-primary/10 text-primary" },
  { icon: Users, title: "Direct Farmer-Buyer Connection", desc: "No middlemen. Buyers browse farmer profiles, see ratings, and communicate directly through the platform's built-in messaging.", color: "bg-secondary/10 text-secondary" },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Optimized for low-bandwidth environments. Works on any smartphone browser — no app download required. Supports USSD fallback for feature phones.", color: "bg-primary/10 text-primary" },
  { icon: TrendingUp, title: "Real-Time Price Comparison", desc: "Market price aggregation across regions. Buyers compare prices; farmers benchmark against competitors to set competitive rates.", color: "bg-secondary/10 text-secondary" },
  { icon: Truck, title: "Delivery & Logistics", desc: "Integrated delivery partner network. Track orders from farm gate to buyer doorstep with SMS and in-app notifications.", color: "bg-primary/10 text-primary" },
  { icon: ShieldCheck, title: "Secure Transactions", desc: "Mobile money (M-Pesa, Tigo Pesa) and bank transfers. Escrow protection ensures farmers get paid and buyers receive quality produce.", color: "bg-secondary/10 text-secondary" },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Farmers access dashboards showing sales trends, top products, seasonal demand forecasts, and revenue summaries to make data-driven decisions.", color: "bg-primary/10 text-primary" },
];

const Features = () => (
  <>
    <Navbar />
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Platform Features</h1>
      <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
        Smart Market Connect provides end-to-end tools that make digital agricultural trade accessible, transparent, and profitable.
      </p>

      <div className="space-y-8">
        {features.map((f, i) => (
          <div key={f.title} className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl border border-border bg-card ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${f.color} flex items-center justify-center`}>
              <f.icon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{f.title}</h2>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default Features;
