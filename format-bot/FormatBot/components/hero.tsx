export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] md:min-h-screen items-center justify-center pt-16">
      {/* Background com overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          filter: "brightness(0.4)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16 md:py-24 text-center">
        <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
          A melhor em <span className="text-purple-400">TI</span> para você e sua empresa
        </h1>

        <div className="mx-auto mt-6 sm:mt-8 max-w-3xl rounded-lg bg-zinc-800/80 p-3 sm:p-4 md:p-6 backdrop-blur-sm">
          <p className="text-sm sm:text-base md:text-lg text-zinc-200">
            Oferecemos soluções completas em tecnologia da informação, desde desenvolvimento de software até
            infraestrutura e segurança, com foco na qualidade e satisfação do cliente.
          </p>

          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            <a
              href="/FormatBot/servicos"
              className="rounded-md bg-purple-600 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-medium text-white transition-all hover:bg-purple-700"
            >
              Nossos Serviços
            </a>
            <a
              href="/FormatBot/contato"
              className="rounded-md border border-purple-600 bg-transparent px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-medium text-purple-400 transition-all hover:bg-purple-600/20"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
