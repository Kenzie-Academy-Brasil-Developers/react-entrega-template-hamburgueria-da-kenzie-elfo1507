import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: transparent;
        border: none;
        font-family: 'Inter', sans-serif;
        list-style: none;
    }

    :root {
        --mainColor: #27AE60;
        --mainColorLight: #93D7AF;
        --secColor: #EB5757;

        --grey1: #333333;
        --grey2: #828282;
        --grey3: #E0E0E0;
        --grey4: #F5F5F5;


        --heading1: 26px;
        --heading2: 22px;
        --heading3: 18px;
        --heading4: 14px;
    }

`;

export default Global;
