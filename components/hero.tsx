import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-start justify-center px-6 pt-10"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>

          <p className="text-orange-500 font-medium mb-3">
            Hola, soy
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              text-gray-900
              dark:text-white
            "
          >
            Carlos Daniel <br />
            Jimenez Martinez
          </h1>

          <h2
            className="
              text-xl
              md:text-2xl
              mt-4
              text-gray-600
              dark:text-gray-400
            "
          >
            Ingeniero en Software
          </h2>

          <p
            className="
              mt-8
              max-w-xl
              leading-relaxed
              text-gray-700
              dark:text-gray-300
            "
          >
            Desarrollador enfocado en aplicaciones web con React, TypeScript,
            Node.js, C#, ASP.NET y MySQL. Me gusta crear interfaces modernas,
            funcionales y con una excelente experiencia de usuario.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "C#",
              "ASP.NET",
              "MySQL",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  text-sm
                  rounded-full

                  bg-orange-500/10
                  text-orange-500

                  border
                  border-orange-500/20

                  transition-all
                  duration-300

                  hover:bg-orange-500
                  hover:text-white
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#proyectos"
              className="
                px-6
                py-3
                rounded-xl

                bg-orange-500
                text-white

                hover:bg-orange-600
                transition
              "
            >
              Ver proyectos
            </a>

            <a
              href="/cv/CarlosJimenezCV.pdf"
              download
              className="
                px-6
                py-3
                rounded-xl

                border
                border-orange-500

                text-orange-500

                hover:bg-orange-500
                hover:text-white

                transition
              "
            >
              Descargar CV
            </a>

          </div>

          {/* Redes */}
          <div
            className="
              flex
              gap-6
              mt-8
              text-sm
            "
          >
            <a
              className="
                text-gray-600
                dark:text-gray-400
                hover:text-orange-500
                transition
              "
              href="mailto:chgarlyy0@gmail.com"
            >
              Email
            </a>

            <a
              className="
                text-gray-600
                dark:text-gray-400
                hover:text-orange-500
                transition
              "
              href="https://github.com/Charlyj0"
              target="_blank"
            >
              GitHub
            </a>

            <a
              className="
                text-gray-600
                dark:text-gray-400
                hover:text-orange-500
                transition
              "
              href="https://facebook.com"
              target="_blank"
            >
              Facebook
            </a>

          </div>

        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 rounded-full" />

            <Image
              src="/img/foto.jpeg"
              alt="Carlos"
              width={350}
              height={350}
              priority
              className="
                relative
                rounded-full
                border-4
                border-orange-500/20
                shadow-2xl
              "
            />

          </div>
        </div>

      </div>
    </section>
  );
}