import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Clock, Phone, MapPin } from "lucide-react"
import { FaYoutube } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 pt-12 text-zinc-300">
      {/* Logo centralizada */}
      <div className="flex justify-center mb-8">
        <div className="relative h-16 w-48">
          <Image src="/FormatBot/images/logo.png" alt="Format Soluções Logo" fill className="object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Redes Sociais */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com/formatsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/formatsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/formatsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/formatsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Fale Conosco */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Fale Conosco</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                <span>Av. Tecnologia, 1000, São Paulo - SP</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="h-5 w-5 mr-2 text-purple-400" />
                <span>Seg-Sex: 9h às 18h | Sáb: 9h às 13h</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/FormatBot" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/FormatBot/servicos" className="hover:text-purple-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/FormatBot/cursos" className="hover:text-purple-400 transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/FormatBot/blog" className="hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/FormatBot/contato" className="hover:text-purple-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 py-6 text-center text-sm">
          <p>&copy; {currentYear} Format Soluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
