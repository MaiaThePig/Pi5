import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Como a Inteligência Artificial está transformando o atendimento ao cliente",
    excerpt:
      "Descubra como chatbots e assistentes virtuais estão revolucionando a forma como as empresas se comunicam com seus clientes.",
    image: "/placeholder.svg?height=400&width=600",
    date: "10 Mai 2025",
    author: "Ana Silva",
    readTime: "5 min",
    category: "Inteligência Artificial",
  },
  {
    id: 2,
    title: "5 tendências de desenvolvimento web para ficar de olho em 2025",
    excerpt:
      "Conheça as principais tecnologias e práticas que estão moldando o futuro do desenvolvimento web neste ano.",
    image: "/placeholder.svg?height=400&width=600",
    date: "28 Abr 2025",
    author: "Rafael Oliveira",
    readTime: "7 min",
    category: "Desenvolvimento Web",
  },
  {
    id: 3,
    title: "Segurança digital: como proteger sua empresa contra ataques cibernéticos",
    excerpt:
      "Aprenda as melhores práticas para garantir a segurança dos dados e sistemas da sua empresa no ambiente digital.",
    image: "/placeholder.svg?height=400&width=600",
    date: "15 Abr 2025",
    author: "Carlos Mendes",
    readTime: "6 min",
    category: "Segurança Digital",
  },
  {
    id: 4,
    title: "Cloud Computing: vantagens e desafios da migração para a nuvem",
    excerpt: "Entenda os benefícios e os desafios de migrar a infraestrutura da sua empresa para a nuvem.",
    image: "/placeholder.svg?height=400&width=600",
    date: "02 Abr 2025",
    author: "Pedro Alves",
    readTime: "8 min",
    category: "Cloud Computing",
  },
  {
    id: 5,
    title: "Data Science: como transformar dados em insights valiosos para seu negócio",
    excerpt:
      "Descubra como a análise de dados pode ajudar sua empresa a tomar decisões mais inteligentes e estratégicas.",
    image: "/placeholder.svg?height=400&width=600",
    date: "25 Mar 2025",
    author: "Lucas Ferreira",
    readTime: "6 min",
    category: "Análise de Dados",
  },
  {
    id: 6,
    title: "Desenvolvimento mobile: nativo, híbrido ou PWA?",
    excerpt:
      "Conheça as diferenças entre as principais abordagens de desenvolvimento mobile e descubra qual é a melhor para o seu projeto.",
    image: "/placeholder.svg?height=400&width=600",
    date: "18 Mar 2025",
    author: "Mariana Santos",
    readTime: "7 min",
    category: "Desenvolvimento Mobile",
  },
]

const categories = [
  "Todos",
  "Inteligência Artificial",
  "Desenvolvimento Web",
  "Segurança Digital",
  "Cloud Computing",
  "Análise de Dados",
  "Desenvolvimento Mobile",
]

export default function BlogPage() {
  return (
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Blog FormatBot</h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Artigos, tutoriais e novidades sobre tecnologia e inovação
          </p>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/FormatBot/blog?category=${category !== "Todos" ? category : ""}`}
              className={`px-4 py-2 rounded-full ${
                index === 0 ? "bg-primary text-white" : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
              } transition-colors`}
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Inscreva-se em nossa newsletter</h2>
            <p className="text-gray-300 mb-6">
              Receba as últimas novidades, artigos e dicas sobre tecnologia diretamente no seu email.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-grow px-4 py-3 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  <Link href={`/FormatBot/blog/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link href={`/FormatBot/blog/${post.id}`} className="text-primary font-medium hover:underline">
                  Ler mais →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Paginação */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <a href="#" className="px-4 py-2 bg-zinc-800 text-gray-400 rounded-md hover:bg-zinc-700">
              Anterior
            </a>
            <a href="#" className="px-4 py-2 bg-primary text-white rounded-md">
              1
            </a>
            <a href="#" className="px-4 py-2 bg-zinc-800 text-gray-400 rounded-md hover:bg-zinc-700">
              2
            </a>
            <a href="#" className="px-4 py-2 bg-zinc-800 text-gray-400 rounded-md hover:bg-zinc-700">
              3
            </a>
            <span className="px-4 py-2 text-gray-400">...</span>
            <a href="#" className="px-4 py-2 bg-zinc-800 text-gray-400 rounded-md hover:bg-zinc-700">
              10
            </a>
            <a href="#" className="px-4 py-2 bg-zinc-800 text-gray-400 rounded-md hover:bg-zinc-700">
              Próximo
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
