const categories = [
  {
    title: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "Bootstrap", "React.js"],
  },
  {
    title: "Backend & Frameworks",
    items: ["Node.js", "Express.js", "Flask"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "OpenAI API",
      "Infosys Springboard",
      "Scaler",
      "Udemy",
      "HackerRank",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        z<h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass rounded-2xl p-5 hover:scale-[1.02] transition"
            >
              <h3 className="font-semibold text-xl mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
