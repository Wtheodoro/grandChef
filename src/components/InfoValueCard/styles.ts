import styled from 'styled-components';

interface ContainerProps {
    contrast?: boolean
}
export const Container = styled.div<ContainerProps>`
    width: 48%;
    height: 10rem;
    border-radius: 5px;
    margin: 1rem 0;

    color: ${props => props.contrast === true ? '#FFF' :props.theme.color.font};
    background-color: ${props => props.contrast === true 
    ? props.theme.color.secondary
    : '#FFF'};
    box-shadow: 3px 5px 3px ${props => props.contrast === true 
    ? props.theme.color.secondaryShadow 
    : props.theme.color.primaryShadow };

    display: flex;
    justify-content: flex-start;
    align-items: center;

    > svg {
        font-size: 6rem;
        margin-left: 3rem;
    }

    > div {
        margin-left: 3rem;
    }

    > div h3 {
        font-size: 1.2rem;
    }
`;
