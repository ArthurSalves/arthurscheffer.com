'use client'

import { NavBarContainerStyled, NavBarContentStyled, NavBarItemStyled } from './styles'
import React from 'react'
import { navBarLinks } from './constants'

const NavBar: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        console.log('id:', e.currentTarget.href.replace(/.*\#/, ''))
        const element = document.getElementById(e.currentTarget.href.replace(/.*\#/, ''))

        if (!element) return

        const approximateHeaderHeight = 150
        const targetElementTop = element?.getBoundingClientRect().top

        window.scrollTo({
            top: targetElementTop + window.scrollY - approximateHeaderHeight,
            behavior: 'smooth'
        })
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
