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

    background-image: linear-gradient(2005deg, rgb(255, 255, 247) 8.55094%, rgb(114, 114, 103) 107.012%);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    > h2 {
        -webkit-text-fill-color: initial;
        display: flex;
        align-items: flex-start;
        width: 100%;
        color: orange;
    }
`
