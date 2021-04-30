import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid;
    border-color: ${props => props.theme.color.borderColor};

    transition: all ease .3s;

    &:hover {
        opacity: .7;
        transform: translateX(0.6rem)
    }

    > p {
        font-size: 1.8rem;
        color: ${props => props.theme.color.font};
    }

    .service_name {
        font-weight: 600;
        color: ${props => props.theme.title === 'light' 
        ? '#000' 
        : props.theme.color.font
        };
    }
`;  
