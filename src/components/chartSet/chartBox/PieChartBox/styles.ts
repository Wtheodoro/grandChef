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

    @media(max-width: 930px) {
        flex-direction: column;
        height: 50rem;
    }

    @media(max-width: 770px) {
        flex-direction: row;
        height: 30rem;
    }
`;

export const ChartContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`

export const InfoContainer = styled.div`
    /* width: 60%; */

    > h2 {
        color: ${props => props.theme.color.font};
        font-size: 2.2rem;
        margin-bottom: 2rem;
        
        @media(max-width: 540px) {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
    }
`
