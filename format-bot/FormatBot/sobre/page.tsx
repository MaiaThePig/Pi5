import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Users, Target } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Sobre a FormatBot</h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">Conheça nossa história, missão e valores</p>
        </div>

        {/* História */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Nossa História</h2>
              <p className="text-gray-300 mb-4">
                A FormatBot foi fundada em 2019 por um grupo de profissionais apaixonados por tecnologia e inovação.
                Começamos como uma pequena consultoria de desenvolvimento web e, ao longo dos anos, expandimos nossos
                serviços para abranger todas as áreas da transformação digital.
              </p>
              <p className="text-gray-300 mb-4">
                Nossa jornada começou com o objetivo de tornar a tecnologia mais acessível para empresas de todos os
                tamanhos. Acreditamos que a inovação não deve ser privilégio apenas das grandes corporações, mas sim uma
                ferramenta de crescimento para todos os negócios.
              </p>
              <p className="text-gray-300">
                Hoje, contamos com uma equipe multidisciplinar de mais de 50 profissionais especializados em diversas
                áreas da tecnologia, prontos para enfrentar os desafios mais complexos e entregar soluções que realmente
                fazem a diferença.
              </p>
            </div>
            <div className="relative h-80 lg:h-full">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Equipe FormatBot"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-zinc-800 rounded-lg p-6">
            <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Missão</h3>
            <p className="text-gray-300">
              Transformar negócios através da tecnologia, oferecendo soluções inovadoras e personalizadas que
              impulsionam o crescimento e a eficiência de nossos clientes.
            </p>
          </div>

          <div className="bg-zinc-800 rounded-lg p-6">
            <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Visão</h3>
            <p className="text-gray-300">
              Ser reconhecida como referência em soluções tecnológicas no Brasil, destacando-se pela excelência,
              inovação e compromisso com o sucesso dos clientes.
            </p>
          </div>

          <div className="bg-zinc-800 rounded-lg p-6">
            <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Valores</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                <span>Inovação constante</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                <span>Excelência técnica</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                <span>Compromisso com resultados</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                <span>Ética e transparência</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                <span>Colaboração e trabalho em equipe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Por que escolher a FormatBot */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Por que escolher a FormatBot?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-700 rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expertise Técnica</h3>
              <p className="text-gray-300">
                Nossa equipe é formada por especialistas com ampla experiência nas mais diversas tecnologias e
                metodologias.
              </p>
            </div>

            <div className="bg-zinc-700 rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-300">
                Entendemos as necessidades específicas de cada cliente para oferecer soluções sob medida.
              </p>
            </div>

            <div className="bg-zinc-700 rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Agilidade e Eficiência</h3>
              <p className="text-gray-300">
                Utilizamos metodologias ágeis para entregar projetos com rapidez e qualidade, sem abrir mão da
                excelência.
              </p>
            </div>

            <div className="bg-zinc-700 rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Segurança e Confiabilidade</h3>
              <p className="text-gray-300">
                Priorizamos a segurança dos dados e a confiabilidade das soluções que desenvolvemos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Pronto para transformar seu negócio?</h2>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar novos patamares
            com nossas soluções tecnológicas.
          </p>
          <Link
            href="/FormatBot/contato"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  )
}
