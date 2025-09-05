export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-pink-300">NISHA</span> <span className="text-cyan-300">YADAV</span>
        </a>
        <ul className="hidden md:flex gap-6 text-sm">
          <li><a className="hover:opacity-80" href="#about">About</a></li>
          <li><a className="hover:opacity-80" href="#skills">Skills</a></li>
          <li><a className="hover:opacity-80" href="#projects">Projects</a></li>
          <li><a className="hover:opacity-80" href="#contact">Contact</a></li>
          <li>
            <a className="px-3 py-1 rounded-xl bg-white/90 text-purple-700 font-semibold"
               href="https://nishayadavportfolio.netlify.app" target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
