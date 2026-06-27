import { ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white">

      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="select-none text-[140px] font-black uppercase tracking-[25px] text-white/[0.03] md:text-[220px]">
          ENTASIS
        </h1>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        {/* Gold Accent */}
        <div className="mb-14 h-px w-32 bg-amber-400"></div>

        <div className="grid gap-14 md:grid-cols-4">

          {/* Company */}
          <div className="md:col-span-2">

            <img
              src="/images/logo.jpg"
              alt="Entasis Architects"
              className="mb-8 h-20 w-auto rounded"
            />

            <h2 className="text-4xl font-light tracking-wider">
              Entasis Architects
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              We design spaces that combine timeless architecture,
              thoughtful planning, and modern functionality.
              Every project is crafted to create lasting value.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="mb-6 text-sm uppercase tracking-[0.35em] text-gray-500">
              Navigation
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#home" className="transition hover:text-amber-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-amber-400">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="transition hover:text-amber-400">
                  Services
                </a>
              </li>

              <li>
                <a href="#projects" className="transition hover:text-amber-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-amber-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-sm uppercase tracking-[0.35em] text-gray-500">
              Connect
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>Baao, Camarines Sur. Philippines</p>

              <p>+63 900 000 0000</p>

              <p>info@entasisarchitects.com</p>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="https://www.facebook.com/profile.php?id=61559793543615"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Entasis Architects. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
          >
            <ArrowUp
              size={20}
              className="transition-transform group-hover:-translate-y-1"
            />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;