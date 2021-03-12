import styled from "styled-components"
import homeBackImage from "../../assets/homeBackImage.png"
import {primaryColor, secondaryColor, tertiaryColor, neutralColor} from "../../constants/colors"
import {  TextField } from '@material-ui/core'

export const Container = styled.h1`
display:flex;
justify-content: center;
margin: 0;
padding: 0;
width: 100vw;
height:100vh;
background-image: url(${homeBackImage});

`
export const Box = styled.div`
width: 30vw;
height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
align-content: space-between;
align-self: center;
justify-content: center;
margin: 0 auto;
`;

export const SignupButtonContainer = styled.div`  
  display:flex;
  flex-direction: column;
  width: 90vw;
  max-width: 420px;
  border-radius: 2px;
`     

//-------------- FORMS


export const Wrapper = styled.div` 
  max-width: 420px;
  max-height: 500px;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${primaryColor};
`      
export const FormContainer = styled.div`  
  display:flex;
  flex-direction: column;
  width: 85%;
  max-width: 420px;
  border-radius: 2px;
`     

export const Register = styled.p` 
  width: 100vw;
  height: 42px;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
  letter-spacing: -0.39px;
  text-align: center;
  color: ${neutralColor};
  padding: 12px 32px;
`     
