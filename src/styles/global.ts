import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 1px ${props => props.theme['purple-500']};
    }

    body {
        background-color: ${props => props.theme['gray-800']};
        color: ${props => props.theme['gray-100']};
    }

    body, textarea, input, button {
        font: 400 1rem 'Montserrat', sans-serif
    }
`
