import styled from 'styled-components'
import { keyframes } from 'styled-components'

interface TypeWriterStyled {
    isTyping: boolean
}

const typewriterCursor = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
`

export const TypeWriterStyled = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    word-break: keep-all;
    @media (max-width: 768px) {
        text-align: left;
    }

    > img {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        @media (max-width: 768px) {
            top: -15px;
            text-align: left;
            align-items: flex-start;
        }
    }

    @media (max-width: 768px) {
        font-size: 35px;
        align-items: flex-start;
    }
`
export const BlinkingPipeStyled = styled.span<TypeWriterStyled>`
    display: inline-block;
    opacity: 1;
    animation-name: ${props => (props.isTyping ? null : typewriterCursor)};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    -webkit-text-fill-color: initial;
`
