import styled from 'styled-components'

export const TableContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    padding: 0 1.5rem;
    margin: 4rem auto 0;
`

export const TableStyles = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    th {
        text-align: start;
        padding: 1.25rem 2rem;
        background-color: ${props => props.theme['gray-600']};

        &:first-child {
            border-top-left-radius: 5px;
        }

        &:last-child {
            border-top-right-radius: 5px;
        }
    }

    td {
        padding: 1.25rem 2rem;
        background-color: ${props => props.theme['gray-700']};
    }
`

type PriceHighlightProps = {
    variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
`
