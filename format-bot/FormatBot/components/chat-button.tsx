"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="fixed z-50"
      style={{
        bottom: "calc(16.67vh)", // 1/6 da altura da tela a partir do fundo
        right: "3%", // 3% da largura da tela a partir da direita
      }}
    >
      {isOpen ? (
        <div className="bg-zinc-800 rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="bg-primary p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-medium">Suporte FormatBot</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Fechar chat"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            <div className="bg-zinc-700 p-3 rounded-lg mb-2 max-w-[80%]">
              <p className="text-white text-sm">Olá! Como posso ajudar você hoje?</p>
            </div>
          </div>
          <div className="p-4 border-t border-zinc-700">
            <div className="flex">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-grow bg-zinc-700 border-none rounded-l-md py-2 px-3 text-white focus:outline-none"
              />
              <button className="bg-primary text-white px-4 rounded-r-md hover:bg-primary/90">Enviar</button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-colors"
          aria-label="Abrir chat de suporte"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  )
}
