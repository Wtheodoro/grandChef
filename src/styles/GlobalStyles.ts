import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    html {
        font-size: 62.5%;
    }

    *, button, input {
        border: 0;
        outline: 0;
    }

    @media(max-width: 1080px) {
        html {
            font-size: 58.5%;
        }
    }

    @media(max-width: 770px) {
        html {
            font-size: 54.5%;
        }
    }

    @media(max-width: 420px) {
        html {
            font-size: 50%;
        }
    }
`

export default GlobalStyles
