import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import "./Navigation.css";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Index', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Log', href: '#education' },
    { name: 'Achieve', href: '#achievements' },
    { name: 'Certs', href: '#certificates' },
    { name: 'Comm', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="navigation-container">
        {/* Logo / ID */}
        <div className="navigation-logo">
          SK_PORTFOLIO_V2.0
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="nav-link"
            >
              <span className="nav-index">
                {`0${index + 1}`}
              </span>
              [{item.name}]
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="nav-link theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="mobile-nav-link"
            >
              <span className="mobile-nav-index">{`0${index + 1}`}</span>
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setIsMobileMenuOpen(false);
            }}
            className="mobile-nav-link"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;