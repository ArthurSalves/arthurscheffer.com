import styled from 'styled-components'


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

    @keyframes Typewriter-cursor { 
        0% { opacity:1; } 
        100% { opacity:0; }
    }

    > span {
        animation: Typewriter-cursor 1s infinite;
    }
`