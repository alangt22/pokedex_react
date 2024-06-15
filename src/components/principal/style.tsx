import styled from "styled-components";

export const Img = styled.img`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
`;


export const Btn = styled.div`
    display: grid;
    grid-template-columns:(auto-fill, minmax(200px, 1fr)); 
    grid-gap: 20px; 
    align-items: center;
    justify-content: center;

    button {
        cursor: pointer;
        background-color: #ffbd2f;
        width: 350px;
        height: 50px;
        border-radius: 50px;
        border: none; 
        font-family: Pokemon solid;
        font-size: 19px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 1); 
        &:hover {
            background-color: #c98900;
            margin-bottom: 10px;
        }
    }
`;