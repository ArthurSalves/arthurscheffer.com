'use client'
import styled from 'styled-components'

export const FooterStyled = styled.footer`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 15%;
        @media (max-width: 768px) {
            margin-bottom: 10px;
            width: 30%;
        }
    }

    > p {
        @media (max-width: 768px) {
            text-align: center;
        }
    }
`
