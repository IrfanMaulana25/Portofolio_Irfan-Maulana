const CreativeWorks = () => {
  const categories = [
    {
      number: '01',
      title: 'Graphic Design',
      description:
        'Creative visual designs, poster, branding, packaging, and digital artwork.',
    },
    {
      number: '02',
      title: '3D Modeling',
      description:
        'Three-dimensional modeling, texturing, materials, lighting, and rendering using Blender.',
    },
    {
      number: '03',
      title: 'Motion Graphics',
      description:
        'Animation, motion graphics, logo animation, and visual effects.',
    },
    {
      number: '04',
      title: 'Video Editing',
      description:
        'Video production, cinematic editing, transitions, and multimedia projects.',
    },
  ];

  return (
    <section className="min-h-screen bg-[#0b0b16] px-6 pt-36 pb-24">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400 mb-3">
            My Creative Journey
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Creative <span className="text-purple-400">Works</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            A collection of my creative works in graphic design,
            3D modeling, motion graphics, and video editing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {categories.map((category) => (
            <div
              key={category.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400/50"
            >
              <span className="text-4xl font-bold text-purple-400/40">
                {category.number}
              </span>

              <h2 className="text-2xl font-bold text-white mt-6 mb-3">
                {category.title}
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {category.description}
              </p>

              <div className="mt-7 text-sm font-semibold text-purple-400">
                Explore My Work →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CreativeWorks;