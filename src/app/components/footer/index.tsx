import { FunctionComponent } from 'react'
import { FooterStyled } from './styles'
import Image from 'next/image'

const Footer: FunctionComponent = () => {
    return (
        <FooterStyled>
            <p>© 2025 All Rights Reserved. Design & Developed with 🧡</p>
            <div>
                <a
                    href="mailto:arthurschefferalves@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enviar email"
                >
                    <Image src="/icons/email.svg" width={30} height={30} alt="E-mail" />
                </a>
                <a
                    href="https://www.linkedin.com/in/arthurschefferalves/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Perfil no LinkedIn"
                >
                    <Image src="/icons/linkedin.svg" width={30} height={30} alt="LinkedIn" />
                </a>
                <a
                    href="https://github.com/ArthurSalves"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Perfil no GitHub"
                >
                    <Image src="/icons/github.svg" width={30} height={30} alt="GitHub" />
                </a>
            </div>
        </FooterStyled>
    )
}
export default Footer
