import styled from 'styled-components'

export const TimeLineStyed = styled.div`
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 70px;
    height: 100%;
    border-left: rgb(38, 38, 38) solid 2px;
    @media (max-width: 768px) {
        display: none;
    }
`

export const EndedAtStyled = styled.span`
    position: relative;
    -webkit-text-fill-color: initial;
    color: orange;
    line-height: 2rem;
    left: -10px;
    margin-top: 20px;
    background-color: rgb(13, 13, 13);
    min-width: 6px;
`

export const StartedAtStyled = styled.span`
    position: relative;
    -webkit-text-fill-color: initial;
    color: orange;
    line-height: 2rem;
    left: -10px;
    margin-bottom: 20px;
    background-color: rgb(13, 13, 13);
    min-width: 6px;
`
