import styled from "styled-components";

export const StyledShare = styled.div`
    background-color: ${({theme}) => theme.colors.headings};
    width: 22rem;
    height: 4.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    display: flex;
    align-items: center;
    
    .share {
        color: ${({theme}) => theme.colors.span};
        font-size: .85rem;
        letter-spacing: .35rem;
        margin-left: 2rem;
        margin-right: 1rem;
    }

    .socials-list {
        width: 8rem;
        margin-right: 2.5rem;

    .social {
           margin: 0 .6rem;
        }
    }

    #share-toggle {
        border: none;
        background: none;
        padding: 0;
        

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

    @media(min-width: 1440px) {
        width: 15.5rem;
        height: 3rem;
        padding-top: .2rem;
        bottom: 6.25rem;
        right: -4.25rem;
        border-top-left-radius: .75rem;
        border-top-right-radius: .75rem;
        border-bottom-left-radius: .75rem;
        border-bottom-right-radius: .75rem;
        justify-content: space-evenly;

        &::after {
            content: "";
            background-color: ${({theme}) => theme.colors.headings};
            height: 1rem;
            width: 1rem;
            position: absolute;
            top: 2.7rem;
            transform: rotate(45deg);
        }

        .share {
            font-size: .75rem;
            padding-bottom: .25rem;
            margin-right: .5rem;
            margin-left: 4rem;
        }

        .socials-list {
            display: flex;
            align-items: center;
        }

        #share-toggle {
            display: none;
        }
        
    }
    

`