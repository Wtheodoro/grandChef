import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.color.primary};
    width: 48%;
    border: 1px solid;
    border-color: ${props => props.theme.color.primaryShadow};
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        padding: 0 1rem;
        color: ${props => props.theme.color.font};
    }

    > div p {
        font-size: 1.2rem;
    }

    > div strong {
        font-size: 1.8rem;
    }

    svg {
        font-size: 3rem;
        margin-right: 1rem;
        color: ${props => props.theme.color.font};
    }
`;
