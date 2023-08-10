import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    padding: 0 1.5rem;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;
`

type SummaryStylesVariant = {
    variant?: 'green'
}

export const SummaryStyles = styled.div<SummaryStylesVariant>`
    background-color: ${props => props.theme['gray-600']};
    padding: 1.5rem;
    border-radius: 6px;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    footer {
        font-size: 2rem;
        font-weight: bold;
    }

    ${props => props.variant === 'green' && css`
        background-color: ${props => props.theme['green-700']};
    `}
`
