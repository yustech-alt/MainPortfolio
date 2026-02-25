import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const links = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

// FIX: Store icon component references instead of JSX elements in data
// to avoid shared JSX instance issues across renders.
const socials = [
  { Icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
  {
    Icon: FaLinkedin,
    href: "https://linkedin.com/in/yusufbalogun",
    label: "LinkedIn",
  },
  {
    Icon: FaTwitter,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
  { Icon: FaEnvelope, href: "mailto:yusuf@email.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative px-8 md:px-12 pt-20 pb-12 border-t border-[#8b5cf6]/10 flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-10 mb-14 w-full"
        >
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            {/* FIX: Use react-scroll Link for smooth scroll, consistent with rest of app */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-extrabold text-white cursor-pointer"
            >
              Yusuf<span className="text-[#8b5cf6]">.dev</span>
            </Link>
            <p className="text-sm text-[#94a3b8] max-w-xs text-center md:text-left">
              Frontend Developer building beautiful and functional web
              experiences.
            </p>
          </div>

          {/* Nav Links — FIX: Replaced hash hrefs with react-scroll Links for smooth scroll */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-sm text-[#94a3b8] hover:text-[#8b5cf6] transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                // FIX: mailto links don't need target="_blank" or rel
                target={
                  social.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  social.href.startsWith("mailto:") ?
                    undefined
                  : "noopener noreferrer"
                }
                aria-label={social.label}
                // FIX: Replaced transition-all with transition-colors (only border + text color change)
                className="w-11 h-11 rounded-xl bg-[#0f0f17] border border-[#8b5cf6]/20 hover:border-[#8b5cf6] hover:text-[#8b5cf6] text-[#94a3b8] flex items-center justify-center transition-colors duration-300"
              >
                {/* FIX: Render icon from component reference */}
                <social.Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent mb-10" />

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 w-full"
        >
          <p className="text-xs text-[#64748b]">
            &copy; {new Date().getFullYear()} Yusuf Balogun. All rights
            reserved.
          </p>
          {/* FIX: Replaced <p> with <span> — a <p> cannot contain an SVG icon (invalid HTML).
					    Also escaped & as &amp; */}
          <span className="text-xs text-[#64748b] flex items-center gap-1">
            Designed &amp; Built with{" "}
            <FaHeart className="text-[#8b5cf6] text-xs" /> by Yusuf Balogun
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
