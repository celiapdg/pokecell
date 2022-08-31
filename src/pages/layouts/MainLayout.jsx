import { Box, CssBaseline, Grid, Paper } from "@mui/material"
import { Navbar } from "../components/Navbar"

const styles = {
    backgroundColor: '#C7ECFF',
    // backgroundImage: 'url(src/assets/pattern.jpg)',
    // backgroundSize: '30%'
};

export const MainLayout = ({ children, sidebar }) => {

    let size = 12
    if (!!sidebar) {
        size = 10
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                <CssBaseline />
                <Navbar />
                <Paper style={styles} elevation={0} square
                    sx={{ minHeight: '100vh', minWidth: '100vw', zIndex: 0 }}>
                    <Grid container pt={10}>
                        {!!sidebar &&
                            <Grid item xs={2}>
                                {sidebar}
                            </Grid>
                        }
                        <Grid item xs={size}>
                            <Grid container
                                alignItems="center"
                                spacing={1}
                                maxWidth={{ xs: '100%', md: '90%', lg: '80%' }}
                                sx={{ margin: '0 auto' }}>
                                {children}
                            </Grid>
                        </Grid>
                    </Grid>

                </Paper>
            </Box>

        </>
    )
}
