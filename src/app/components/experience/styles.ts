'use client'
import styled from 'styled-components'

export const ExperienceCardStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    margin-bottom: 50px;
    margin-top: 50px;
`

export const SkillsContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
`

export const ExperinceDescriptionContainerStyled = styled.div`
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 30px;
        margin-bottom: 10px;
    }

    > article {
        font-size: 1.25rem;
        margin-top: 20px;
        > p {
            margin-bottom: 20px;

            line-height: 1.75rem;
        }
        > ul > li {
            font-size: 1.125rem;
            line-height: 30px;
            list-style-position: inside;
            list-style-type: disc;
            list-style-type: circle;
            margin-bottom: 20px;
            display: list-item;
            text-align: -webkit-match-parent;
            unicode-bidi: isolate;
        }
    }
`
