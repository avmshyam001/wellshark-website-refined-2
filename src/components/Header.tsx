import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { navItems } from '@/data/products';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isHeroTop = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const headerBg = isHeroTop
    ? 'bg-transparent'
    : 'bg-white border-b border-cool-200/70 shadow-sm';
  const textColor = isHeroTop ? 'text-white' : 'text-charcoal';
  const linkHover = isHeroTop
    ? 'hover:text-white/80'
    : 'hover:text-blue-600';
  const logoOnDark = isHeroTop;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="container-inner flex h-20 items-center justify-between">
          <Logo onDark={logoOnDark} />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => {
              const active =
                location.pathname === item.path ||
                (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${textColor} ${linkHover} ${
                    active
                      ? isHeroTop
                        ? 'text-white font-semibold'
                        : 'text-blue-600 font-semibold'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                isHeroTop
                  ? 'bg-white text-navy-900 hover:bg-white/90'
                  : 'bg-navy-900 text-white hover:bg-navy-800'
              }`}
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col animate-fade-slide">
            <div className="flex items-center justify-between px-6 h-20 border-b border-cool-200">
              <Logo />
              <button
                className="p-2 text-charcoal"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col px-4 py-4 flex-1" aria-label="Mobile primary">
              {navItems.map((item) => {
                const active =
                  location.pathname === item.path ||
                  (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-3.5 text-base font-medium rounded-lg transition-colors ${
                      active
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-charcoal hover:bg-cool-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="mt-4 mx-4 inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
