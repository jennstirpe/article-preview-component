import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({theme}) => theme.colors.background}
    }
`

export default GlobalStyles;