import { useState, useEffect } from "react";
import { Link } from "react-scroll";

// Real resume file — place Yusuf_Resume.pdf in your /public folder
const RESUME_URL = "/Yusuf_Resume.pdf";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FIX: Close mobile menu on Escape key for better accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 transition-colors duration-500 ease-out ${
        scrolled ? "bg-[#0a0a0f]/95 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="h-16 px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between relative">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold tracking-tight cursor-pointer group"
        >
          <span className="text-[#8b5cf6] group-hover:text-[#9d6bff] transition-colors duration-300">Yusuf</span>
          <span className="text-white/95">.dev</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="active text-white"
                className="relative px-4 py-2.5 text-lg font-medium text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer tracking-wide group/link"
              >
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#8b5cf6] scale-x-0 group-hover/link:scale-x-100 group-[.active]:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button — FIX: Updated to real resume URL, fixed transition */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume in new tab"
          className="hidden md:inline-flex items-center justify-center px-4 py-2 text-[13px] font-semibold bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c3aed] hover:shadow-lg hover:shadow-[#8b5cf6]/25 transition-colors duration-300"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {/* FIX: Split transition-all into specific transition utilities per span */}
          <span className={`block w-5 h-0.5 bg-slate-300 rounded-full transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 rounded-full transition-opacity duration-300 mt-1.5 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 rounded-full transition-transform duration-300 mt-1.5 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1]"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="md:hidden bg-[#0f0f17]/98 backdrop-blur-xl border-t border-white/[0.06] px-6 py-8 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-3.5 px-4 text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* FIX: Updated to real resume URL */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in new tab"
              className="mt-4 inline-flex items-center justify-center w-full py-3.5 px-6 text-[14px] font-semibold bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c3aed] transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;