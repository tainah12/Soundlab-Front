import { Button } from "@material-ui/core"
import React from "react"
import { Title, HomeBackImage, Container } from "./styled"


const HomePage = () => {
    return (     
        <Container>
        <HomeBackImage>
            <Title>Soundlab</Title>
            <Button variant="contained" color="primary">
                Cadastro
            </Button>
            <Button variant="contained" color="secondary">
                Cadastro
            </Button>
            
        </HomeBackImage>
        </Container>   
    )
}

export default HomePage