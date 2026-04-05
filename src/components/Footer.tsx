import { Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-20">
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 font-bold text-lg mb-3">
          <Sprout className="w-6 h-6" />
          Smart Market Connect
        </div>
        <p className="text-sm opacity-80">Connecting farmers to buyers digitally. Transparent pricing, no middlemen.</p>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm opacity-80">
          <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
          <li><Link to="/features" className="hover:opacity-100 transition-opacity">Features</Link></li>
          <li><Link to="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
          <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Contact</h3>
        <ul className="space-y-2 text-sm opacity-80">
          <li>Email: info@smartmarketconnect.com</li>
          <li>Phone: 0767 248 977</li>
          <li>Location: Rukungiri, Kashenyi, Uganda</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20 text-center text-xs py-4 opacity-60">
      © 2026 Smart Market Connect — University Project
    </div>
  </footer>
);

export default Footer;
