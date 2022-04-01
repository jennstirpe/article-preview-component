import styled from "styled-components";

export const StyledBanner = styled.div`
    height: 15rem;
    width: 22rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-image: url("../../../images/drawers.jpg");
    background-position: center;
    background-size: cover;


    @media(min-width: 1440px) {
        border-bottom-left-radius: 1rem;
        border-top-right-radius: 0;
        height: 17rem;
        width: 17rem;
    }
    

    
`