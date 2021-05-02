import styled from 'styled-components';

interface IDotProps {
    indexColor: string
}

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.5rem;
`;


export const Dot = styled.div<IDotProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 1.5rem;
    background-color: ${props => props.indexColor};

    @media(max-width: 540px) {
        width: 1rem;
        height: 1rem;
        margin-right: 1rem;
    }
`

export const Description = styled.p`
    color: ${props => props.theme.title === 'light' ? '#000' :props.theme.color.font};

    @media(max-width: 540px) {
        font-size: 1.5rem;
    }
`

export const Value = styled.span`
    color: ${props => props.theme.color.font};
`
