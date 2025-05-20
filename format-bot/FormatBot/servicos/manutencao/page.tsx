import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Clock, Shield, Cpu, HardDrive, Wrench } from "lucide-react"

export default function ManutencaoPage() {
  return (
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Manutenção de Computadores</h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Serviços especializados para manter seus equipamentos funcionando com máxima eficiência
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-zinc-800 rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">Soluções completas para sua empresa</h2>
              <p className="text-gray-300 mb-6">
                Nossa equipe de técnicos altamente qualificados oferece serviços de manutenção preventiva e corretiva
                para garantir que seus computadores, servidores e equipamentos de rede funcionem sem interrupções,
                maximizando a produtividade da sua empresa.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                  <p className="text-gray-300">Atendimento rápido e eficiente</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                  <p className="text-gray-300">Técnicos certificados e experientes</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                  <p className="text-gray-300">Garantia em todos os serviços</p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/FormatBot/contato"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Manutenção de Computadores"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Serviços Oferecidos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Manutenção Preventiva</h3>
              <p className="text-gray-300 mb-4">
                Serviços regulares para prevenir falhas e prolongar a vida útil dos seus equipamentos, incluindo
                limpeza, atualização de software e verificação de componentes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-300">Limpeza interna e externa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-300">Atualização de drivers e software</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-300">Verificação de temperatura</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-800 rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Manutenção Corretiva</h3>
              <p className="text-gray-300 mb-4">
                Diagnóstico e reparo de problemas em computadores, notebooks e servidores, com substituição de peças e
                componentes quando necessário.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-300">Reparo de hardware</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-300">Solução de problemas de software</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-300">Recuperação de dados</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-800 rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <HardDrive className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Upgrade de Hardware</h3>
              <p className="text-gray-300 mb-4">
                Melhore o desempenho dos seus equipamentos com atualizações de hardware, como memória RAM, SSD,
                processador e placa de vídeo.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-300">Instalação de SSD</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-300">Upgrade de memória RAM</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-300">Atualização de processador</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Como Funciona */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Diagnóstico</h3>
              <p className="text-gray-300">
                Realizamos uma análise completa dos seus equipamentos para identificar problemas e necessidades.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Orçamento</h3>
              <p className="text-gray-300">
                Apresentamos um orçamento detalhado com todas as soluções necessárias e custos envolvidos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Execução</h3>
              <p className="text-gray-300">
                Após aprovação, nossa equipe realiza os serviços com agilidade e eficiência, minimizando o tempo de
                inatividade.
              </p>
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 rounded-lg p-6 flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Atendimento Rápido</h3>
                <p className="text-gray-300">
                  Garantimos tempo de resposta ágil para minimizar o impacto de problemas técnicos na sua operação.
                </p>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg p-6 flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Garantia de Serviço</h3>
                <p className="text-gray-300">
                  Todos os nossos serviços e peças possuem garantia, proporcionando segurança e tranquilidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Precisando de manutenção para seus equipamentos?</h2>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar a manter sua infraestrutura de TI
            funcionando perfeitamente.
          </p>
          <Link
            href="/FormatBot/contato"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </div>
  )
}
