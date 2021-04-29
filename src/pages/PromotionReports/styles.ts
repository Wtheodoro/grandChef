import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    font-size: 2.2rem;

    background-color: ${props => props.theme.color.tertiary};
`;

export const Content = styled.div`
    display: flex;
`

export const LeftSide = styled.div`
    height: 100%;
    width: 50%;
    margin: 3rem;
`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const RightSide = styled.div`
    height: 100%;
    width: 35%;

`
