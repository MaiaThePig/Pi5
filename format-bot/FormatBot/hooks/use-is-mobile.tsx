"use client"

import { useState, useEffect } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Função para verificar se a tela é mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar inicialmente
    checkIfMobile()

    // Adicionar event listener para redimensionamento
    window.addEventListener("resize", checkIfMobile)

    // Limpar event listener
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return isMobile
}
