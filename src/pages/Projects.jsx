
import { useState } from 'react';

import {
  Code2,
  CloudSun,
  Scissors,
  Building2,
  UserRound,
  ExternalLink,
  Palette,
  Box,
  Video,
  Clapperboard,
  FileText,
  Play,
  X,
  Image as ImageIcon,
  Eye,
} from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('it');
  const [creativeFilter, setCreativeFilter] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);

  // IT PROJECTS
  const itProjects = [
    {
      number: '01',
      title: 'Barber Home Service',
      category: 'Web Application',
      description:
        'A web application for booking barber services at home, designed to provide customers with a convenient and practical digital service experience.',
      tech: ['Golang', 'MySQL', 'HTML', 'CSS'],
      status: 'GitHub Repository',
      icon: Scissors,
      link: 'https://github.com/IrfanMaulana25/barber-home-service',
    },
    {
      number: '02',
      title: 'Website PT LACI',
      category: 'Company Profile',
      description:
        'A company profile website for PT Layanan Cepat Digital Indonesia, presenting company information, services, and its digital identity.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      status: 'GitHub Repository',
      icon: Building2,
      link: 'https://github.com/IrfanMaulana25/Website-PT-LACI',
    },
    {
      number: '03',
      title: 'Weather Information Website',
      category: 'Academic Project',
      description:
        'A weather information website that helps users explore weather forecasts and regional weather conditions using BMKG data.',
      tech: ['React', 'JavaScript', 'BMKG API', 'Tailwind CSS'],
      status: 'In Development',
      icon: CloudSun,
      link: null,
    },
    {
      number: '04',
      title: 'Personal Portfolio Website',
      category: 'Personal Project',
      description:
        'A personal portfolio website showcasing profile information, technical skills, projects, and creative works.',
      tech: ['React', 'Vite', 'Tailwind CSS'],
      status: 'In Development',
      icon: UserRound,
      link: null,
    },
  ];

  // CREATIVE PROJECTS
  const creativeWorks = [
    // GRAPHIC DESIGN
    {
      title: '1350x1080',
      category: 'Graphic Design',
      type: 'pdf',
      file: '/portfolio/graphic-design/1350x1080.pdf',
    },
    {
      title: 'Cover DVD',
      category: 'Graphic Design',
      type: 'image',
      file: '/portfolio/graphic-design/Cover DVD - Irfan Maulanaaaa-01.jpg',
    },
    {
      title: 'Hari Pers Nasional',
      category: 'Graphic Design',
      type: 'pdf',
      file: '/portfolio/graphic-design/Hari Pers Nasional ( AI ).pdf',
    },
    {
      title: 'Hari Radio Sedunia',
      category: 'Graphic Design',
      type: 'pdf',
      file: '/portfolio/graphic-design/Hari Radio Sedunia ( AI ).pdf',
    },
    {
      title: 'Logo Nasi Uduk',
      category: 'Graphic Design',
      type: 'image',
      file: '/portfolio/graphic-design/LOGO NASI UDUK IRFANNNNNNN png-01.png',
    },
    {
      title: 'Poster Hari Nyepi',
      category: 'Graphic Design',
      type: 'pdf',
      file: '/portfolio/graphic-design/Nyepi 1350x1080.pdf',
    },
    {
      title: 'Packaging CMYK',
      category: 'Graphic Design',
      type: 'image',
      file: '/portfolio/graphic-design/Packaging Cmyk.jpg',
    },
    {
      title: 'Pemasaran',
      category: 'Graphic Design',
      type: 'pdf',
      file: '/portfolio/graphic-design/PEMASARAN.pdf',
    },
    {
      title: 'Poster Nasi Uduk',
      category: 'Graphic Design',
      type: 'image',
      file: '/portfolio/graphic-design/Poster Nasi Uduk - Irfan Maulanaaaaa-01.jpg',
    },
    {
      title: 'Poster Satelit',
      category: 'Graphic Design',
      type: 'pdf',
      file: '/portfolio/graphic-design/Poster Satelit ( AI ).pdf',
    },
    {
      title: 'Ramadhan Mubharak',
      category: 'Graphic Design',
      type: 'pdf',
      file: '/portfolio/graphic-design/Ramadhan Mubharak .pdf',
    },
    {
      title: 'Sertifikat Dinas Bogor',
      category: 'Graphic Design',
      type: 'pdf',
      file: '/portfolio/graphic-design/Sertifikat Dinas Bogor (AI).pdf',
    },
    {
      title: 'Sertifikat',
      category: 'Graphic Design',
      type: 'pdf',
      file: '/portfolio/graphic-design/SertifikatT.pdf',
    },

    // BLENDER
    {
      title: '3D Hotel Modeling',
      category: '3D Modeling',
      type: 'video',
      file: '/portfolio/blender/HOTEL - IRFAN MAULANA (15)0001-0250.mp4',
    },
    {
      title: 'Texture Kamar Tidur',
      category: '3D Modeling',
      type: 'image',
      file: '/portfolio/blender/Irfan Maulana - Texture Kamar Tidur (MM).png',
    },

    // MOTION GRAPHICS
{
  title: 'Isometrik Animation',
  category: 'Motion Graphics',
  type: 'video',
  file: '/portfolio/motion-graphics/Irfan Maulana ( 15 ) - Isometrik.mp4',
},
{
  title: 'Isometrik - PH',
  category: 'Motion Graphics',
  type: 'video',
  file: '/portfolio/motion-graphics/Isometrik - PH (Irfan Maulana 15).mp4',
},

    // VIDEO EDITING
    {
      title: 'Bumper IN Nasi Uduk',
      category: 'Video Editing',
      type: 'video',
      file: '/portfolio/video-editing/Bumper IN NASI UDUK.mp4',
    },
    {
      title: 'Iklan Nutribooost',
      category: 'Video Editing',
      type: 'video',
      file: '/portfolio/video-editing/iklan-nutribooost.mp4',
    },
    {
      title: 'Cluster Video - Nasi Uduk',
      category: 'Video Editing',
      type: 'video',
      file: '/portfolio/video-editing/Irfan Maulana - Cluster Vidio ( NASI UDUK ) SMKN 62 JKT.mp4',
    },
    {
      title: 'Kelompok 1 - 1IA06',
      category: 'Video Editing',
      type: 'video',
      file: '/portfolio/video-editing/Kelompok 1_1IA06.mp4',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Works', icon: Palette },
    { id: 'Graphic Design', label: 'Graphic Design', icon: ImageIcon },
    { id: '3D Modeling', label: '3D Modeling', icon: Box },
    { id: 'Motion Graphics', label: 'Motion Graphics', icon: Clapperboard },
    { id: 'Video Editing', label: 'Video Editing', icon: Video },
  ];

  const filteredWorks =
    creativeFilter === 'all'
      ? creativeWorks
      : creativeWorks.filter(
          (work) => work.category === creativeFilter
        );

  const getFileIcon = (type) => {
    if (type === 'video') return Play;
    if (type === 'pdf') return FileText;
    return ImageIcon;
  };

  return (
    <section className="min-h-screen bg-[#0b0b16] px-6 pt-36 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400 mb-3">
            My Works & Creations
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            My <span className="text-purple-400">Projects</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            Explore my projects in technology, software development,
            graphic design, and multimedia creativity.
          </p>
        </div>

        {/* MAIN CATEGORY */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2">

            <button
              onClick={() => {
                setActiveCategory('it');
                setSelectedWork(null);
              }}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition duration-300 ${
                activeCategory === 'it'
                  ? 'bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Code2 size={18} />
              IT Projects
            </button>

            <button
              onClick={() => {
                setActiveCategory('creative');
                setSelectedWork(null);
              }}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition duration-300 ${
                activeCategory === 'creative'
                  ? 'bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Palette size={18} />
              Creative Projects
            </button>

          </div>
        </div>

        {/* IT PROJECTS */}
        {activeCategory === 'it' && (
          <>
            <div className="mb-7 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                IT & Development
              </h2>
              <span className="text-sm text-gray-500">
                {itProjects.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {itProjects.map((project) => {
                const Icon = project.icon;

                return (
                  <div
                    key={project.number}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:bg-white/[0.07]"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400 transition duration-300 group-hover:bg-purple-500 group-hover:text-white">
                        <Icon size={27} />
                      </div>

                      <span className="text-3xl font-bold text-white/10">
                        {project.number}
                      </span>
                    </div>

                    <p className="mb-2 text-sm font-medium text-purple-400">
                      {project.category}
                    </p>

                    <h3 className="mb-4 text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mb-6 min-h-[75px] leading-relaxed text-gray-400">
                      {project.description}
                    </p>

                    <div className="mb-7 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-xs text-gray-400">
                        {project.status}
                      </span>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-semibold text-purple-400 transition hover:text-purple-300"
                        >
                          <Code2 size={17} />
                          View Project
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <p className="mb-5 text-gray-400">
                Want to see more of my development work?
              </p>

              <a
                href="https://github.com/IrfanMaulana25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-7 py-3 font-semibold text-purple-300 transition duration-300 hover:bg-purple-500 hover:text-white"
              >
                <Code2 size={19} />
                Visit My GitHub
                <ExternalLink size={16} />
              </a>
            </div>
          </>
        )}

        {/* CREATIVE PROJECTS */}
        {activeCategory === 'creative' && (
          <>
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Creative <span className="text-purple-400">Gallery</span>
              </h2>

              <p className="text-gray-400">
                A collection of my design, 3D modeling, and multimedia works.
              </p>
            </div>

            {/* CREATIVE FILTERS */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {filters.map((filter) => {
                const Icon = filter.icon;

                return (
                  <button
                    key={filter.id}
                    onClick={() => setCreativeFilter(filter.id)}
                    className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition duration-300 ${
                      creativeFilter === filter.id
                        ? 'border-purple-400 bg-purple-500/20 text-white'
                        : 'border-white/10 bg-white/[0.03] text-gray-400 hover:border-purple-400/50 hover:text-white'
                    }`}
                  >
                    <Icon size={17} />
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* WORK COUNT */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                {creativeFilter === 'all'
                  ? 'All Creative Works'
                  : creativeFilter}
              </h3>

              <span className="text-sm text-gray-500">
                {filteredWorks.length} Works
              </span>
            </div>

            {/* CREATIVE GALLERY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.map((work, index) => {
                const FileIcon = getFileIcon(work.type);

                return (
                  <button
                    key={work.file}
                    onClick={() => setSelectedWork(work)}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-left transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-white/[0.07]"
                  >
                    {/* THUMBNAIL */}
                    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#151526]">

                      {work.type === 'image' ? (
                        <img
                          src={work.file}
                          alt={work.title}
                          loading="lazy"
                          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-4 text-purple-400">
                          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10">
                            <FileIcon size={38} />
                          </div>

                          <span className="text-sm font-medium text-gray-400">
                            {work.type === 'pdf'
                              ? 'PDF Document'
                              : 'Video Preview'}
                          </span>
                        </div>
                      )}

                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                        <div className="flex items-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg">
                          <Eye size={17} />
                          View Work
                        </div>
                      </div>

                      <span className="absolute right-3 top-3 rounded-lg border border-white/10 bg-black/60 px-3 py-1 text-xs text-white">
                        {work.type.toUpperCase()}
                      </span>
                    </div>

                    {/* WORK INFORMATION */}
                    <div className="p-5">
                      <p className="mb-2 text-xs font-medium text-purple-400">
                        {work.category}
                      </p>

                      <h3 className="text-lg font-bold text-white">
                        {work.title}
                      </h3>

                      <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                        <Eye size={15} />
                        Click to preview
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}

      </div>

      {/* LIVE PREVIEW MODAL */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11111f] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs text-purple-400">
                  {selectedWork.category}
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  {selectedWork.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedWork(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-red-500"
                aria-label="Close preview"
              >
                <X size={21} />
              </button>
            </div>

            {/* PREVIEW CONTENT */}
            <div className="flex min-h-[300px] flex-1 items-center justify-center overflow-auto bg-black">
              {selectedWork.type === 'image' && (
                <img
                  src={selectedWork.file}
                  alt={selectedWork.title}
                  className="max-h-[75vh] max-w-full object-contain"
                />
              )}

              {selectedWork.type === 'video' && (
                <video
                  src={selectedWork.file}
                  controls
                  playsInline
                  preload="metadata"
                  className="max-h-[75vh] w-full"
                >
                  Your browser does not support video playback.
                </video>
              )}

              {selectedWork.type === 'pdf' && (
                <iframe
                  src={selectedWork.file}
                  title={selectedWork.title}
                  className="h-[75vh] w-full bg-white"
                />
              )}
            </div>

            {/* MODAL FOOTER */}
            <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
              <span className="text-xs text-gray-400">
                Live Preview · {selectedWork.type.toUpperCase()}
              </span>

              <a
                href={selectedWork.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300"
              >
                Open in New Tab
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
