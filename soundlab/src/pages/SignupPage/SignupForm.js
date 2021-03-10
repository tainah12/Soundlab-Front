import React from "react"
import { FormContainer, Wrapper, Container, Box, Register } from "./styled"
import { InputLabel, IconButton, InputAdornment, OutlinedInput, Button, FormControl, TextField } from '@material-ui/core'
// import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { goToSignup, goToLogin, goToFeed } from "../../routes/coordinator"
import useForm from "../../hooks/useForm"

const SignupForm = () => {
    const [form, onChange, clear] = useForm({ name: "", email: "", nickname: "", password: "" })

    const onSubmitForm = () => {

    }

    const history = useHistory()

    return (
        <FormContainer>

            <form onSubmit={onSubmitForm}>

                <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="Nome"
                    required
                    color="secondary"
                    type="name"
                    //---------- executa o estado
                    name="name"
                    value={form.name}
                    onChange={onChange}
                />

                <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="E-mail"
                    required
                    style={{ margin: '15px 0px'}}
                    color="secondary"
                    type="email"
                    //---------- executa o estado
                    name="email"
                    value={form.email}
                    onChange={onChange}
                />

                <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="Apelido"
                    required
                    color="secondary"
                    type="nickname"
                    //---------- executa o estado
                    name="nickname"
                    value={form.nickname}
                    onChange={onChange}
                />

                <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="Senha"
                    required
                    style={{ margin: '15px 0px'}}
                    color="secondary"
                    type="password"
                    //---------- executa o estado
                    name="password"
                    value={form.password}
                    onChange={onChange}
                />

            <Button
                onChange={() => goToFeed(history)}
                fullWidth
                type="submit"
                variant="contained"
                color="text"
                >
                Entrar
            </Button>

            </form>

        </FormContainer>
    )
}

export default SignupForm