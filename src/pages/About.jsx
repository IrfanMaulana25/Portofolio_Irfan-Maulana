
import {
  UserRound,
  GraduationCap,
  Code2,
  Lightbulb,
  Target,
  Rocket,
  Palette,
  BriefcaseBusiness,
  Monitor,
} from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Computer Science Student',
    },
    {
      icon: Code2,
      title: 'Programming',
      description: 'Web Development & Software',
    },
    {
      icon: Palette,
      title: 'Creative Skills',
      description: 'Graphic Design & Multimedia',
    },
    {
      icon: Rocket,
      title: 'Goals',
      description: 'Continuous Learning & Growth',
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0b0b16] text-white overflow-hidden pt-32 pb-24">

      {/* Background */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-purple-600/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-indigo-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold tracking-[0.25em] text-sm">
            GET TO KNOW ME
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-5">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me.
            </span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            A little introduction about myself, my educational background,
            interests, and my journey in technology and creative multimedia.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Profile */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">

              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 blur-[90px] opacity-20" />

              <div className="relative rounded-3xl border border-purple-400/20 bg-gradient-to-br from-[#211b3a] to-[#11111f] p-10 md:p-14 text-center">

                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-purple-500/50 shadow-xl shadow-purple-500/20">
            <img
  src="/images/irfan-about.jpg"
  alt="Foto Irfan Maulana"
  className="w-full h-full object-cover object-center"
style={{ objectPosition: 'center 65%' }}
/>
</div>

                <h2 className="text-2xl font-bold mt-7">
                  Irfan Maulana
                </h2>

                <p className="text-purple-300 mt-2">
                  IT & Creative Enthusiast
                </p>

                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-6" />

                <p className="text-gray-400 text-sm leading-7 mt-6">
                  Exploring technology, developing digital solutions,
                  and expressing creativity through multimedia.
                </p>

                <div className="flex justify-center flex-wrap gap-2 mt-6">
                  <span className="text-xs px-3 py-2 rounded-full bg-purple-500/15 text-purple-300">
                    Technology
                  </span>

                  <span className="text-xs px-3 py-2 rounded-full bg-purple-500/15 text-purple-300">
                    Creativity
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-purple-400 font-semibold tracking-widest text-sm">
              WHO AM I?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
              Passionate About
              <span className="block text-purple-400">
                Technology & Creativity
              </span>
            </h2>

            <p className="text-gray-400 leading-8 mt-6">
              Hello! My name is Irfan Maulana. I am a Computer Science
              student with an interest in technology, programming,
              and creative multimedia.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              My journey in multimedia started during vocational
              high school, where I explored graphic design,
              3D modeling, video editing, and motion graphics.
              These experiences helped me develop both technical
              and creative skills.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              Currently, I am continuing my journey in the field
              of Information Technology, especially web development
              and software development, while continuing to explore
              my creativity through digital media.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-9">

              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-purple-400/40 hover:bg-purple-500/5 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-purple-500/15">
                      <Icon size={22} className="text-purple-400" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>

        {/* Education Section */}
        <div className="mt-28">

          <div className="text-center mb-12">
            <p className="text-purple-400 font-semibold tracking-[0.25em] text-sm">
              MY EDUCATION
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Educational{' '}
              <span className="text-purple-400">Background</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              My educational journey and the foundation of my
              technical and creative knowledge.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">

            {/* Universitas Gunadarma */}
            <div className="relative rounded-3xl border border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-indigo-500/5 p-7 md:p-9 hover:border-purple-400/60 transition duration-300">

              <div className="flex flex-col sm:flex-row gap-6 items-start">

                {/* University Logo */}
                <div className="w-24 h-24 shrink-0 rounded-2xl bg-white flex items-center justify-center p-3 shadow-lg shadow-purple-500/10">
                  <img
                    src="/images/education/gunadarma.png"
                    alt="Logo Universitas Gunadarma"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">
                    Higher Education
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold mt-2">
                    Universitas Gunadarma
                  </h3>

                  <p className="text-purple-300 mt-2">
                    Bachelor of Informatics Engineering
                  </p>

                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    Currently pursuing undergraduate studies in
                    Informatics Engineering, focusing on programming,
                    software development, information systems,
                    and technology.
                  </p>

                  <span className="inline-block mt-5 text-xs rounded-full bg-purple-500/15 text-purple-300 px-4 py-2">
                    Undergraduate Student
                  </span>
                </div>

              </div>
            </div>

            {/* SMKN 62 Jakarta */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-9 hover:border-purple-400/40 transition duration-300">

              <div className="flex flex-col sm:flex-row gap-6 items-start">

                {/* School Logo */}
                <div className="w-24 h-24 shrink-0 rounded-2xl bg-white flex items-center justify-center p-3 shadow-lg">
                  <img
                    src="/images/education/smkn62.png"
                    alt="Logo SMKN 62 Jakarta"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                    Previous Education
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold mt-2">
                    SMKN 62 JAKARTA
                  </h3>

                  <p className="text-indigo-300 mt-2">
                    Multimedia
                  </p>

                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    Developed foundational skills in graphic design,
                    multimedia production, 3D modeling, video editing,
                    and motion graphics.
                  </p>

                  <span className="inline-block mt-5 text-xs rounded-full bg-indigo-500/15 text-indigo-300 px-4 py-2">
                    Multimedia Background
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Experience & Interests */}
        <div className="mt-24 grid md:grid-cols-2 gap-7">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="p-3 w-fit rounded-xl bg-purple-500/15 mb-5">
              <BriefcaseBusiness size={25} className="text-purple-400" />
            </div>

            <h3 className="text-xl font-bold text-white">
              Experience & Background
            </h3>

            <p className="text-gray-400 leading-7 mt-4">
              My experience includes multimedia learning,
              creative projects, and practical work experience
              during vocational education.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="p-3 w-fit rounded-xl bg-indigo-500/15 mb-5">
              <Lightbulb size={25} className="text-indigo-400" />
            </div>

            <h3 className="text-xl font-bold text-white">
              Interests & Focus
            </h3>

            <p className="text-gray-400 leading-7 mt-4">
              I enjoy combining logical thinking and creativity
              through web development, graphic design, 3D modeling,
              video editing, and digital innovation.
            </p>
          </div>

        </div>

        {/* Bottom Quote */}
        <div className="mt-24 text-center border-t border-white/10 pt-12">
          <Target size={30} className="text-purple-400 mx-auto" />

          <p className="text-xl md:text-2xl font-semibold mt-5">
            "Always Learning, Always Growing."
          </p>

          <p className="text-gray-500 mt-3 text-sm">
            Every experience is an opportunity to become better.
          </p>
        </div>

      </div>
    </main>
  );
};

export default About;
