import React from "react"
import { FormContainer, Wrapper, Container, Box, Register } from "./styled"
import { InputLabel, IconButton, InputAdornment, OutlinedInput, Button, FormControl, TextField } from '@material-ui/core'
// import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { goToSignup, goToLogin } from "../../routes/coordinator"

const SignupPage = () => {
    const history = useHistory()

    return (
        <Container>
            <Wrapper>
                <Register>Cadastro</Register>

                <FormContainer >
                    <TextField
                        variant="outlined"
                        size="small"
                        label="Nome"
                        // value={form.name}
                        type="text"
                        name="name"
                        placeholder="Nome"
                        // onChange={onChange}
                        required
                        style={{ margin: '8px 32px' }}
                        color="secondary"
                    />

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
                        style={{ margin: '8px 32px' }}
                    />

                    <TextField
                        variant="outlined"
                        size="small"
                        label="Nickname"
                        // value={form.cpf}
                        type="nickname"
                        name="nickname"
                        placeholder="Nickname"
                        // onChange={onChange}
                        required
                        style={{ margin: '8px 32px' }}
                    />

                    <FormControl
                        variant="outlined"
                        required="true"
                        margin="dense"
                        style={{ margin: '8px 32px' }}>

                        <InputLabel
                            htmlFor="outlined-adornment-password">
                            Senha
                            </InputLabel>

                        <OutlinedInput
                            margin="dense"
                            label="Senha"
                            // value={form.password}
                            // type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Senha"
                            // onChange={onChange}
                            endAdornment={
                                <InputAdornment
                                    position="end">
                                    <IconButton
                                        // onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
                                    </IconButton>
                                </InputAdornment>
                            }
                            
                        />
                    </FormControl>
                    <FormControl
                        variant="outlined"
                        required="true"
                        margin="dense"
                        style={{ margin: '8px 32px' }}>

                        <InputLabel
                            htmlFor="outlined-adornment-password"
                            margin="dense">
                            Repita a senha
                            </InputLabel>

                        <OutlinedInput
                            margin="dense"
                            label="Repita a senha"
                            // value={form.confirmPassword}
                            // type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Repita a senha"
                            // onChange={onChange}
                            endAdornment={
                                <InputAdornment
                                    position="end">
                                    <IconButton
                                        // onClick={handleClickShowConfirmPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {/* {showConfirmPassword ? <Visibility /> : <VisibilityOff />} */}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                    </FormControl>
                    <Button
                        style={{ margin: '32px 32px' }}
                        variant="contained"
                        color="text">
                        Cadastrar
                    </Button>
                </FormContainer>

            </Wrapper>
        </Container>
    )
}

export default SignupPage