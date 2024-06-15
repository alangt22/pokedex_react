import styled from "styled-components";

export const Title = styled.h1`
    -webkit-text-stroke: 2px #005bbf; 
    font-size: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 25px;
    font-family: Pokemon Solid;
    box-shadow: 0 0 80px rgba(0, 0, 0, 1);
    background-image: url('./assests/pokeTitle.jpeg');
    background-size: 21%; 
    background-repeat: no-repeat; 
    background-position: center; 
    background-position-x: right;
    background-color: white;
    letter-spacing: 5px;
    color: #ffbd2f;

    @media screen and (max-width:750px){
        background-image: none;
        height: 180px;
    }
    
`;