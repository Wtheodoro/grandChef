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
`

export const Description = styled.p`

`

export const Value = styled.span`

`
