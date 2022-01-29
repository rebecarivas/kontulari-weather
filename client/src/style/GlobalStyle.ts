import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        /* height: 100%; */
        box-sizing: border-box;
    }
    body{
        display: flex;
        flex-direction: column;
    }
    h1, h2, h3, h4, h5, input {
        font-family: Roboto, sans-serif;
    }

`