import { Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const LandingPage = () => {
    return (
        <>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"

                sx={{
                    // overflow: auto,
                    scrollSnapType: 'y mandatory' // TODO: no funciona?' o es automatico en material? el overflow no funciona y parece ser necesario...
                }}
            >
                <Grid item

                    sx={{
                        minHeight: '100vh',
                        width: '100%',
                        backgroundColor: 'primary.main',
                        padding: 4,
                        scrollSnapAlign: 'center',
                        alignItems: "center"

                    }}>
                    <Typography variant="h1" textAlign='center'
                    >Pokecell</Typography>
                </Grid>
                <Grid item
                    sx={{
                        minHeight: '100vh',
                        width: '100%',
                        padding: 4,
                        scrollSnapAlign: 'center'
                    }}>

                </Grid>
                <Grid item
                    sx={{
                        minHeight: '100vh',
                        width: '100%',
                        backgroundColor: 'primary.main',
                        padding: 4,
                        scrollSnapAlign: 'center'
                    }}>

                </Grid>
            </Grid>
        </>
    )
}
