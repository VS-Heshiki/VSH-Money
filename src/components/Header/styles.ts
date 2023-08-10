import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7rem;
    height: 13.25rem;
`

export const HeaderStyles = styled.header`
    width: 100%;
    max-width: 1120px;
    padding: 0 1.5rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoStyles = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    img {
        height: 3.125rem;
        width: auto;
        border-radius: 6px;
    }

    span {
        font-size: 1.5rem;
    }
`

export const NewTransactionButtonStyles = styled.button`
    background-color: ${props => props.theme['purple-500']};
    color: ${props => props.theme.white};
    font-weight: bold;
    height: 50px;

    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 6px;

    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme['purple-700']};
        transition: background-color 0.3s;
    }
`
