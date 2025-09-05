// src/components/Summary.jsx
import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT - Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }} // 👈 Hamesha visible
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="w-72 h-72 relative">
            <div className="absolute inset-0 rounded-[60%] bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 blur-2xl animate-pulse opacity-60"></div>
            <img
              src="/Nishayadav.jpg" // public folder me rakho
              alt="Nisha Yadav"
              className="relative z-10 w-72 h-72 object-cover rounded-[60%] border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>

        {/* RIGHT - Summary */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 1 }} // 👈 Hamesha visible
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 drop-shadow-[0_0_20px_#ec4899]">
            Professional Summary
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            I am <b>Nisha Yadav</b>, an aspiring{" "}
            <span className="text-pink-400 font-semibold">
              Full-Stack Developer
            </span>{" "}
            and{" "}
            <span className="text-cyan-400 font-semibold">
              AI & Python Enthusiast
            </span>
            . With a strong foundation in web development, database systems, and
            machine learning, I love building impactful, user-friendly
            solutions.
          </p>
          <p className="mt-4 text-lg">
            My focus is on{" "}
            <span className="text-purple-400">modern tech stacks</span>,
            creating scalable projects, and contributing to open-source
            communities. I aim to grow into a professional Software Engineer and
            innovate in AI-driven applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
