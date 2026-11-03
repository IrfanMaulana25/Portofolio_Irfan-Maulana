
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'text-violet-400'
        : 'text-gray-300 hover:text-violet-400'
    }`;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0b16]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 md:py-5 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 shrink-0"
        >
          <Code2 className="text-violet-400" size={27} />

          <span className="text-xl font-bold tracking-wide text-white">
            IRFAN<span className="text-violet-400">.</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <NavLink
          to="/contact"
          className="hidden md:block shrink-0 px-5 py-2.5 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:scale-105 transition-transform"
        >
          Let's Talk
        </NavLink>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0b16] border-t border-white/10 px-5 py-4">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-violet-500/10 text-violet-400'
                      : 'text-gray-300 hover:bg-white/5 hover:text-violet-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="mt-2 text-center px-5 py-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold"
            >
              Let's Talk
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
