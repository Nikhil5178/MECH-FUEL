import { Link } from "react-router";
import { Fuel, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Fuel className="size-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Mech-Fuel</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for on-demand fuel delivery and roadside assistance. Available 24/7 to keep you moving.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/request" className="hover:text-orange-500 transition-colors">
                  Request Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-orange-500 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Fuel Delivery</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Tire Change</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Battery Jump Start</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Minor Repairs</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Emergency Towing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 text-orange-500 shrink-0" />
                <span>1-800-MECH-FUEL<br />(24/7 Support)</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 text-orange-500 shrink-0" />
                <span>support@mechfuel.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 text-orange-500 shrink-0" />
                <span>Serving nationwide across all major cities</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mech-Fuel. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
