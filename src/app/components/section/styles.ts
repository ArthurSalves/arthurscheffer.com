import styled from 'styled-components'

export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    width: 100%;
    min-height: 300px;
    border-radius: 30px;
    margin-top: 50px;
    margin-bottom: 50px;

    > div {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > a {
            text-decoration: none;
            color: white;
            color: inherit;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            text-decoration: underline;
            color: orange;
        }
    }

    > h2 {
        font-size: 32px;
        -webkit-text-fill-color: initial;
        display: flex;
        align-items: flex-start;
        width: 100%;
        color: orange;
    }
`
