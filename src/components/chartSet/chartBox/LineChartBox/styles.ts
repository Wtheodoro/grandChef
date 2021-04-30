import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.color.primary};
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 3px 5px 3px ${props => props.theme.color.primaryShadow};
`;

export const Title = styled.h2`
    color: ${props => props.theme.color.font};
    margin-bottom: 1rem;
`
export const ChartContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`