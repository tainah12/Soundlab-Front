import React from "react"
import { Title, HomeBackImage, Container, Box } from "./styled"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { goToSignup, goToLogin } from "../../routes/coordinator"

const HomePage = () => {
    const history = useHistory()

    return (
        <Container>
            <HomeBackImage>
                <Box>
                    <Title>Soundlab</Title>
                    <Button
                        onClick={() => goToSignup(history)}
                        style={{ margin: "10px 0", width: "150px", borderRadius: "50px" }}
                        variant="contained"
                        color="secondary">
                        Cadastro
                     </Button>
                    <Button
                        onClick={() => goToLogin(history)}
                        style={{ margin: "10px 0", width: "150px", borderRadius: "50px" }}
                        variant="contained"
                        color="primary">
                        Login
                    </Button>
                </Box>
            </HomeBackImage>
        </Container>
    )
}

export default HomePage