import React from "react"
//----------- estilização
import { FormContainer } from "./styled"
import { InputLabel, OutlinedInput, Button, FormControl, TextField } from '@material-ui/core'
//----------- anexos com logicas
import useForm from "../../hooks/useForm"

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
    }

    return (
        <div>
            <FormContainer onSubmit={onSubmitForm}>
                <TextField
                    variant="outlined"
                    size="small"
                    label="E-mail"
                    required
                    style={{ margin: '8px 32px' }}
                    color="secondary"
                    type="email"
                    //---------- executa o estado
                    name="email"
                    value={form.email}
                    onChange={onChange}
                />
                <FormControl
                    variant="outlined"
                    required
                    style={{ margin: '8px 32px' }}
                    color="secondary">

                    <InputLabel
                        margin="dense"
                        label="password">
                        Senha
                        </InputLabel>

                    <OutlinedInput
                        margin="dense"
                        label="Senha"
                        type="password"
                        //---------- executa o estado
                        name="password"
                        value={form.password}
                        onChange={onChange}
                    />

                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    color="text"
                    style={{ margin: '8px 32px' }}>
                    Entrar
                </Button>

            </FormContainer>

        </div>
    )
}

export default LoginForm