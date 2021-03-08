import styled from "styled-components"
import homeBackImage from "../../assets/homeBackImage.png"

export const Container = styled.h1`
display:flex;
justify-content: center;
align-items: center;
margin: 0;
`

export const Title = styled.h1`
font-family: 'Comfortaa', cursive;
color: gray;
justify-content: center;
align-items: center;
color: white;

`

export const HomeBackImage = styled.div`
width: 100vw;
height:100vh;
background-image: url(${homeBackImage});
`;