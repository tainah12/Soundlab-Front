import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import { Container, Box, Itens, Title, MusicsBox, Buttons } from "./styled"

const FeedPage = () => {
    useProtectedPage()

    return (
        <Container>
            <Box>
                <Title>
                    Suas músicas:
                </Title>
                <MusicsBox>
                    <Itens>
                        Music
                    </Itens>
                    <Buttons>
                        + 
                    </Buttons>
                </MusicsBox>
            </Box>
        </Container>
    )
}

export default FeedPage