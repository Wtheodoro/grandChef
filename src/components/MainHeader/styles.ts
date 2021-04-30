import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    padding: 0 3rem;
    color: ${props => props.theme.color.font};
    background-color: ${props => props.theme.color.primary};
    box-shadow: 1px 3px 1px ${props => props.theme.title === 'light' 
    ? props.theme.color.primaryShadow
    : 'none'
    };

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;
        align-items: center;

        h1 {
            font-size: 2.6rem;
            margin-left: 3rem;
        };

        svg {
            font-size: 4rem;
        };
    }
`;
