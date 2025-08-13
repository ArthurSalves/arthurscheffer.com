'use client'
import { useEffect, useState } from 'react'

// Definindo os tipos das propriedades do hook
export function useScrollAngle(initialAngle: number = 214, factor: number = 50): number {
    const [angle, setAngle] = useState<number>(initialAngle)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const newAngle = initialAngle + (scrollY / window.innerHeight) * factor
            setAngle(newAngle)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [initialAngle, factor])

    return angle
}
