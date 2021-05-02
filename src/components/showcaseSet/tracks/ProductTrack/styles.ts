import styled from 'styled-components';

export const Container = styled.div`
    color: ${props => props.theme.color.font};
    font-size: 1.4rem;
    margin-bottom: 2rem;
    transition: all ease .3s;

    &:hover {
        opacity: .7;
        transform: translateX(0.6rem)
    }

    @media(max-width: 1080px) {
        margin-bottom: 1rem;
    }
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-color: ${props => props.theme.color.borderColor};
    border-radius: 5px 5px 0 0;
`

export const LeftSide = styled.div`
    display: flex;

    .detail {
        width: 5px;
        background-color: ${props => props.theme.color.secondary};
    }

    > img {
        width:  10rem;

        @media(max-width: 1080px) {
            width: 8rem;
        }
    }

    .NameAmount {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .NameAmount .product_name {
        font-size: 2rem;
        color: ${props => props.theme.title === 'light' 
        ? '#000' 
        : props.theme.color.font
        };
        font-weight: 600;

        @media(max-width: 1080px) {
            font-size: 1.8rem;
        }

        @media(max-width: 720px) {
            font-size: 1.6rem;
        }
    }
`

export const RightSide = styled.div`
    margin-right: 2rem;
    span {
        color: green;
    }

    @media(max-width: 1080px) {
        margin-right: 1rem;
    }

    @media(max-width: 720px) {
        margin-right: .8rem;
    }
`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-top: none;
    border-color: ${props => props.theme.color.borderColor};
    border-radius: 0 0px 5px 5px;

    p {
        margin: .8rem;
    }

    span {
        color: ${props => props.theme.color.secondary};
    }
`

