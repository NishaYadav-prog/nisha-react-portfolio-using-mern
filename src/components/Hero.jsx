import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT SIDE - Text */}
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi 👋, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              Nisha Yadav
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Aspiring <b>Full-Stack Developer</b> • Python Developer • AI &
            Machine Learning Enthusiast
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl bg-white/90 text-purple-700 font-semibold shadow-lg hover:scale-105 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Photo with Glow + Gradient Border */}
        <motion.div
          className="flex justify-center md:justify-end relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-1 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 hover:scale-105 transition shadow-[0_0_40px_#ec4899]">
            <img
              src="/nisha.jpg" // 👈 public folder me rakho
              alt="Nisha Yadav"
              className="w-72 h-72 object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
