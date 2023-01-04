import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* ROOT */
    :root{
        --main-font-family: "Yanone Kaffeesatz", "Arial", sans-serif;
        --main-font-weight: 400;
    }

    @font-face {
    font-family: "Yanone Kaffeesatz";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: 
        url("../assets/fonts/yanone-kaffeesatz-v24-latin-regular.woff2") format('woff2'), 
        url("../assets/fonts/yanone-kaffeesatz-v24-latin-regular.woff") format('woff');
    }

    @font-face {
    font-family: "Yanone Kaffeesatz";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: 
        url("../assets/fonts/yanone-kaffeesatz-v24-latin-700.woff2") format('woff2'), 
        url("../assets/fonts/yanone-kaffeesatz-v24-latin-700.woff") format('woff');
    }

    *{
        box-sizing: border-box;
    }

    html{
        height: 100%;
    }

    img{
        display: block;
        height: auto;
    }

    body{
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        background:  linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.9) 32.81%, #000000 100%);
        background-repeat: no-repeat;
        background-position: center;
        /* background-size: contain; */
        background-attachment: fixed;
    }
`;

export const Container = styled.div`
    max-width: 1826px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`