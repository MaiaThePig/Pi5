import Hero from "./components/hero"
import ServicesContainer from "./components/services-container"
import TeamSection from "./components/team-section"
import ExperienceSection from "./components/experience-section"
import TestimonialsCarousel from "./components/testimonials-carousel"

export default function Home() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Hero />
      <ServicesContainer />
      <ExperienceSection />
      <TeamSection />
      <TestimonialsCarousel />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Transforme seu Negócio com a Format Soluções</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia da informação para impulsionar o crescimento e a eficiência da
            sua empresa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/FormatBot/servicos"
              className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              Nossos Serviços
            </a>
            <a
              href="/FormatBot/contato"
              className="border border-purple-600 text-purple-400 px-6 py-3 rounded-md hover:bg-purple-600/20 transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
