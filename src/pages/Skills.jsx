
import {
  Code2,
  Globe,
  Database,
  Palette,
  Terminal,
  Wrench
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'Php', 'JavaScript', 'css', 'Sql'],
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'React.js', 'Laravel', 'Tailwind CSS', 'Vite'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Design & Creative',
      icon: Palette,
      skills: ['Figma', 'Blender', 'Adobe Ilustrator', 'Adobe Photoshop', 'Adobe Premier Pro', 'Adobe After Effetcs', 'canva', 'capcut'],
    },
    {
      title: 'Development Tools',
      icon: Terminal,
      skills: ['VS Code', 'Git', 'GitHub'],
    },
    {
      title: 'Other Technologies',
      icon: Wrench,
      skills: ['Rest Api', 'CRUD'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0b16] text-white pt-32 pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold tracking-widest text-sm">
            MY TECHNICAL ABILITIES
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-5">
            My <span className="text-purple-400">Skills.</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Technologies, programming languages, and tools
            that I have explored throughout my learning journey.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="group p-7 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-purple-500/[0.05] hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-purple-400/20">
                  <Icon
                    size={28}
                    className="text-purple-400"
                  />
                </div>

                <h2 className="text-xl font-bold mt-6">
                  {category.title}
                </h2>

                <div className="flex flex-wrap gap-2 mt-6">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-gray-300 hover:text-purple-300 hover:border-purple-400/30 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Section */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl border border-purple-400/20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-center">

          <Code2 size={38} className="text-purple-400 mx-auto" />

          <h2 className="text-2xl md:text-3xl font-bold mt-5">
            Always Learning New Technologies
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            I believe that continuous learning is an important
            part of growing as a developer and adapting to
            the ever-evolving technology industry.
          </p>

        </div>

      </div>
    </main>
  );
};

export default Skills;
