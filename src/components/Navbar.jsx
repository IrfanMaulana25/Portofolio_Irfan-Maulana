import { NavLink } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0b16]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <Code2 className="text-violet-400" size={27} />

          <span className="text-xl font-bold tracking-wide text-white">
            IRFAN<span className="text-violet-400">.</span>
          </span>
        </NavLink>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                  isActive
                    ? 'text-violet-400'
                    : 'text-gray-300 hover:text-violet-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Contact Button */}
        <NavLink
          to="/contact"
          className="hidden md:block shrink-0 px-5 py-2.5 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:scale-105 transition-transform"
        >
          Let's Talk
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;