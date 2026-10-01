import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { navItems } from '@/data/products';
import { siteConfig } from '@/data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-inner py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Logo onDark variant="full" />
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-xs">
              {siteConfig.tagline}{' '}
              {siteConfig.description}
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-white/50" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 flex-shrink-0 text-white/50" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 flex-shrink-0 text-white/50" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {year} Wellshark Pharmaceuticals Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
