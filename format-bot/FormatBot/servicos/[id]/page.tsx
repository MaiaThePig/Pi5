import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services } from "@/FormatBot/lib/data"
import { CheckCircle } from "lucide-react"

interface ServicePageProps {
  params: {
    id: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/FormatBot/servicos" className="text-primary hover:text-primary/80 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Voltar para Serviços
          </Link>
        </div>

        <div className="bg-zinc-800 rounded-lg overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{service.title}</h1>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-lg text-gray-300 mb-8">{service.description}</p>

            <h2 className="text-2xl font-bold text-white mb-4">O que oferecemos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                <span className="text-gray-300">Consultoria especializada</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                <span className="text-gray-300">Soluções personalizadas</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                <span className="text-gray-300">Implementação ágil</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                <span className="text-gray-300">Suporte contínuo</span>
              </div>
            </div>

            <div className="bg-zinc-700 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Por que escolher nosso serviço?</h2>
              <p className="text-gray-300 mb-4">
                Nossos especialistas em {service.title.toLowerCase()} possuem ampla experiência no mercado e utilizam as
                mais modernas tecnologias para entregar soluções de alta qualidade que atendem às necessidades
                específicas do seu negócio.
              </p>
              <p className="text-gray-300">
                Trabalhamos em parceria com nossos clientes para garantir que cada projeto seja entregue dentro do
                prazo, do orçamento e com a qualidade que você espera.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/FormatBot/contato"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
