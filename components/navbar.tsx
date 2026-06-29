import ThemeToggle from "./themeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-center w-full">
      <nav
        className="
          mt-4
          w-[92%]
          max-w-6xl
          px-6
          py-4
          rounded-2xl

          backdrop-blur-xl

          bg-white/80
          dark:bg-black/40

          border
          border-gray-200
          dark:border-white/10

          shadow-lg
          dark:shadow-none

          flex
          items-center
          justify-between
          transition-colors
          duration-300
        "
      >
        {/* Logo */}
        <h1
          className="
            text-2xl
            font-extrabold
            tracking-widest

            text-orange-500
          "
        >
          CJ
        </h1>

        {/* Navegación */}
        <div
          className="
            flex
            items-center
            gap-8
            text-sm
            font-medium
          "
        >
          <a
            href="#inicio"
            className="
              text-gray-700
              dark:text-white

              hover:text-orange-500

              transition-colors
            "
          >
            Inicio
          </a>

          <a
            href="#proyectos"
            className="text-gray-700 dark:text-white hover:text-orange-500 transition-colors"
          >
            Proyectos
          </a>

          <a
            href="#contacto"
            className="
              text-gray-700
              dark:text-white

              hover:text-orange-500

              transition-colors
            "
          >
            Contacto
          </a>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}