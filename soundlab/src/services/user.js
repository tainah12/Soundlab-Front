import { goToFeed, goToHome } from "../routes/coordinator"
import axios from "axios"
import {BASE_URL} from "../constants/urls"


export const login = (body, history) => {
    axios.post(`${BASE_URL}/user/login`, body)

        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToFeed(history)

        }).catch(error => {
            alert("Por favor, confirme seus dados!")
            console.log(error.message)
        })
}