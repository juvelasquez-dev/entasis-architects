import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Reveal from "./animations/Reveal";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="Entasis Architects"
            className="h-14 w-auto"
          />

          <div>
            <h1
              className={`text-xl font-semibold transition-colors duration-500 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Entasis
            </h1>

            <p
              className={`text-xs uppercase tracking-[0.35em] transition-colors duration-500 ${
                scrolled ? "text-gray-500" : "text-gray-300"
              }`}
            >
              Architects
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                  scrolled
                    ? "text-black hover:text-gray-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <ul className="flex flex-col">
            {navLinks.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 text-sm uppercase tracking-wider text-black transition hover:bg-gray-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;