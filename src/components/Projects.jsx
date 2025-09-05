import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Virtual Mouse",
    desc: "Gesture-controlled mouse using Python and OpenCV for touch-free interaction.",
    tags: ["Python", "OpenCV", "AI"],
    link: "https://github.com/NishaYadav-prog/Virtual-Mouse-project",
  },
  {
    title: "Kidney Disease Prediction",
    desc: "ML model for early CKD detection with Flask deployment.",
    tags: ["ML", "Flask", "Python"],
    link: "https://github.com/NishaYadav-prog/KidneyDiseasePerediction",
  },
  {
    title: "AI Image Generator",
    desc: "MERN app integrating OpenAI's API to generate images from prompts.",
    tags: ["MERN", "OpenAI API"],
    link: "https://github.com/NishaYadav-prog/AiImageGenerator",
  },
  {
    title: "Smart Recipe Generator",
    desc: "Smart Recipe Generator suggests recipes based on ingredients you already have. Helps reduce food waste and makes cooking easier with smart recommendations.",
    tags: ["MongoDB", "Express", "ReactJs", "NodeJs"],
    link: "https://github.com/NishaYadav-prog/Smart-Recipe-Generator-main",
  },
  {
    title: "Social Media Content Analyzer",
    desc: "Next.js app that extracts and analyzes text from uploaded PDF or image files. Useful for analyzing posts, documents, or reports.",
    tags: ["ReactJs", "CSS", "Netlify"],
    link: "https://github.com/NishaYadav-prog/Nisha-s-Social-Media-Content-Analyzer",
    live_demo:
      "https://68b4036daed746d50bffd225--nisha-s-social-media-content-analyzer.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* ✨ Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
             drop-shadow-[0_0_20px_#ec4899] 
             animate-gradient"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          🚀 My Creative Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className="glass rounded-2xl p-5 hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-500/30 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-semibold text-xl text-cyan-300">{p.title}</h3>
              <p className="mt-2 text-gray-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-pink-400 hover:text-pink-300 underline transition"
                >
                  View Repository →
                </a>
                {p.live_demo && (
                  <a
                    href={p.live_demo}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-green-400 hover:text-green-300 underline transition"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
