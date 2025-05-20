import type { ReactNode } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { ChatButton } from "@/components/ui/chat-button"

export default function FormatBotLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <ChatButton />
      <Footer />
    </div>
  )
}
