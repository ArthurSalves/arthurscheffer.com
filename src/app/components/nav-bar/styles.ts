import styled from 'styled-components'

export const NavBarContainerStyled = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #7a7a7a;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    -webkit-font-smoothing: antialiased;
    z-index: 2;
`

export const NavBarContentStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 50px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgba(23, 23, 23, 0.6);
    backdrop-filter: blur(5px);
    border: rgb(38, 38, 38) solid 1px;
    width: 100%;
    max-width: 400px;
    height: 40%;
`

export const LogoStyled = styled.img`
    height: 46%;
    margin-right: 30px;
`

export const NavBarItemStyled = styled.a`
    text-align: center;
    text-decoration: none;
    color: rgb(135, 135, 135);
    cursor: pointer;
    transition: color 0.4s;
    font-size: 16px;
    margin-right: 10px;
    margin-left: 10px;
    :hover {
        color: #b3b3b3;
    }
`
