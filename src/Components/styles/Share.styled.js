import styled from "styled-components";

export const StyledShare = styled.div`
    background-color: ${({theme}) => theme.colors.headings};
    width: 22rem;
    height: 4.5rem;
    position: absolute;
    bottom: 0;
    right:0rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span {
        color: ${({theme}) => theme.colors.span};
        font-size: .8rem;
        letter-spacing: .25rem;
        margin-right: .75rem;
    }

    div {
        margin-right: 5rem;

        a {
            margin: 0 .5rem;
        }
    }

    button {
        border: none;
        background: none;

        svg {
        background-color: ${({theme}) => theme.colors.p};
        border: 1px solid ${({theme}) => theme.colors.p};
        padding: .6rem;
        border-radius: 50%;

            &:hover {
                cursor: pointer;
                border-color: ${({theme}) => theme.colors.background};
            }
        }
    }
    

`