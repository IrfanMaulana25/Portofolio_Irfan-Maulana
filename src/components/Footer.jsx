
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b16]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold">
            IRFAN<span className="text-violet-400">.</span>
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Personal Portfolio Website
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex gap-6 text-gray-400">

          {/* GITHUB */}
          <a
            href="https://github.com/IrfanMaulana25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition duration-300 hover:text-violet-400 hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.01 3.15 1.4.1-.73.4-1.22.72-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.43 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/irf4nn__25/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition duration-300 hover:text-violet-400 hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="18"
                cy="6"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-xs flex items-center gap-1">
          © {new Date().getFullYear()} Irfan Maulana. Made with
          <Heart size={13} className="text-pink-500" />
        </p>

      </div>
    </footer>
  );
};

export default Footer;
