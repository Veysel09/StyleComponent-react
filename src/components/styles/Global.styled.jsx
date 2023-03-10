import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background: ${({ theme }) => theme.color.body};
        color: #00252e;
        font-family: 'poppins', sans-serif;
        font-size: 1.1rem;
    }
    p{
        opacity: 0.6;
        line-height: 1.5rem;
    }

`;
