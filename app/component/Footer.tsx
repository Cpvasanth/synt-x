import React from 'react';
// We need icons for the button and social media links
// Install with: npm install react-icons
import {
  FiArrowUpRight,
  FiInstagram,
  FiYoutube
} from 'react-icons/fi';

// --- Link Data ---
// This makes the component cleaner and easier to update
const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact us', href: '/contact' },
];

const servicesLinks = [
  { name: 'Web design', href: '/services/web-design' },
  { name: 'Logo design', href: '/services/logo-design' },
  { name: 'Ad Shooting', href: '/services/ad-shooting' },
  { name: 'SEO', href: '/services/seo' },
  { name: 'Marketing', href: '/services/marketing' },
];

const socialLinks = [
  { name: 'Instagram', href: '#', icon: FiInstagram },
  { name: 'Youtube', href: '#', icon: FiYoutube },
];

// --- Main Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- Top CTA Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-neutral-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left max-w-lg">
            Ready to build a website that stands above the rest?
          </h2>
          <a
            href="/contact" // Change this to your quote/contact URL
            className="group relative inline-flex items-center justify-center gap-3 bg-black text-white py-3 pl-6 pr-14 rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors duration-300 flex-shrink-0"
          >
            <span className="font-medium">Ask for quote</span>
            {/* Yellow animated circle */}
            <div className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-black transition-transform duration-300 group-hover:translate-x-1">
              <FiArrowUpRight className="h-5 w-5" />
            </div>
          </a>
        </div>

        {/* --- Links Grid Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-12 pb-16">
          
          {/* Column 1: Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow us</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar (Copyright) --- */}
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Synt-x. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;