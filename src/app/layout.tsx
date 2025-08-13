import { Poppins } from 'next/font/google'
import { GlobalStyle, LayoutStyled } from './globals'
import StyledComponentsRegistry from '@/app/components/layout'
import NavBar from './components/nav-bar'
import Footer from './components/footer'

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
    return (
        <html suppressHydrationWarning={true} lang="en" className={poppins.className}>
            <body suppressHydrationWarning={true}>
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
