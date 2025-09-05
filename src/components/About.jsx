export default function About(){
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-white/90 leading-relaxed">
          I am an aspiring Full-Stack Developer and Python Developer with hands-on experience in MERN and Machine Learning.
          I enjoy building AI-driven, user-friendly applications. Currently pursuing B.Tech in CSE (2026) at PSIT, Kanpur.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="glass rounded-2xl p-4">
            <p className="text-sm text-white/70">Education</p>
            <p className="font-semibold">B.Tech CSE — PSIT, Kanpur (2026)</p>
          </div>
          <div className="glass rounded-2xl p-4">
            <p className="text-sm text-white/70">Location</p>
            <p className="font-semibold">Varanasi, Uttar Pradesh</p>
          </div>
          <div className="glass rounded-2xl p-4">
            <p className="text-sm text-white/70">Contact</p>
            <p className="font-semibold">📧 2k22.cse.2213343@gmail.com • 📞 8174911900</p>
          </div>
        </div>
      </div>
    </section>
  )
}
