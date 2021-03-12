import styled from "styled-components"
import { neutralColor, primaryColor, primaryColorShadow,secondaryColor, tertiaryColor } from "../../constants/colors"

export const Container = styled.div`
    background-color: ${neutralColor};
    min-height:100vh;
    height: 100%; 
    display: flex;
    justify-content: center;
    /* align-items: center;    */
`

export const Box = styled.div`
    background-color: ${primaryColor};
    height: 80%;    
    width: 80%;  
    padding: 30px 15px;
    border-radius: 10px;
    display: flex;
    margin-top: 200px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Itens = styled.div`
    background-color: ${neutralColor};
    color: ${tertiaryColor};
    &:hover {
    background: ${tertiaryColor};
    color: ${neutralColor};
    }
    height: 40px;    
    min-width: 80%;  
    border-radius: 80px;
    display: flex;
    margin: 10px;
    padding-left: 40px;    
    display: flex;
    align-items: center;   
    box-shadow: 5px 5px 5px ${primaryColorShadow};
`

export const Buttons = styled.div`
    background-color: ${neutralColor};
    color: ${tertiaryColor};

    &:hover {
    background: ${tertiaryColor};
    color: ${neutralColor};
    }
    height: 40px;    
    width: 100px;
    border-radius: 100px;
    display: flex;
    margin: 10px;
    display: flex;
    align-items: center;   
    flex-direction: row;
        
    box-shadow: 5px 5px 5px ${primaryColorShadow};
`

export const Title = styled.h2`
    font-family: 'Comfortaa', cursive;
    margin-bottom: 30px;
    color: ${neutralColor};
    display: flex;
    align-items: center;   
`


export const MusicsBox = styled.h2`
    margin-bottom: 30px;
    color: ${neutralColor};
    display: flex;
    align-items: center;   
`