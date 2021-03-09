import styled from "styled-components"
import homeBackImage from "../../assets/homeBackImage.png"

export const Container = styled.h1`
display:flex;
justify-content: center;
margin: 0;
padding: 0;
width: 100vw;
height:100vh;
`

export const HomeBackImage = styled.div`
width: 100vw;
height:100vh;
display: flex;
justify-content: flex-end;
align-content: space-between;
background-image: url(${homeBackImage});
`;

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

export const Title = styled.h1`
font-family: 'Comfortaa', cursive;
color: gray;
justify-content: center;
align-items: center;
color: white;
`