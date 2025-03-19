import { useTypeWriter } from '@/hooks/type-writer'
import { TypeWriterStyled } from './styles'
import React from 'react'

const TypeWriter: React.FC = () => {
    const testes = ['Software Engineer', 'Innovative Problem Solver', 'AWS Serveless']
    return (
        <TypeWriterStyled>
            {useTypeWriter(testes)} <span>|</span>
        </TypeWriterStyled>
    )
}
export default TypeWriter
