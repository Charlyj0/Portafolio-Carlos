"use client";

import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contacto() {
  return (
    <section id="contacto" className="relative px-6 py-28 overflow-hidden">

      {/* Glow naranja más sutil */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <span className="text-orange-500 font-semibold tracking-widest uppercase">
            Contacto
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-black dark:text-white">
            Colaboremos.
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-8">
            Si buscas un desarrollador enfocado en crear experiencias web rápidas, limpias y funcionales, ponte en contacto.
          </p>
        </div>

        {/* BOTONES */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="mailto:chgarlyy0@gmail.com"
            className="
              inline-flex items-center justify-center gap-3
              rounded-xl bg-orange-500 px-8 py-4
              font-semibold text-black
              transition
              hover:bg-orange-400 hover:scale-[1.03]
            "
          >
            <Mail size={20} />
            Enviar correo
          </a>

          <a
            href="/cv/Carlos-Daniel-Jimenez-CV.pdf"
            download
            className="
              inline-flex items-center justify-center gap-3
              rounded-xl border border-gray-300 dark:border-orange-500/30
              bg-white dark:bg-black
              px-8 py-4 font-semibold
              text-black dark:text-orange-400
              transition
              hover:border-orange-500 hover:scale-[1.03]
            "
          >
            <Download size={20} />
            Descargar CV
          </a>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {/* GITHUB */}
          <a
            href="https://github.com/Charlyj0"
            target="_blank"
            className="
              group rounded-2xl p-6
              border border-gray-200 dark:border-orange-500/20
              bg-white dark:bg-black
              transition
              hover:border-orange-500
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-orange-500/10
            "
          >
            <FaGithub size={34} className="text-orange-500 mb-4" />

            <h3 className="font-semibold text-lg text-black dark:text-orange-300">
              GitHub
            </h3>

            <p className="text-gray-600 dark:text-orange-200/60 mt-2 text-sm">
              Proyectos, código y experimentos de desarrollo
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/carlos-daniel-jimenez-martinez-658421287/"
            target="_blank"
            className="
              group rounded-2xl p-6
              border border-gray-200 dark:border-orange-500/20
              bg-white dark:bg-black
              transition
              hover:border-orange-500
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-orange-500/10
            "
          >
            <FaLinkedin size={34} className="text-orange-500 mb-4" />

            <h3 className="font-semibold text-lg text-black dark:text-orange-300">
              LinkedIn
            </h3>

            <p className="text-gray-600 dark:text-orange-200/60 mt-2 text-sm">
              Perfil profesional y experiencia laboral
            </p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:chgarlyy0@gmail.com"
            className="
              group rounded-2xl p-6
              border border-gray-200 dark:border-orange-500/20
              bg-white dark:bg-black
              transition
              hover:border-orange-500
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-orange-500/10
            "
          >
            <Mail size={34} className="text-orange-500 mb-4" />

            <h3 className="font-semibold text-lg text-black dark:text-orange-300">
              Email
            </h3>

            <p className="text-gray-600 dark:text-orange-200/60 mt-2 text-sm break-all">
              Contacto directo para colaboraciones o trabajo
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}