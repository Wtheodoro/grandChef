import styled from 'styled-components';

export const Container = styled.div`
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 5px;
    height: 48rem;
    width: 100%;
    background-color: ${props => props.theme.color.primary};
    box-shadow: 3px 5px 3px ${props => props.theme.color.primaryShadow};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media(max-width: 1080px) {
        padding: 1rem;
        height: 39rem;
    }

    @media(max-width: 420px) {
        padding: .8rem;
        height: 29rem;
    }
`;

export const Title = styled.h2`
    color: ${props => props.theme.color.font};
    margin-bottom: 1rem;
`
export const ChartContainer = styled.div`
    width: min(100%, 80rem);
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 770px) {
        width: 88%;
    }
`