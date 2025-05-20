import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, User, Clock, Facebook, Twitter, Linkedin } from "lucide-react"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

const blogPosts = [
  {
    id: "1",
    title: "Como a Inteligência Artificial está transformando o atendimento ao cliente",
    content: `
      <p>A inteligência artificial (IA) está revolucionando a forma como as empresas interagem com seus clientes. Com o avanço das tecnologias de processamento de linguagem natural e aprendizado de máquina, os chatbots e assistentes virtuais tornaram-se ferramentas poderosas para melhorar a experiência do cliente e otimizar operações.</p>
      
      <h2>O crescimento dos chatbots</h2>
      
      <p>Nos últimos anos, vimos um crescimento exponencial no uso de chatbots. De acordo com pesquisas recentes, mais de 67% dos consumidores globais interagiram com um chatbot no último ano. Essa tendência não mostra sinais de desaceleração, com projeções indicando que o mercado global de chatbots deve atingir US$ 9,4 bilhões até 2024.</p>
      
      <p>Os chatbots modernos vão muito além de simples respostas programadas. Equipados com IA avançada, eles podem:</p>
      
      <ul>
        <li>Entender linguagem natural e contexto</li>
        <li>Aprender com interações anteriores</li>
        <li>Personalizar respostas com base no histórico do cliente</li>
        <li>Resolver problemas complexos sem intervenção humana</li>
      </ul>
      
      <h2>Benefícios para empresas e clientes</h2>
      
      <p>A implementação de chatbots e assistentes virtuais oferece benefícios significativos tanto para empresas quanto para clientes:</p>
      
      <h3>Para empresas:</h3>
      
      <ul>
        <li>Disponibilidade 24/7, eliminando limitações de horário comercial</li>
        <li>Redução de custos operacionais em até 30%</li>
        <li>Capacidade de lidar com múltiplas consultas simultaneamente</li>
        <li>Coleta de dados valiosos sobre preferências e comportamentos dos clientes</li>
      </ul>
      
      <h3>Para clientes:</h3>
      
      <ul>
        <li>Respostas instantâneas sem tempo de espera</li>
        <li>Suporte consistente e disponível a qualquer momento</li>
        <li>Experiências personalizadas baseadas em interações anteriores</li>
        <li>Resolução mais rápida de problemas simples</li>
      </ul>
      
      <h2>Casos de sucesso</h2>
      
      <p>Muitas empresas já colhem os benefícios da IA no atendimento ao cliente. Por exemplo, uma grande empresa de telecomunicações implementou um assistente virtual que agora lida com 70% de todas as consultas de clientes, resultando em uma redução de 25% no tempo médio de resolução e um aumento de 20% na satisfação do cliente.</p>
      
      <p>Da mesma forma, um banco internacional relatou uma redução de 60% nas chamadas para seu call center após a implementação de um chatbot avançado em seu aplicativo móvel e site.</p>
      
      <h2>O futuro do atendimento ao cliente</h2>
      
      <p>À medida que a IA continua a evoluir, podemos esperar chatbots e assistentes virtuais ainda mais sofisticados. As tendências emergentes incluem:</p>
      
      <ul>
        <li>Integração com realidade aumentada para suporte visual</li>
        <li>Análise de sentimentos para detectar e responder às emoções dos clientes</li>
        <li>Integração perfeita entre atendimento automatizado e humano</li>
        <li>Previsão de necessidades dos clientes antes mesmo que eles expressem um problema</li>
      </ul>
      
      <p>No entanto, é importante lembrar que a IA não deve substituir completamente o elemento humano no atendimento ao cliente. As melhores implementações combinam a eficiência da automação com a empatia e compreensão que apenas os humanos podem oferecer.</p>
      
      <h2>Conclusão</h2>
      
      <p>A inteligência artificial está transformando fundamentalmente o atendimento ao cliente, oferecendo novas oportunidades para melhorar a experiência do cliente e a eficiência operacional. As empresas que adotam essas tecnologias de forma estratégica, mantendo o equilíbrio certo entre automação e toque humano, estarão bem posicionadas para se destacar em um mercado cada vez mais competitivo.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "10 Mai 2025",
    author: "Ana Silva",
    authorImage: "/placeholder.svg?height=200&width=200",
    authorRole: "CEO & Especialista em IA",
    readTime: "5 min",
    category: "Inteligência Artificial",
    tags: ["IA", "Chatbots", "Atendimento ao Cliente", "Automação"],
  },
]

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/FormatBot/blog" className="text-primary hover:text-primary/80 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Voltar para o Blog
          </Link>
        </div>

        <article className="bg-zinc-800 rounded-lg overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8">
              <div className="flex items-center mr-4 mb-2">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock size={16} className="mr-1" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>

            <div
              className="prose prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="border-t border-zinc-700 pt-6 mt-8">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{post.author}</div>
                    <div className="text-primary text-sm">{post.authorRole}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-2">Compartilhar</div>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="bg-zinc-700 p-2 rounded-full hover:bg-primary transition-colors"
                      aria-label="Compartilhar no Facebook"
                    >
                      <Facebook size={16} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-zinc-700 p-2 rounded-full hover:bg-primary transition-colors"
                      aria-label="Compartilhar no Twitter"
                    >
                      <Twitter size={16} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-zinc-700 p-2 rounded-full hover:bg-primary transition-colors"
                      aria-label="Compartilhar no LinkedIn"
                    >
                      <Linkedin size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Posts Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Post relacionado" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  <Link href="#" className="hover:text-primary transition-colors">
                    5 tendências de IA para ficar de olho em 2025
                  </Link>
                </h3>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar size={14} className="mr-1" />
                  <span>05 Mai 2025</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Post relacionado" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  <Link href="#" className="hover:text-primary transition-colors">
                    Como implementar um chatbot em seu site em 5 passos
                  </Link>
                </h3>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar size={14} className="mr-1" />
                  <span>15 Abr 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

### 14. Vamos corrigir o arquivo de layout principal:\
