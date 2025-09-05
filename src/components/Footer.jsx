// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative w-full bg-white/10 backdrop-blur-md text-white py-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-sm">
        {/* Left - Brand & Caption */}
        <div className="mb-4 md:mb-0">
          <p className="font-semibold">
            © {new Date().getFullYear()}{" "}
            <span className="text-pink-300">Nisha Yadav</span>
          </p>
          <p className="text-gray-300 text-xs mt-1">
            Full-stack developer, avid writer ✍️, and lifelong learner exploring
            the world of code and creativity.
          </p>
        </div>

        {/* Middle - Links */}
        <nav className="flex gap-6 mb-4 md:mb-0">
          <a href="#about" className="hover:text-pink-300 transition">
            About
          </a>
          <a href="#skills" className="hover:text-pink-300 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-pink-300 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-pink-300 transition">
            Contact
          </a>
        </nav>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/NishaYadav-prog"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.93 3.2 9.1 7.64 10.57.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.95-3.11.68-3.77-1.5-3.77-1.5-.51-1.28-1.25-1.62-1.25-1.62-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 .72 2.63.51 3.27.39.1-.3.39-.51.71-.63-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.12 1.14.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.45 3.12-1.14 3.12-1.14.61 1.56.23 2.71.11 3 .72.78 1.16 1.78 1.16 2.99 0 4.29-2.62 5.24-5.11 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .29.2.64.77.53C20.05 20.85 23.25 16.68 23.25 11.75 23.25 5.48 18.27.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nisha-yadav-96681a294/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v13H0V8zm7.5 0H12v1.74h.07c.46-.88 1.59-1.8 3.27-1.8 3.5 0 4.15 2.3 4.15 5.28V21H17v-5.17c0-1.23-.02-2.81-1.71-2.81-1.71 0-1.97 1.33-1.97 2.7V21H7.5V8z" />
            </svg>
          </a>

          {/* Mail */}
          <a
            href="mailto:2k22.cse.2213343@gmail.com"
            className="hover:text-pink-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
