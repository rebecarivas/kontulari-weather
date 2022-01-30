import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --blue: #0d2f45;
    --blue1: #1b445e;
    --blue2: #1a3b51;
    --green: #72e1b3;
    --preto: #222529;
    --lightgreen: #eefdf6;
    --gray1: #e9eef5;
    --gray2: #bec6cf;
}
     *{
        margin: 0;
        padding: 0;
        /* height: 100%; */
        box-sizing: border-box;
    }
    html{
        height: 100%;
        min-height: 100%;
    }
    body{
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }
    h1, h2, h3, h4, h5 {
        font-family: Source Sans Pro, sans-serif;
        font-weight: bold;
        color: ${props => props.theme.colors.text};
    }
    p, div {
        font-family: Source Sans Pro, sans-serif;
        color: ${props => props.theme.colors.text};
    }

`