export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-MatteBlack text-Beige py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-leiDevBlue">
              Laura Lei Vinsjevik
            </h3>
            <p className="text-sm text-gray-300">
              Frontend developer passionate about creating beautiful, functional
              web experiences with React and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-leiDevBlue">
              Quick Links
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#projects"
                  className="hover:text-leiDevBlue transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-leiDevBlue transition">
                  About
                </a>
              </li>
              <li>
                <a href="#toolbox" className="hover:text-leiDevBlue transition">
                  Toolbox
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-leiDevBlue transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-leiDevBlue">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/LauraBLei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-leiDevBlue transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/laura-lei-vinsjevik-860190268/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-leiDevBlue transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-Onyx my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Laura Lei Vinsjevik. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};
