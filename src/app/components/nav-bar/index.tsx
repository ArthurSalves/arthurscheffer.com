'use client'

import { NavBarContainerStyled, NavBarContentStyled, NavBarItemStyled } from './styles'
import React from 'react'
import { navBarLinks } from './constants'
import { useRouter } from 'next/navigation'

const NavBar: React.FC = () => {
    const router = useRouter()
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (navBarLinks) e.preventDefault()
        const elementId: string = e.currentTarget.href.replace(/.*\#/, '')
        const element: HTMLElement | null = document.getElementById(elementId)
        if (!element) {
            if (elementId !== 'about') {
                router.push(`/#${e.currentTarget.href.replace(/.*\#/, '')}`)
            } else {
                router.push('/')
            }
        } else {
            const approximateHeaderHeight: number = 150
            const targetElementTop: number = element?.getBoundingClientRect().top

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
