import React from "react";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, Twitter, FileText, Code } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-gray-900 to-purple-900 text-white py-3">
      <div className="px-6 lg:px-8 flex items-center gap-4 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300"
          aria-label="Go Back"
        >
          <i className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-purple-400"></i>
        </button>
        <h1 className="text-xl font-semibold text-zinc-400">About</h1>
      </div>
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r p-1 from-purple-400 to-pink-600">
            <div className="rounded-full p-2 bg-gray-900 h-full w-full flex items-center justify-center">
              <Code className="w-12 h-12 text-purple-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Yash Dangar
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Computer Engineer | Full Stack Developer
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-10">
          {[
            {
              icon: <Github className="w-6 h-6" />,
              href: "https://github.com/yashdangar",
              label: "GitHub",
            },
            {
              icon: <Linkedin className="w-6 h-6" />,
              href: "https://www.linkedin.com/in/yash-dangar-43104921a/",
              label: "LinkedIn",
            },
            {
              icon: <Twitter className="w-6 h-6" />,
              href: "https://x.com/YashDangar20",
              label: "X (Twitter)",
            },
            {
              icon: <FileText className="w-6 h-6" />,
              href: "https://drive.google.com/file/d/1a5We8VzE7sURWMS_Bg6pAw63Po6BFq7G/view?usp=sharing",
              label: "Resume",
            },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 group"
              aria-label={link.label}
            >
              <div className="text-gray-400 group-hover:text-purple-400 transition-colors">
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 mb-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a 3rd-year Computer Engineering student and full-stack web developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
