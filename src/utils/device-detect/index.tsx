import { useState, useEffect } from 'react'

const DeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    const handleResize = () => {

        const width = window.innerWidth
        const isTablet = isMobile && width >= 768
        const isDesktop = !isMobile && width >= 1024

        setIsMobile(isMobile)
        setIsTablet(isTablet)
        setIsDesktop(isDesktop)
    }

    useEffect(() => {
        handleResize()

        return () => {
            setIsMobile(false)
            setIsTablet(false)
            setIsDesktop(false)
        }
    }, [])

    return { isMobile, isTablet, isDesktop }
}

export default DeviceDetect
