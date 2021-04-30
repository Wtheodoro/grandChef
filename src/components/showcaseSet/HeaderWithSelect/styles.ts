import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    > h2 {
        font-size: 2.2rem;
        color: ${props => props.theme.color.font};
    }
`;
