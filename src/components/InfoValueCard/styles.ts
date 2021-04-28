import styled from 'styled-components';

interface ContainerProps {
    contrast?: boolean
}
export const Container = styled.div<ContainerProps>`
    width: 48%;
    height: 10rem;
    border-radius: 5px;

    color: ${props => props.contrast === true ? '#FFF' :props.theme.color.font};
    background-color: ${props => props.contrast === true ? props.theme.color.secondary: '#FFF'};

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
