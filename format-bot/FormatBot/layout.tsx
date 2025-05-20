import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import ChatButton from "./components/chat-button"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Format Soluções - Tecnologia e Inovação",
  description: "Soluções inteligentes em tecnologia para sua empresa",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
}

export default function FormatBotLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
          <ChatButton />
        </div>
      </ThemeProvider>
    </div>
  )
}
