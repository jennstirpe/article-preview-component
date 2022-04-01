import styled from "styled-components";

export const StyledAuthor = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;

    @media(min-width: 1440px) {
        margin-top: 1.25rem;
    }

    img {
        height: 3rem;
        border-radius: 50%;
    }

    div {
        margin: 0 auto 0 1rem;
    }

    h2 {
        font-size: .85rem;
        margin: 0;
        color: ${({theme}) => theme.colors.headings};
    }

    span {
        font-size: .82rem;
        color: ${({theme}) => theme.colors.span};
    }

    button {
        border: none;
        background: none;

        svg {
        background-color: ${({theme}) => theme.colors.background};
        border: 1px solid ${({theme}) => theme.colors.background};
        padding: .6rem;
        border-radius: 50%;

            &:hover {
                cursor: pointer;
                border-color: ${({theme}) => theme.colors.span};
            }
        }
    }

    
`
