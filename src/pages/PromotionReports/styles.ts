import styled, { keyframes } from 'styled-components';

const animateLeft = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50% {
        opacity: .5;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`

const animateRight = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50% {
        opacity: .5;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`

export const Container = styled.div`
    height: 100%;
    font-size: 2.2rem;

    background-color: ${props => props.theme.color.tertiary};
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
`

export const LeftSide = styled.div`
    height: 100%;
    width: 50%;
    margin: 3rem;
    animation: ${animateLeft} .8s ease;
`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const RightSide = styled.div`
    height: 100%;
    width: 35%;
    margin: 3rem;
    height: 100vh;
    animation: ${animateRight} .8s ease;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
