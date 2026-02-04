import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/v-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Industries", path: "#industries" },
  { name: "Our Process", path: "/process" },
  { name: "Portfolio", path: "/work" },
  { name: "Contact", path: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // ✅ FIXED: hash scroll works after mobile animation + route change
  useEffect(() => {
    if (!location.hash) return;

    const timer = setTimeout(() => {
      const element = document.querySelector(location.hash);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/8nVFNhw8/vl.png"
              alt="V Agency"
              className="h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path.startsWith("#") ? "/" + link.path : link.path}
                onClick={handleNavClick}
                className="text-foreground/80 hover:text-foreground font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/onboard"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-all duration-300"
            >
              Get Onboard
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-foreground rounded-full origin-center transition-all"
            />
            <motion.span
              animate={
                isOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              className="w-4 h-0.5 bg-foreground rounded-full transition-all"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-foreground rounded-full origin-center transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path.startsWith("#") ? "/" + link.path : link.path}
                    onClick={handleNavClick}
                    className="block py-3 text-lg font-medium text-foreground/80 hover:text-foreground transition-colors border-b border-border/50"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* ✅ FIXED MOBILE CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/onboard"
                  onClick={handleNavClick}
                  className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 gradient-primary text-primary-foreground font-semibold rounded-full"
                >
                  Get Onboard
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
