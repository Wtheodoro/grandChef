import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.color.primary};
    width: 48%;
    height: 5rem;
    font-size: 5rem;
    border-radius: 5px;

    > div svg {
        color: ${props => props.theme.color.font};
        font-size: 3rem;
    }

`