export const goToHome = (history) => {
    history.pushState("/home")
}

export const goToSignup = (history) => {
    history.pushState("/cadastro")
}

export const goToLogin = (history) => {
    history.pushState("/login")
}

export const goToFeed = (history) => {
    history.pushState("/")
}

export const goToPlaylist = (history) => {
    history.pushState("/playlist")
}