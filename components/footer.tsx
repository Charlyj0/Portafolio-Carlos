"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/40 backdrop-blur-md">
      
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Glow decorativo */}
        <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-500 blur-[120px] rounded-full" />
        </div>

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Nombre */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-wide">
              Carlos Jiménez
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Frontend Developer • Next.js • React
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/Charlyj0"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition hover:scale-110"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/carlos-daniel-jimenez-martinez-658421287/"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition hover:scale-110"
            >
              <FaLinkedin className="text-xl" />
            </a>

            <a
              href="mailto:chgarlyy0@gmail.com"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition hover:scale-110"
            >
              <FaEnvelope className="text-xl" />
            </a>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Carlos Jiménez. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}