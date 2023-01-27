import * as React from 'react'
import { CssBaseline, Box, Container } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Button from '@mui/material/Button'

export default function App() {
    return (
        <Box>
            <Container maxWidth="lg">
                <CssBaseline />
                <h1>MUI test site</h1>
                <h2>h2 title</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    libero distinctio modi repudiandae dignissimos quidem, harum
                    ipsa perspiciatis exercitationem dolore commodi debitis!
                    Nesciunt dolorem asperiores quo labore molestias incidunt
                    nam!
                </p>
                <Button variant="outlined">Hello World</Button>
            </Container>
        </Box>
    )
}
