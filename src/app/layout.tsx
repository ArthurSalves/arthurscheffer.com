'use client'
import { Poppins } from 'next/font/google'
import { GlobalStyle, LayoutStyled } from './globals'
import StyledComponentsRegistry from '@/app/components/layout'
import NavBar from './components/nav-bar'
import Footer from './components/footer'
import { useEffect } from 'react'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    preload: true
})

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    useEffect(() => {
        console.log('🖥️ [Client] Página carregada no navegador')
        window.addEventListener('error', event => {
            console.error('Erro capturado no cliente:', event.error)
        })

        window.addEventListener('unhandledrejection', event => {
            console.error('Promise rejeitada sem catch:', event.reason)
        })
    }, [])
    return (
        <html lang="en" className={poppins.className}>
            <body>
                <StyledComponentsRegistry>
                    <LayoutStyled>
                        <NavBar />
                        <GlobalStyle />
                        {children}
                        <Footer />
                    </LayoutStyled>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
