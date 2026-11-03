
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Sparkles,
  Code2,
  Camera,
  Mail
} from 'lucide-react';

const Home = () => {
  return (
    <main className="min-h-screen bg-[#0b0b16] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="fixed top-20 left-0 w-96 h-96 bg-purple-600/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-indigo-600/15 blur-[130px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6">

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-300 text-sm mb-8">
              <Sparkles size={16} />
              Welcome to my portfolio
            </div>

            <p className="text-gray-400 text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              Irfan
              <span className="block bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Maulana.
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 mt-6">
              Computer Science Student
            </h2>

            <p className="text-gray-400 leading-8 mt-5 max-w-lg">
              Passionate about technology, programming, and digital
              innovation. I enjoy exploring new technologies and
              transforming creative ideas into meaningful digital
              experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/projects"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20"
              >
                Explore Projects
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-gray-200 hover:bg-white/10 transition duration-300"
              >
                <Download size={17} />
                About Me
              </Link>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-10">

              <span className="text-sm text-gray-500">
                Find me on
              </span>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                <Code2 size={22} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                <Camera size={22} />
              </a>

              <a
                href="mailto:email@example.com"
                aria-label="Email"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                <Mail size={22} />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE - PROFILE */}
          <div className="relative flex justify-center items-center">

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[370px] lg:h-[370px]">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-25" />

              {/* Photo Border */}
              <div className="relative w-full h-full p-1.5 rounded-full bg-linear-to-br from-indigo-400 via-purple-500 to-pink-400 shadow-2xl shadow-purple-500/20">

                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0b0b16] bg-[#171526]">

                  <img
                    src="/images/profile.jpg"
                    alt="Irfan Maulana"
                    className="w-full h-full object-cover object-top"
                  />

                </div>

              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-8 sm:-left-12 p-4 rounded-2xl bg-[#1b1930] border border-purple-400/30 shadow-xl">
                <div className="flex items-center gap-3">
                  <Code2 size={25} className="text-purple-400" />
                  <div>
                    <p className="text-sm font-bold">Creative</p>
                    <p className="text-xs text-gray-400">Problem Solver</p>
                  </div>
                </div>
              </div>

              {/* Top Card */}
              <div className="absolute -top-4 -right-5 p-4 rounded-2xl bg-[#1b1930] border border-indigo-400/30 shadow-xl">
                <div className="flex items-center gap-2">
                  <Sparkles size={19} className="text-indigo-400" />
                  <span className="text-sm font-semibold">
                    Tech Enthusiast
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;
