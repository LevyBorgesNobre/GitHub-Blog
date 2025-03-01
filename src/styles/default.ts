import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
   :focus{
    outline: 0;
   }

    body {
     background: ${props => props.theme['base-background']}; 
    }
     
    body, input, textarea,  button {
        font-family: 'Roboto', sans-serif;
        color: white;
        font-weight: 400;
        font-size:1rem;
    }

`