import styled from 'styled-components';

export const Container = styled.div`
    height: 30rem;
    background-color: ${props => props.theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    border-radius: 5px;
    box-shadow: 3px 5px 3px ${props => props.theme.color.primaryShadow };
`;

export const ChartContainer = styled.div`
    width: 40%;
    display: flex;
    flex: 1;
    justify-content: center;
`

export const InfoContainer = styled.div`
    width: 60%;

    > h2 {
        color: ${props => props.theme.color.font};
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
`
