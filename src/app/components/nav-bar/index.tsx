'use client'

import { NavBarContainerStyled, NavBarContentStyled, NavBarItemStyled } from './styles'
import React from 'react'
import { navBarLinks } from './constants'
import { useRouter } from 'next/navigation'

const NavBar: React.FC = () => {
    const router = useRouter()
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (navBarLinks) e.preventDefault()
        const element = document.getElementById(e.currentTarget.href.replace(/.*\#/, ''))

        if (!element) {
            router.push('/')
        } else {
            const approximateHeaderHeight = 150
            const targetElementTop = element?.getBoundingClientRect().top

            window.scrollTo({
                top: targetElementTop + window.scrollY - approximateHeaderHeight,
                behavior: 'smooth'
            })
        }
    }

    return (
        <NavBarContainerStyled>
            <NavBarContentStyled>
                {navBarLinks.map(({ label, href }) => (
                    <NavBarItemStyled key={label} href={href} onClick={handleScroll}>
                        {label}
                    </NavBarItemStyled>
                ))}
            </NavBarContentStyled>
        </NavBarContainerStyled>
    )
}
export default NavBar
