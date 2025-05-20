import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Ana Silva",
    role: "CEO & Fundadora",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Com mais de 15 anos de experiência em tecnologia",
    linkedin: "#",
    twitter: "#",
    email: "ana@formatbot.com",
  },
  {
    name: "Carlos Mendes",
    role: "CTO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Especialista em IA e desenvolvimento de software",
    linkedin: "#",
    twitter: "#",
    email: "carlos@formatbot.com",
  },
  {
    name: "Juliana Costa",
    role: "Diretora de Operações",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Garante que todos os projetos sejam entregues com qualidade",
    linkedin: "#",
    twitter: "#",
    email: "juliana@formatbot.com",
  },
  {
    name: "Rafael Oliveira",
    role: "Líder de Desenvolvimento",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Especialista em React, Node.js e arquiteturas modernas",
    linkedin: "#",
    twitter: "#",
    email: "rafael@formatbot.com",
  },
]

export default function TeamSection() {
  return (
    <section className="bg-zinc-800 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Nossa Equipe</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça os profissionais talentosos que fazem a FormatBot acontecer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-zinc-700 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} className="text-gray-400 hover:text-primary">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-primary">
                    <Twitter size={20} />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-primary">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/FormatBot/equipe"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
          >
            Ver Equipe Completa
          </Link>
        </div>
      </div>
    </section>
  )
}
