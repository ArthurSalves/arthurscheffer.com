'use client'
import HomeScreen from '@/app/components/pages/home'
//import { Metadata } from 'next'
import { useEffect } from 'react'

// export const metadata: Metadata = {
//     title: 'Arthur Scheffer Alves',
//     description:
//         'I’m a software engineer with a degree in Systems Analysis and Development and 5 years of experience delivering clean, scalable, and high-performance applications. I’ve built intuitive front-end interfaces with modern frameworks and developed robust back-end systems and APIs. My work has consistently improved delivery speed, code maintainability, and user experience, leveraging best practices in architecture and DevOps.'
// }
export default function HomePage() {
    useEffect(() => {
        // Captura erros não tratados
        window.addEventListener('error', event => {
            console.log('🚨 Erro global capturado:', event.error || event.message)
        })

        // Captura rejeições de Promises não tratadas
        window.addEventListener('unhandledrejection', event => {
            console.log('🚨 Promise rejeitada sem tratamento:', event.reason)
        })
    }, [])
    return <HomeScreen />
}
