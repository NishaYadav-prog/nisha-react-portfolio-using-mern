// src/components/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-16 text-white">
      {/* semi-transparent bg for readability */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 bg-black/60 rounded-xl p-8 shadow-lg">
        {/* Left Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-cyan-400">Contact Me</h2>
          <p className="text-gray-200">
            Let's Collaborate! I'm currently available for freelance work and
            open to discussing new projects, code reviews, or tech
            consultations.
          </p>

          <div className="flex flex-col gap-3 text-gray-300">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              2k22.cse.2213343@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +91-XXXXXXXXXX
            </p>
            <p>
              <span className="font-semibold">Location:</span> Varanasi, Uttar
              Pradesh, India
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/NishaYadav-prog"
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500/20 border border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nisha-yadav-96681a294/"
              target="_blank"
              rel="noreferrer"
              className="bg-pink-500/20 border border-pink-400 px-4 py-2 rounded-full hover:bg-pink-500 hover:text-black transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:2k22.cse.2213343@gmail.com"
              className="bg-cyan-500/20 border border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-black/70 p-6 rounded-xl border border-gray-700"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:opacity-90 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-400 text-center mt-2">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
