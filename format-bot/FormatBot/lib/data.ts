import { Code, Server, Bot, LineChart, Shield, Smartphone } from "lucide-react"
import { FaReact, FaNodeJs, FaAws, FaPython } from "react-icons/fa"
import { SiTensorflow, SiMongodb, SiDocker, SiKubernetes, SiGooglecloud } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import type { LucideIcon } from "lucide-react"

// Informações da empresa
export const companyInfo = {
  name: "Format Soluções",
  slogan: "A melhor em TI para você e sua empresa",
  description:
    "Oferecemos soluções completas em tecnologia da informação, desde desenvolvimento de software até infraestrutura e segurança, com foco na qualidade e satisfação do cliente.",
  foundedYear: 2015,
  contact: {
    address: "Av. Tecnologia, 1000, São Paulo - SP",
    phone: "(11) 9999-9999",
    email: "contato@formatsolutions.com.br",
  },
  socialMedia: {
    facebook: "https://facebook.com/formatsolutions",
    instagram: "https://instagram.com/formatsolutions",
    linkedin: "https://linkedin.com/company/formatsolutions",
    twitter: "https://twitter.com/formatsolutions",
  },
}

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image: string
}

// Serviços
export const services: Service[] = [
  {
    id: "web",
    title: "Desenvolvimento Web",
    description: "Criamos sites e aplicações web modernas e responsivas para sua empresa.",
    icon: Code,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "cloud",
    title: "Soluções em Cloud",
    description: "Infraestrutura em nuvem escalável e segura para seu negócio.",
    icon: Server,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "chatbots",
    title: "Chatbots Inteligentes",
    description: "Automatize seu atendimento com chatbots personalizados e eficientes.",
    icon: Bot,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "dados",
    title: "Análise de Dados",
    description: "Transforme dados em insights valiosos para tomada de decisões.",
    icon: LineChart,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "seguranca",
    title: "Segurança Digital",
    description: "Proteja seus dados e sistemas contra ameaças cibernéticas.",
    icon: Shield,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "mobile",
    title: "Aplicativos Mobile",
    description: "Desenvolvimento de aplicativos para iOS e Android com tecnologias modernas.",
    icon: Smartphone,
    image: "/placeholder.svg?height=400&width=600",
  },
]

// Recursos/Características
export const features = [
  {
    title: "Atendimento Personalizado",
    description: "Entendemos as necessidades específicas do seu negócio para oferecer soluções sob medida.",
    icon: () => (
      <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Suporte Técnico 24/7",
    description: "Equipe de suporte disponível 24 horas por dia, 7 dias por semana para resolver qualquer problema.",
    icon: () => (
      <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Tecnologia de Ponta",
    description: "Utilizamos as mais recentes tecnologias e metodologias para garantir resultados excepcionais.",
    icon: () => (
      <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

// Tecnologias
export const technologies = [
  {
    name: "React",
    Icon: FaReact,
    color: "text-blue-400",
  },
  {
    name: "Next.js",
    Icon: TbBrandNextjs,
    color: "text-white",
  },
  {
    name: "Node.js",
    Icon: FaNodeJs,
    color: "text-green-500",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "text-green-600",
  },
  {
    name: "AWS",
    Icon: FaAws,
    color: "text-yellow-500",
  },
  {
    name: "Python",
    Icon: FaPython,
    color: "text-blue-500",
  },
  {
    name: "TensorFlow",
    Icon: SiTensorflow,
    color: "text-orange-500",
  },
  {
    name: "Docker",
    Icon: SiDocker,
    color: "text-blue-400",
  },
  {
    name: "Kubernetes",
    Icon: SiKubernetes,
    color: "text-blue-600",
  },
  {
    name: "Google Cloud",
    Icon: SiGooglecloud,
    color: "text-blue-400",
  },
]

// Equipe
export const teamMembers = [
  {
    id: 1,
    name: "Ana Silva",
    role: "CEO & Fundadora",
    bio: "Com mais de 15 anos de experiência em tecnologia, Ana lidera a Format Soluções com visão inovadora.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CTO",
    bio: "Especialista em IA e desenvolvimento de software, Carlos supervisiona todas as soluções tecnológicas.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Diretora de Operações",
    bio: "Juliana garante que todos os projetos sejam entregues com qualidade e dentro do prazo.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Rafael Oliveira",
    role: "Líder de Desenvolvimento",
    bio: "Com vasta experiência em desenvolvimento web, Rafael lidera nossa equipe de programadores.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

// Depoimentos
export const testimonials = [
  {
    name: "Maria Santos",
    company: "Tech Solutions",
    text: "A Format Soluções transformou completamente nosso atendimento ao cliente com um chatbot inteligente que reduziu nosso tempo de resposta em 80%.",
    rating: 5,
    iconColor: "bg-blue-600",
  },
  {
    name: "João Pereira",
    company: "Retail Innovations",
    text: "Implementamos o sistema de análise de dados da Format Soluções e conseguimos insights valiosos que aumentaram nossas vendas em 35% no primeiro trimestre.",
    rating: 5,
    iconColor: "bg-green-600",
  },
  {
    name: "Carla Mendes",
    company: "HealthTech",
    text: "O aplicativo desenvolvido pela equipe da Format Soluções superou todas as nossas expectativas. Interface intuitiva e performance excepcional.",
    rating: 5,
    iconColor: "bg-purple-600",
  },
]
