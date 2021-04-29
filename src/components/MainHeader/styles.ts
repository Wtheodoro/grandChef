import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    padding: 0 3rem;
    color: ${props => props.theme.color.font};
    background-color: ${props => props.theme.color.primary};
    box-shadow: 1px 3px 1px ${props => props.theme.color.primaryShadow };

    display: flex;
    align-items: center;

    > h1 {
        font-size: 2.6rem;
        margin-left: 3rem;
    }

    > svg {
        font-size: 4rem;
    }

`;
