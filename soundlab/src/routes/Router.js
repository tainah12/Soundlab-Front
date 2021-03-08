import React from "react"
import HomePage from "../pages/HomePage/HomePage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import PlaylistPage from "../pages/PlaylistPage/PlaylistPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

import { BrowserRouter, Switch, Route } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home">
                    <HomePage/>
                </Route>
                <Route exact path="/cadastro">
                    <SignupPage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/">
                    <FeedPage/>
                </Route>
                <Route exact path="/playlist">
                    <PlaylistPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router







