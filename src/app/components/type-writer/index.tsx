import { useTypeWriter } from '@/hooks/type-writer'
import { BlinkingPipeStyled, TypeWriterStyled } from './styles'
import React from 'react'

const TypeWriter: React.FC = () => {
    const testes = ['Software Engineer', 'Innovative Problem Solver', 'AWS Serveless']
    const { isTyping } = useTypeWriter(testes)

    return (
        <TypeWriterStyled>
            {useTypeWriter(testes).phraseDisplayed}<BlinkingPipeStyled isTyping={isTyping}>|</BlinkingPipeStyled>
        </TypeWriterStyled>
    )
}
export default TypeWriter
