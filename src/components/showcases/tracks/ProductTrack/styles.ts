import styled from 'styled-components';

export const Container = styled.div`
    color: ${props => props.theme.color.font};
    font-size: 1.4rem;
    margin-bottom: 2rem;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-color: ${props => props.theme.color.font};
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
    }

    .NameAmount {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .NameAmount .product_name {
        font-size: 2rem;
        color: #000;
    }
`

export const RightSide = styled.div`
    margin-right: 2rem;
    span {
        color: green;
    }

`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-top: none;
    border-color: ${props => props.theme.color.font};
    border-radius: 0 0px 5px 5px;

    p {
        margin: .8rem;
    }

    span {
        color: ${props => props.theme.color.secondary};
    }
`

