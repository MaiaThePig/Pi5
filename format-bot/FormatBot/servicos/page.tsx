import Image from "next/image"
import Link from "next/link"
import { services } from "@/FormatBot/lib/data"

export default function ServicosPage() {
  return (
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Nossos Serviços</h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções completas para transformar seu negócio com tecnologia
          </p>
        </div>

        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`py-12 ${index % 2 === 0 ? "bg-zinc-800" : "bg-zinc-900"} rounded-lg mb-8`}
          >
            <div
              className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8`}
            >
              <div className="lg:w-1/2">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                </div>

                <p className="text-gray-300 mb-6">{service.description}</p>

                <Link
                  href={`/FormatBot/servicos/${service.id}`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
