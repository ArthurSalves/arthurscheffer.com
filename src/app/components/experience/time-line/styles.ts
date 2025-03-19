import styled from 'styled-components'

export const TimeLineStyed = styled.div`
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 68px;
    height: 100%;
    border-right: rgb(38, 38, 38) solid 2px;
    margin-right: 20px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(2005deg, rgb(255, 255, 247) 8.55094%, rgb(114, 114, 103) 107.012%);
`

export const EndedAtStyled = styled.span`
    position: relative;
    -webkit-text-fill-color: initial;
    color: orange;
    line-height: 2rem;
    text-align: center;
    left: 5px;
    margin-top: 20px;
    background-color: rgb(13, 13, 13);
    min-width: 6px;
`

export const StartedAtStyled = styled.span`
    position: relative;
    -webkit-text-fill-color: initial;
    color: orange;
    line-height: 2rem;
    text-align: center;
    left: 5px;
    margin-bottom: 20px;
    background-color: rgb(13, 13, 13);
    min-width: 6px;
`
