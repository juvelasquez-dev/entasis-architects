function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black/70 via-black/40 to-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="Entasis Architects"
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-xl font-semibold tracking-wide text-white">
              Entasis
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-gray-300">
              Architects
            </p>
          </div>
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <a
              href="#home"
              className="text-sm uppercase tracking-wider text-white transition hover:text-gray-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-sm uppercase tracking-wider text-white transition hover:text-gray-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-sm uppercase tracking-wider text-white transition hover:text-gray-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-sm uppercase tracking-wider text-white transition hover:text-gray-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;