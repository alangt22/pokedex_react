import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }
    @font-face {
    font-family: 'Pokemon Solid';
    src: url('https://fonts.cdnfonts.com/css/pokemon-solid') format('truetype');
    }

    body {
        font-family: 'Pokemon Solid', Sans-Serif;
        background-color: #f2f2f2;
    }
`;

export default Global;

