import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    :root{
        --primary-color: #063970;
        --primary-color2: 'color: rgba(6, 57, 112, .6)';
        --primary-color3: 'color: rgba(6, 57, 112, .4)';
        --color-green: #0b64c5;
        --color-grey: #aaa;
        --color-accent: #010e1b;
        --color-delete: #FF0000;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
    }
`;