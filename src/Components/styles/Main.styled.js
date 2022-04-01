import styled from "styled-components";

export const StyledMain = styled.main`
    padding: 1rem 2rem;
    position: relative;

    @media(min-width: 1440px) {
        width: 50%;
    }


    h1 {
        font-size: 1.15rem;
        font-weight: 700;
        color: ${({theme}) => theme.colors.headings};
    }

    p {
        font-size: .82rem;
        line-height: 1.25rem;
        letter-spacing: .7px;
        color: ${({theme}) => theme.colors.p};

        @media(min-width: 1440px) {
        font-size: .7rem;
        }
    }

    
    
`