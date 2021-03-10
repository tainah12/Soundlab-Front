import React from "react"
//----------- estilização
import { Button } from '@material-ui/core'
import { Wrapper, Container, Register, SignupButtonContainer } from "./styled"
//----------- anexos com logicas
import { useHistory } from "react-router-dom"
import { goToSignup } from "../../routes/coordinator"
import LoginForm from "./LoginForm"

const LoginPage = () => {
    const history = useHistory()

    return (
        <Container>
            <Wrapper>
                <Register>Login</Register>
                <LoginForm />
                <SignupButtonContainer>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ margin: '8px 32px 45px' }}
                        onClick={() => goToSignup(history)}>
                        Não possui cadastro? Clique aqui.
                    </Button>
                </SignupButtonContainer>

            </Wrapper>
        </Container>
    )
}

export default LoginPage