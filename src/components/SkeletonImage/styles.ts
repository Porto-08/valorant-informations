import styled from "styled-components";

export const Container = styled.div`
    display: grid;
`

export const ImageSkeleon = styled.img`
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 1;

    transition: opacity .4s ease;
`

export const Skeleton = styled.div`
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #fff 0px, #eee 50%, #fff 100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton .6s infinite linear;

    
    @keyframes skeleton {
        from {
            background-position: 0px;
        }

        to {
            background-position: -200%;
        }
    }
`
