import { goToFeed, goToHome } from "../routes/coordinator"
import axios from "axios"
import {BASE_URL} from "../constants/urls"


export const login = (body, history) => {
    axios.post(`${BASE_URL}/user/login`, body)

        .then(response => {
            response.data.token &&
            localStorage.setItem("token", response.data.token)
            goToFeed(history)

        }).catch(error => {
            alert("Por favor, confirme seus dados!")
            console.log(error.message)
        })
}

export const signup = (body, history) => {
    axios.post(`${BASE_URL}/user/signup`, body)

        .then(response => {
            response.data.token &&
            localStorage.setItem("token", response.data.token)
            goToFeed(history)

        }).catch(error => {
            alert("Por favor, confirme seus dados!")
            console.log(error.message)
        })
}