import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: ${props => props.theme['gray-800']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;

        input {
            padding: 1rem;
            border: none;
            background-color: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            border-radius: 6px;
            -webkit-appearance: none;
            -moz-appearance: textfield;
        }
    }

    button[type= 'submit'] {
        width: 100%;
        height: 58px;
        padding: 1rem 2rem;
        border: none;
        background-color: ${props => props.theme['purple-500']};
        border-radius: 6px;
        margin-top: 1.5rem;
        color: ${props => props.theme.white};
        cursor: pointer;

        &:disabled {
            background-color: ${props => props.theme['gray-600']};
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background-color: ${props => props.theme['purple-700']};
            transition: background-color 0.3s;
        }
    }
`

export const Close = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: none;
    background: transparent;
    color: ${props => props.theme['gray-500']};
    line-height: 0;
    cursor: pointer;
`

export const TypeTransaction = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`

type TypeButtonTransaction = {
    variable: 'income' | 'outcome'
}

export const ButtonTypeTransaction = styled(RadioGroup.Item) <TypeButtonTransaction>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    gap: 0.5rem;
    cursor: pointer;

    background-color: ${props => props.theme['gray-700']};
    color: ${props => props.theme['gray-300']};

    border: none;
    border-radius: 6px;

    svg {
        color: ${props => props.variable === 'income' ? props.theme['green-700'] : props.theme['red-500']}
    }

    &[data-state = 'checked'] {
        background-color:  ${props => props.variable === 'income' ? props.theme['green-700'] : props.theme['red-500']};

        svg {
            color: ${props => props.theme['gray-300']}
        }
    }

    &[data-state = 'unchecked']:hover {
        background-color:  ${props => props.theme['gray-600']};
        transition: background-color 0.3s;
    }
`
