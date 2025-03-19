import styled from 'styled-components';

interface AboutContainerStyledProps {
    angle: number;
}

export const NavBarStyled = styled.nav`
    height: 90px;
    display: flex;
    align-items: center;
`;

export const ImageContainerStyled = styled.div`
    > img {
        border-radius: 100%;
        margin-bottom: 35px;
        box-shadow: rgba(255, 153, 0, 0.2) 0px 20px 35px;
    }
`;

export const AboutContainerStyled = styled.div.attrs<AboutContainerStyledProps>((props) => ({
  style: {
    backgroundImage: `linear-gradient(${props.angle}deg, rgb(255, 255, 247) 1%, rgb(114, 114, 103) 107%)`,
  },
}))<AboutContainerStyledProps>`
    margin-top: 35px;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
    }

`;

export const TitleAboutStyled = styled.div`
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

    @keyframes Typewriter-cursor { 
        0% { opacity:1; } 
        100% { opacity:0; }
    }

    > span {
        animation: Typewriter-cursor 1s infinite;
    }
`;

export const TextContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        align-items: flex-start;
    }

`;

export const DescriptionAboutSytled = styled.h1`
    text-align: center;
    margin-top: 60px;
    font-size: 24px;
    @media (max-width: 768px) {
        align-items: flex-start;
        text-align: left;
    }

`;
