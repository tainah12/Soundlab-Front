import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const PlaylistPage = () => {
    useProtectedPage()
    
    return (
        <div>
            PlaylistPage
        </div>
    )
}

export default PlaylistPage