import { CheckCircle } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section className="bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Nossa Experiência</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 5 anos transformando negócios através da tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <h3 className="text-xl font-semibold text-white mb-4">Projetos Entregues</h3>
            <p className="text-gray-300">
              Centenas de projetos concluídos com sucesso para empresas de diversos segmentos.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <h3 className="text-xl font-semibold text-white mb-4">Clientes Satisfeitos</h3>
            <p className="text-gray-300">
              Alta taxa de satisfação e fidelização, com clientes que confiam em nossos serviços.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <h3 className="text-xl font-semibold text-white mb-4">Especialistas</h3>
            <p className="text-gray-300">
              Equipe multidisciplinar de profissionais altamente qualificados e experientes.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <h3 className="text-xl font-semibold text-white mb-4">Suporte Técnico</h3>
            <p className="text-gray-300">
              Suporte técnico disponível 24 horas por dia, 7 dias por semana para nossos clientes.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Por que escolher a FormatBot?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Expertise Técnica</h4>
                <p className="text-gray-300">
                  Nossa equipe é formada por especialistas com ampla experiência nas mais diversas tecnologias e
                  metodologias.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Atendimento Personalizado</h4>
                <p className="text-gray-300">
                  Entendemos as necessidades específicas de cada cliente para oferecer soluções sob medida.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Agilidade e Eficiência</h4>
                <p className="text-gray-300">
                  Utilizamos metodologias ágeis para entregar projetos com rapidez e qualidade, sem abrir mão da
                  excelência.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Segurança e Confiabilidade</h4>
                <p className="text-gray-300">
                  Priorizamos a segurança dos dados e a confiabilidade das soluções que desenvolvemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
