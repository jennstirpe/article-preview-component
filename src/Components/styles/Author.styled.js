import styled from "styled-components";

export const StyledAuthor = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;

    @media(min-width: 1440px) {
        margin-top: 1.25rem;
    }

    .author-img {
        height: 3rem;
        border-radius: 50%;
    }

    .author-details {
        margin: 0 auto 0 1rem;

        .author-name {
        font-size: .85rem;
        margin: 0;
        color: ${({theme}) => theme.colors.headings};
        }

        .date {
            font-size: .82rem;
           color: ${({theme}) => theme.colors.span};
        }
    }


    #toggle-share-options {
        border: none;
        background: none;

        #share-options-closed {
            margin-top: .45rem;
            
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

        #share-options-opened {

            svg {
                background-color: ${({theme}) => theme.colors.headings};
                border: 1px solid ${({theme}) => theme.colors.headings};
                padding: .6rem;
                border-radius: 50%;

                &:hover {
                    cursor: pointer;
                    background-color: hsl(214, 17%, 25%);
                }
             }
        }        
    }

    
`
