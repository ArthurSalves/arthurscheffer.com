import { FunctionComponent } from 'react'
import { FooterStyled } from './styles'
import Image from 'next/image'

const Footer: FunctionComponent = () => {
    return (
        <FooterStyled>
            <p>© 2025 All Rights Reserved. Design & Developed with 🧡</p>
            <div>
                <a>
                    <Image
                        src="/icons/email.svg"
                        width={30}
                        height={30}
                        alt="Arthur Scheffer's picture with a orange background"
                    />
                </a>
                <a href="https://www.linkedin.com/in/arthurschefferalves/" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/linkedin.svg" width={30} height={30} alt="Linkedin logo" />
                </a>
                <a href="https://github.com/ArthurSalves" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/github.svg" width={30} height={30} alt="Github logo" />
                </a>
            </div>
        </FooterStyled>
    )
}
export default Footer
