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
    : props.theme.color.primary};
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

    @media(max-width: 1080px) {
        height: 9rem;

        > svg, > div {
            margin-left: 2rem;
        }
    }

    @media(max-width: 720px) {
        height: 8rem;

        > svg, > div {
            margin-left: 1.8rem;
        }
    }

    @media(max-width: 420px) {
        height: 7rem;

        > svg, > div {
            margin-left: 1rem;
        }
    }

    @media(max-width: 360px) {
        width: 100%;
        justify-content: space-around;
    }
`;
