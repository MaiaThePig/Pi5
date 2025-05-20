"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    position: "CEO, TechCorp",
    image: "/placeholder.svg?height=200&width=200",
    text: "A FormatBot transformou completamente nossa infraestrutura de TI. A equipe é extremamente profissional e entregou resultados além das nossas expectativas. Recomendo fortemente seus serviços.",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    position: "Diretora de Marketing, Inova Digital",
    image: "/placeholder.svg?height=200&width=200",
    text: "O chatbot desenvolvido pela FormatBot aumentou significativamente nossas conversões e melhorou a experiência dos nossos clientes. Um investimento que valeu cada centavo.",
  },
  {
    id: 3,
    name: "Pedro Santos",
    position: "CTO, Nexus Solutions",
    image: "/placeholder.svg?height=200&width=200",
    text: "A migração para a nuvem conduzida pela FormatBot foi impecável. Zero tempo de inatividade e uma economia significativa nos custos operacionais. Estamos muito satisfeitos com os resultados.",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="bg-zinc-800 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja os depoimentos de quem já transformou seu negócio com nossas soluções
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-zinc-700 rounded-lg p-8">
            <div className="absolute top-6 left-6 text-primary opacity-30">
              <Quote size={48} />
            </div>

            <div className="relative z-10">
              <p className="text-lg text-gray-200 mb-6 italic">{testimonials[currentIndex].text}</p>

              <div className="flex items-center">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? "bg-primary" : "bg-zinc-600 hover:bg-zinc-500"
                }`}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-zinc-700 text-white hover:bg-primary transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-zinc-700 text-white hover:bg-primary transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
