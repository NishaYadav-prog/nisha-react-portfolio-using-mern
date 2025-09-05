// src/components/Chatbot.jsx
import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);

  const qa = {
    Summary: {
      "Who am I?":
        "Aspiring Full-Stack Developer and Python Developer with MERN + ML expertise.",
      "What do I want to do?":
        "Build scalable, user-friendly apps with AI integration.",
    },
    Education: {
      "B.Tech": "PSIT Kanpur (2026), CGPA 7.25",
      "Class XII": "Sant Atulanand Academy, Varanasi (2021), 76%",
      "Class X": "Sant Atulanand Academy, Varanasi (2019), 82.3%",
    },
    Skills: {
      Languages: "C, C++, Java, Python, JavaScript",
      Frontend: "HTML, CSS, Bootstrap, React.js",
      Backend: "Node.js, Express.js, Flask",
      Databases: "MongoDB, MySQL",
      Tools: "Git, GitHub, OpenAI API, Infosys Springboard, Scaler, HackerRank",
    },
    Projects: {
      "Virtual Mouse":
        "Gesture-controlled AI-powered virtual mouse using Python & OpenCV.",
      "Kidney Disease Prediction":
        "ML model with Flask for early detection of chronic kidney disease.",
      "AI Image Generator":
        "MERN + OpenAI DALL·E API app to generate images from text prompts.",
    },
    Certifications: {
      Udemy: "Image Processing (2025)",
      Acmegrade: "Machine Learning (2023)",
      Oracle: "AI Foundations",
      KnowledgeGate: "MERN (2025)",
      Infosys: "Bootstrap, CSS3, JavaScript (2024)",
      Scaler: "Python (2024)",
    },
    Achievements: {
      Coding: "5⭐ Coder on HackerRank, 150+ LeetCode problems solved",
      Badges: "Oracle AI Foundations Associate, Salesforce Certified",
    },
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="w-80 h-96 bg-black/80 backdrop-blur-md shadow-xl rounded-xl flex flex-col overflow-hidden border border-cyan-500/40">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white p-3 text-center font-semibold">
            Ask Anything About Me
          </div>

          {/* Topics / Subtopics / Answer */}
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-3 text-white">
            {!selectedTopic && (
              <div>
                <p className="font-semibold mb-2 text-cyan-400">
                  📌 Choose a topic:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(qa).map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white px-2 py-1 rounded-md text-xs hover:opacity-80 transition"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedTopic && !selectedSub && (
              <div>
                <p className="font-semibold mb-2 text-pink-400">
                  🔹 {selectedTopic}:
                </p>
                <div className="space-y-2">
                  {Object.keys(qa[selectedTopic]).map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSelectedSub(sub)}
                      className="block w-full text-left bg-gray-800/80 hover:bg-gray-700 px-2 py-1 rounded-md"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="mt-3 text-xs text-cyan-400 underline"
                >
                  ← Back to Topics
                </button>
              </div>
            )}

            {selectedTopic && selectedSub && (
              <div>
                <p className="font-semibold text-pink-400">{selectedSub}</p>
                <p className="text-gray-200 mt-1">
                  {qa[selectedTopic][selectedSub]}
                </p>
                <div className="mt-3 flex gap-3">
                  <button
                    onClick={() => setSelectedSub(null)}
                    className="text-xs text-cyan-400 underline"
                  >
                    ← Back to {selectedTopic}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSub(null);
                      setSelectedTopic(null);
                    }}
                    className="text-xs text-cyan-400 underline"
                  >
                    ← Back to Topics
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          setOpen(!open);
          setSelectedTopic(null);
          setSelectedSub(null);
        }}
        className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}
