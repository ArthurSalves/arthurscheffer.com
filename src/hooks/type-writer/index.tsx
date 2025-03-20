'use client'
import { useEffect, useState, useRef } from 'react'

interface StateRef {
    isDeleting: boolean
    actualIndexPhrase: number
}

interface UseTypeWriterReturn {
    isTyping: boolean
    phraseDisplayed: string
}

export function useTypeWriter(phrases: Array<string>): UseTypeWriterReturn {
    const [phraseDisplayed, setPhraseDisplayed] = useState<string>(phrases[0])
    const [isTyping, setIsTyping] = useState<boolean>(false)
    const stateRef = useRef<StateRef>({ isDeleting: false, actualIndexPhrase: 0 })

    useEffect(() => {
        const actualPhrase = phrases[stateRef.current.actualIndexPhrase]
        if (phraseDisplayed === actualPhrase) {
            stateRef.current = { ...stateRef.current, isDeleting: true }
        }

        function typeCharacter() {
            setIsTyping(true)
            setPhraseDisplayed(prevText => prevText + actualPhrase[phraseDisplayed.length])
        }

        function removeCharacter() {
            setIsTyping(true)
            const nextText = phraseDisplayed.slice(0, -1)
            setPhraseDisplayed(nextText)
            nextPhrases(nextText)
        }

        function nextPhrases(phrase: string) {
            if (phrase === '') {
                const nextIndex =
                    stateRef.current.actualIndexPhrase < phrases.length - 1 ? stateRef.current.actualIndexPhrase + 1 : 0
                stateRef.current = { actualIndexPhrase: nextIndex, isDeleting: false }
            }
        }

        if (!stateRef.current.isDeleting && phraseDisplayed !== actualPhrase) {
            setTimeout(typeCharacter, 150)
        } else if (phraseDisplayed !== '') {
            setIsTyping(false)
            const timeToRemove = phraseDisplayed === actualPhrase ? 2000 : 50
            setTimeout(removeCharacter, timeToRemove)
        }
    }, [phraseDisplayed])

    return { phraseDisplayed, isTyping: isTyping }
}
