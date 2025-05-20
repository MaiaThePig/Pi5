import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Ana Silva",
    role: "CEO & Fundadora",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Com mais de 15 anos de experiência em tecnologia, Ana lidera a FormatBot com visão inovadora e foco em resultados. Formada em Ciência da Computação com MBA em Gestão de Negócios, ela combina conhecimento técnico e estratégico para impulsionar o crescimento da empresa.",
    linkedin: "#",
    twitter: "#",
    email: "ana@formatbot.com",
  },
  {
    name: "Carlos Mendes",
    role: "CTO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Especialista em IA e desenvolvimento de software, Carlos supervisiona todas as soluções tecnológicas da FormatBot. Com PhD em Inteligência Artificial, ele lidera a equipe de desenvolvimento e garante a excelência técnica em todos os projetos.",
    linkedin: "#",
    twitter: "#",
    email: "carlos@formatbot.com",
  },
  {
    name: "Juliana Costa",
    role: "Diretora de Operações",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Juliana garante que todos os projetos sejam entregues com qualidade e dentro do prazo. Com experiência em gestão de projetos e metodologias ágeis, ela coordena as equipes e processos para garantir a satisfação dos clientes.",
    linkedin: "#",
    twitter: "#",
    email: "juliana@formatbot.com",
  },
  {
    name: "Rafael Oliveira",
    role: "Líder de Desenvolvimento",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Com vasta experiência em desenvolvimento web, Rafael lidera nossa equipe de programadores. Especialista em React, Node.js e arquiteturas modernas, ele garante que nossas soluções sejam robustas e escaláveis.",
    linkedin: "#",
    twitter: "#",
    email: "rafael@formatbot.com",
  },
  {
    name: "Mariana Santos",
    role: "Especialista em UX/UI",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Mariana transforma conceitos em interfaces intuitivas e atraentes. Com formação em Design e especialização em Experiência do Usuário, ela cria designs que combinam estética e funcionalidade.",
    linkedin: "#",
    twitter: "#",
    email: "mariana@formatbot.com",
  },
  {
    name: "Lucas Ferreira",
    role: "Especialista em IA",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Lucas desenvolve algoritmos de inteligência artificial e machine learning para nossas soluções. Com mestrado em Ciência de Dados, ele transforma dados em insights valiosos para nossos clientes.",
    linkedin: "#",
    twitter: "#",
    email: "lucas@formatbot.com",
  },
  {
    name: "Fernanda Lima",
    role: "Gerente de Projetos",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Fernanda coordena os projetos da FormatBot, garantindo que sejam entregues no prazo e dentro do orçamento. Certificada em PMP e metodologias ágeis, ela mantém os projetos alinhados com os objetivos dos clientes.",
    linkedin: "#",
    twitter: "#",
    email: "fernanda@formatbot.com",
  },
  {
    name: "Pedro Alves",
    role: "Especialista em Cloud",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Pedro é responsável pelas soluções de infraestrutura em nuvem da FormatBot. Certificado em AWS, Azure e Google Cloud, ele projeta arquiteturas escaláveis e seguras para nossos clientes.",
    linkedin: "#",
    twitter: "#",
    email: "pedro@formatbot.com",
  },
]

export default function EquipePage() {
  return (
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Nossa Equipe</h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça os profissionais talentosos que fazem a FormatBot acontecer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-gray-400 mb-4 line-clamp-4">{member.bio}</p>
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
      </div>
    </div>
  )
}
