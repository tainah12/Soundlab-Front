import React from "react"
import { FormContainer, Wrapper, Container, Box, Login } from "./styled"
import { InputLabel, IconButton, InputAdornment, OutlinedInput, Button, FormControl, TextField } from '@material-ui/core'
// import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { goToSignup, goToLogin } from "../../routes/coordinator"

const LoginPage = () => {
    return (
        <Container>
            <Wrapper>
                <Login>Login</Login>
                <FormContainer>
                    <TextField
                        variant="outlined"
                        size="small"
                        label="E-mail"
                        // value={form.email}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        // onChange={onChange}
                        required
                        style={{ margin: '8px 0' }}
                    />
                    <FormControl variant="outlined" required="true" style={{ margin: '8px 0' }}>
                        <InputLabel htmlFor="outlined-adornment-password" margin="dense">Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            margin="dense"
                            label="Senha "
                            // value={form.password}
                            // type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Senha"
                            // onChange={onChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        // onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button>Entrar</Button>
                </FormContainer>

                <Button style={{ margin: '8px 0' }}>Não possui cadastro? Clique aqui.</Button>

            </Wrapper>
        </Container>
    )
}

export default LoginPage