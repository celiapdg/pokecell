import { Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ContentCard } from "./components/ContentCard"

export const LandingPage = () => {
    return (
        <>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"

                sx={{
                    overflow: 'auto',
                    // scrollsnaptype: 'y mandatory' // FIXME: no funciona?' o es automatico en material? el overflow no funciona y parece ser necesario...
                }}
            >
                <Grid container
                    component='header'
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        minHeight: '100vh',
                        width: '100%',
                        backgroundColor: 'error.main',
                        padding: 3,
                        scrollsnapalign: 'center',

                    }}
                >
                    <Typography variant="h1" textAlign='center'>Pokecell</Typography>
                </Grid>
                <Grid container
                    direction={{ xs: 'column', md: 'row' }}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        minHeight: '100vh',
                        width: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        scrollsnapalign: 'center'
                    }}>

                    <Grid item p={2} sm={12} md={4}>
                        <ContentCard title='Pokemon' route='/pokemon' />
                    </Grid>
                    <Grid item p={2} sm={12} md={4}>
                        <ContentCard title='Tipos' route='/types' />
                    </Grid>
                    <Grid item p={2} sm={12} md={4}>
                        <ContentCard title='Habilidades' route='/skills' />
                    </Grid>
                </Grid>
                <Grid item
                    sx={{
                        minHeight: '100vh',
                        width: '100%',
                        backgroundColor: 'error.main',
                        padding: 4,
                        scrollsnapalign: 'center'
                    }}>

                </Grid>
            </Grid>
        </>
    )
}
