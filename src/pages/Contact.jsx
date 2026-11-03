
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#0b0b16] text-white pt-32 pb-24 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold tracking-widest text-sm">
            GET IN TOUCH
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-5">
            Contact <span className="text-purple-400">Me.</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto leading-relaxed">
            Feel free to reach out to me for collaboration,
            projects, or just a friendly conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 rounded-3xl border border-purple-400/20 bg-white/[0.03]">
            <Mail size={35} className="text-purple-400 mb-5" />

            <h2 className="text-2xl font-bold">
              Let's Connect
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              I'm always open to discussing new projects,
              creative ideas, and opportunities.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <Mail className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-200">Your Email Address</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MessageCircle className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="text-gray-200">Open for Collaboration</p>
                </div>
              </div>

            </div>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
            <h2 className="text-2xl font-bold mb-6">
              Send Me a Message
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message!');
              }}
              className="space-y-5"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-[#171526] border border-white/10 outline-none focus:border-purple-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-[#171526] border border-white/10 outline-none focus:border-purple-400"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-[#171526] border border-white/10 outline-none focus:border-purple-400 resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:scale-[1.02] transition-transform"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
