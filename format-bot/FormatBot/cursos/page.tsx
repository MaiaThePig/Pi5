import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Star } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Desenvolvimento Web Completo",
    description: "Aprenda HTML, CSS, JavaScript, React e Node.js neste curso completo de desenvolvimento web.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "40 horas",
    students: 1250,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Inteligência Artificial para Negócios",
    description: "Descubra como implementar IA em seu negócio para aumentar produtividade e resultados.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "30 horas",
    students: 980,
    rating: 4.7,
  },
  {
    id: 3,
    title: "Cloud Computing na Prática",
    description: "Domine as principais plataformas de cloud e aprenda a migrar sua infraestrutura para a nuvem.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "35 horas",
    students: 850,
    rating: 4.9,
  },
  {
    id: 4,
    title: "Segurança Digital Essencial",
    description: "Proteja sua empresa contra ameaças cibernéticas com este curso completo de segurança.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "25 horas",
    students: 720,
    rating: 4.6,
  },
  {
    id: 5,
    title: "Desenvolvimento de Chatbots",
    description: "Crie chatbots inteligentes para automatizar atendimento e melhorar a experiência do cliente.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "20 horas",
    students: 650,
    rating: 4.7,
  },
  {
    id: 6,
    title: "Análise de Dados para Gestores",
    description: "Aprenda a interpretar dados e tomar decisões estratégicas baseadas em informações concretas.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "28 horas",
    students: 890,
    rating: 4.8,
  },
]

export default function CursosPage() {
  return (
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Nossos Cursos</h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Capacite-se com cursos de alta qualidade ministrados por especialistas do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-400">
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users size={16} className="mr-1" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star size={16} className="mr-1" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <Link
                  href={`/FormatBot/cursos/${course.id}`}
                  className="block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary/90 transition-colors"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
