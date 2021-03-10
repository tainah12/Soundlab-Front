import React from "react"
import { FormContainer, Wrapper, Container, Box, Register } from "./styled"
import { InputLabel, IconButton, InputAdornment, OutlinedInput, Button, FormControl, TextField } from '@material-ui/core'
// import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { goToSignup, goToLogin, goToFeed } from "../../routes/coordinator"
import SignupForm from "./SignupForm"

const SignupPage = () => {
    const history = useHistory()

    return (
        <Container>
            <Wrapper>
                <Register>Cadastro</Register>
                <SignupForm />
            </Wrapper>
        </Container >
    )
}

export default SignupPage