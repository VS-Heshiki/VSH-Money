import styled from 'styled-components'

export const SearchTransactionContainer = styled.form`
    width: 100%;
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        padding: 1rem;
        background-color: ${props => props.theme['gray-900']};
        border: none;
        border-radius: 5px;
        color: ${props => props.theme['gray-300']}
    }

    button {
        padding: 0.75rem 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;

        background-color: transparent;
        border-color: ${props => props.theme['purple-300']};
        color: ${props => props.theme['purple-300']};
        border-radius: 5px;
        cursor: pointer;

        &:disabled {
            color: ${props => props.theme['gray-600']};
            cursor: not-allowed;
            opacity: 0.6;
        }

        &:not(:disabled):hover {
            background-color: ${props => props.theme['purple-300']};
            color: ${props => props.theme['gray-300']};

            transition:
                background-color 0.3s,
                color 0.3s
        }
    }
`
