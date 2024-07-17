import styled from "styled-components";

export const Poke = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
    grid-gap: 10px; 
    align-items: center;
    justify-content: center;
    gap: 141px;
    margin: 50px 25px;
 @media screen and (max-width: 750px) {
       
        grid-template-columns: repeat(2, minmax(100px, 1fr)); 
        gap: 100px;
        margin-top: 40px;
        margin-right: 80px;
            
    }

   .card {
        margin-left: 40px;
        width: 150px;
        height: 150px;
        margin-top: 4px;
        margin-bottom: -50px;
        align-items: center;
        justify-content: center;
        display: grid;
        border-radius: 180px;
        box-shadow: 0 0 25px rgba(0, 0, 0, 1);
        gap: 20px;
        cursor: pointer;
        background: linear-gradient(to top, rgba(0, 255, 255,0.1), rgba(0, 0, 255,1)); 
       
        &:hover{
            width: 153px;
            height: 153px;
            background: linear-gradient(to top, rgba(255, 164, 164), rgba(255, 0, 0));
        }
        @media screen and (max-width: 750px) {
            width: 100px;
            height: 100px;
        }


    }

        
        img{
            width: 250px;
            height: 250px;
            position: relative;
            z-index: 9999;
            margin-top: -10px;
            @media screen and (max-width: 750px) {
            width: 200px;
            height: 200px;
            margin-top:-30px;
        }
           
            

        }

    

    
    
    @media screen and (max-width:750px){
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 2fr));
    }
    button {
        background-color: #ffbd2f;
        cursor: pointer;
        width: 250px;
        height: 50px;
        border-radius: 50px;
        border: none; 
        font-family: Pokemon solid;
        font-size: 19px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 1); 
        @media screen and (max-width:750px){
            width: 150px;
        }
        
        &:hover {
            background-color: #c98900;
            margin-bottom: 10px;
        }
    }
   


`;

export const Input = styled.input`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 610px;
    background-color: #ffbd2f;
    width: 300px;
    height: 50px;
    border-radius: 50px;
    border: none; 
    font-family: Helvetica solid;
    font-weight: bold;
    font-size: 19px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1); 
    @media screen and (max-width:750px){
           margin-left:60px;
        }
`;


export const Details = styled.div`
  width: 500px;
  height: 650px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to bottom, #f3ff4a, #0000ff); 
  padding: 20px;
  border-radius:10px;
  border:5px solid #000000;
  z-index: 9999; 
  
  @media screen and (max-width:750px){
            max-width: 320px;
            max-height: 570px;
            position: fixed;
        }
    p{
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        margin-bottom: 20px;
        -webkit-text-stroke: 2px #070707;
        color: #f3ff4a;
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 1px;
        @media screen and (max-width:750px){
            margin-left: 8px;
            font-size: 28px;
            letter-spacing: 1px; 
            gap: 1px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }


    img{
        width: 280px;
        margin-left: 130px;
        @media screen and (max-width:750px){
            width: 150px;
            margin-left: 80px;
        }
    }
`;

export const DetailsTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
-webkit-text-stroke: 2px #005bbf;
color: yellow;
font-size: 28px;

`;

export const DetailsButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ffbd2f;
    width: 130px;
    height: 50px;
    max-width: calc(100% - 40px); 
    border-radius: 50px;
    border: none;
    font-family: Helvetica solid;
    font-weight: bold;
    font-size: 19px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    z-index: 9999; 

    &:hover {
        background-color: #c98900;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 750px) {
        width: 150px;
        bottom: 10px;
        right: 10px;
    }
`;
