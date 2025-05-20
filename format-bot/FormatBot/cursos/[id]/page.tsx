import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, Users, Star, Calendar, CheckCircle } from "lucide-react"

interface CoursePageProps {
  params: {
    id: string
  }
}

const courses = [
  {
    id: "1",
    title: "Desenvolvimento Web Completo",
    description:
      "Aprenda HTML, CSS, JavaScript, React e Node.js neste curso completo de desenvolvimento web. Este curso abrangente foi projetado para levar você do básico ao avançado, preparando-o para o mercado de trabalho com habilidades práticas e atualizadas.",
    image: "/placeholder.svg?height=600&width=1200",
    duration: "40 horas",
    students: 1250,
    rating: 4.8,
    instructor: "Rafael Oliveira",
    startDate: "15 de Junho, 2025",
    price: "R$ 997,00",
    modules: [
      {
        title: "Fundamentos da Web",
        lessons: ["HTML5 Semântico", "CSS3 Moderno", "JavaScript ES6+"],
      },
      {
        title: "Front-end Avançado",
        lessons: ["React.js", "Styled Components", "Context API"],
      },
      {
        title: "Back-end com Node.js",
        lessons: ["Express.js", "MongoDB", "API RESTful"],
      },
      {
        title: "Projeto Final",
        lessons: ["Arquitetura", "Implementação", "Deploy"],
      },
    ],
  },
  {
    id: "2",
    title: "Inteligência Artificial para Negócios",
    description:
      "Descubra como implementar IA em seu negócio para aumentar produtividade e resultados. Este curso prático mostra como utilizar as mais recentes tecnologias de inteligência artificial para resolver problemas reais de negócios.",
    image: "/placeholder.svg?height=600&width=1200",
    duration: "30 horas",
    students: 980,
    rating: 4.7,
    instructor: "Ana Silva",
    startDate: "20 de Junho, 2025",
    price: "R$ 1.297,00",
    modules: [
      {
        title: "Fundamentos de IA",
        lessons: ["Conceitos Básicos", "Machine Learning", "Deep Learning"],
      },
      {
        title: "IA para Análise de Dados",
        lessons: ["Processamento de Dados", "Modelos Preditivos", "Visualização"],
      },
      {
        title: "Implementação Prática",
        lessons: ["Chatbots", "Automação de Processos", "Análise de Sentimentos"],
      },
      {
        title: "Estratégias de Negócios com IA",
        lessons: ["Transformação Digital", "ROI em IA", "Casos de Sucesso"],
      },
    ],
  },
]

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.id === params.id)

  if (!course) {
    notFound()
  }

  return (
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/FormatBot/cursos" className="text-primary hover:text-primary/80 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Voltar para Cursos
          </Link>
        </div>

        <div className="bg-zinc-800 rounded-lg overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{course.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                <div className="flex items-center text-yellow-400">
                  <Star className="h-5 w-5 mr-1" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="h-5 w-5 mr-1" />
                  <span>{course.students} alunos</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-4">Sobre o Curso</h2>
                <p className="text-gray-300 mb-8">{course.description}</p>

                <h2 className="text-2xl font-bold text-white mb-4">O que você vai aprender</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {course.modules.flatMap((module) =>
                    module.lessons.map((lesson, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-300">{lesson}</span>
                      </div>
                    )),
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">Conteúdo do Curso</h2>
                <div className="space-y-4 mb-8">
                  {course.modules.map((module, index) => (
                    <div key={index} className="bg-zinc-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Módulo {index + 1}: {module.title}
                      </h3>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center text-gray-300">
                            <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-zinc-700 rounded-lg p-6 sticky top-24">
                  <div className="text-3xl font-bold text-white mb-4">{course.price}</div>
                  <button className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 mb-4">
                    Matricule-se Agora
                  </button>
                  <button className="w-full border border-primary text-primary py-3 px-4 rounded-md hover:bg-primary/10 mb-6">
                    Adicionar à Lista de Desejos
                  </button>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-400">Início das aulas</div>
                        <div className="text-white">{course.startDate}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-400">Instrutor</div>
                        <div className="text-white">{course.instructor}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-400">Duração</div>
                        <div className="text-white">{course.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
