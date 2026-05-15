import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import talaLogo from "@/assets/tala-logo.png";
import { INSTAGRAM_URL } from "@/lib/brand";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Каталог", href: "/shop" },
    { name: "О бренде", href: "/about/our-story" },
  ];

  return (
    <nav
      className="relative"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex items-center justify-between h-16 px-6">
        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 mt-0.5 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Меню"
        >
          <div className="w-5 h-5 relative">
            <span
              className={`absolute block w-5 h-px bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 top-2.5" : "top-1.5"
              }`}
            ></span>
            <span
              className={`absolute block w-5 h-px bg-current transform transition-all duration-300 top-2.5 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block w-5 h-px bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 top-2.5" : "top-3.5"
              }`}
            ></span>
          </div>
        </button>

        {/* Left navigation - desktop */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-nav-foreground hover:text-nav-hover transition-colors duration-200 text-sm font-light py-6 block"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="block" aria-label="talá — главная">
            <img src={talaLogo} alt="talá" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Right - Instagram CTA */}
        <div className="flex items-center space-x-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200 flex items-center gap-2"
            aria-label="Написать в Instagram"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
            <span className="hidden md:inline text-sm font-light">Заказать</span>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-nav border-b border-border z-50 bg-background">
          <div className="px-6 py-8">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-nav-foreground hover:text-nav-hover transition-colors duration-200 text-lg font-light block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-nav-foreground text-lg font-light pt-4 border-t border-border w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
                Заказать в Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
