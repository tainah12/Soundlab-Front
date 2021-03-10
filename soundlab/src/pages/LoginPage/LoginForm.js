import React from "react"
//----------- estilização
import { FormContainer, StyledTextField } from "./styled"
import { Button, TextField  } from '@material-ui/core'
//----------- anexos com logicas
import useForm from "../../hooks/useForm"
import { goToFeed } from "../../routes/coordinator"
import { useHistory } from "react-router"
import { login } from "../../services/user"

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ input: "", password: "" })

    const history = useHistory()

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        login(form, history)
        clear();
    }

    return (
        <FormContainer>

            <form onSubmit={onSubmitForm}>

                <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="E-mail"
                    required
                    color="secondary"
                    type="email"
                    //---------- executa o estado
                    name="input"
                    value={form.input}
                    onChange={onChange}
                />


                <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="password"
                    style={{ margin: '15px 0px'}}
                    required
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

export default LoginForm