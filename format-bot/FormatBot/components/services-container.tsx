"use client"

import { useState } from "react"
import Image from "next/image"
import { services } from "@/FormatBot/lib/data"
import { useIsMobile } from "@/FormatBot/hooks/use-is-mobile"

export default function ServicesContainer() {
  const [activeService, setActiveService] = useState<string | null>(null)
  const isMobile = useIsMobile()

  // Função para lidar com cliques em dispositivos móveis
  const handleServiceClick = (serviceId: string) => {
    if (isMobile) {
      setActiveService((prevId) => (prevId === serviceId ? null : serviceId))
    }
  }

  return (
    <section className="bg-zinc-900 py-8 sm:py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 sm:mb-10 md:mb-16 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Nossos <span className="text-purple-400">Serviços</span>
        </h2>

        <div className="flex flex-col md:flex-row md:h-[700px] h-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative flex cursor-pointer transition-all duration-300 ease-in-out
                ${isMobile ? "h-[200px] mb-4" : "h-full"}
                ${activeService === service.id && !isMobile ? "md:w-2/5" : "md:w-1/5"}
                ${activeService && activeService !== service.id && !isMobile ? "opacity-70" : "opacity-100"}
                border border-white hover:border-purple-400
              `}
              onMouseEnter={() => !isMobile && setActiveService(service.id)}
              onMouseLeave={() => !isMobile && setActiveService(null)}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-900 opacity-80" />

              {/* Vertical Title (visible when not expanded) */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
                ${activeService === service.id ? "opacity-0" : "opacity-100"}
              `}
              >
                <div className="relative flex h-full w-full flex-col items-center justify-center">
                  {/* Icon positioned at top center */}
                  <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg transition-all duration-300 group-hover:scale-110">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                  </div>

                  {/* Rotated Text - Single line per service */}
                  <div
                    className={`${isMobile ? "" : "rotate-90"} whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold tracking-wider text-white text-shadow`}
                  >
                    {service.title}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-300 md:p-8
                ${activeService === service.id ? "opacity-100" : "opacity-0"}
              `}
              >
                <div className="flex w-full flex-col items-center md:flex-row md:items-start md:justify-between">
                  {/* Left side - Text content */}
                  <div className="mb-6 flex flex-col items-center md:mb-0 md:w-1/2 md:items-start md:pr-4 md:text-left">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg md:mb-6 md:h-20 md:w-20">
                      <service.icon className="h-8 w-8 text-white md:h-10 md:w-10" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold tracking-wider text-white text-shadow md:mb-4 md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-base text-zinc-300 md:mb-6 md:text-lg">{service.description}</p>
                    <button className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 text-base font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/20 md:px-8 md:py-3 md:text-lg">
                      Saiba mais
                    </button>
                  </div>

                  {/* Right side - Image */}
                  <div className="relative hidden h-auto w-full py-[5%] md:block md:w-1/2">
                    <div className="relative h-[90%] w-full overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
