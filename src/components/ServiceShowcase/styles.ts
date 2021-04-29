import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 30rem;
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 5px;
    background-color: ${props => props.theme.color.primary};
    box-shadow: 3px 5px 3px ${props => props.theme.color.primaryShadow };

`;
