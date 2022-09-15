import { Box, CssBaseline, Grid, Paper } from "@mui/material"
import { Navbar } from "../components/Navbar"

const styles = {
    backgroundColor: '#ECEFF1',
    // backgroundImage: 'url(src/assets/pattern.jpg)',
    // backgroundSize: '30%'
};

export const MainLayout = ({ children, sidebar }) => {

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', }} >
                <CssBaseline />
                <Navbar />
                <Paper style={styles} elevation={0} square
                    sx={{ minHeight: '100vh', width: '100vw', zIndex: 0 }}>
                    <Grid container mt={{ xs: '75px', sm: '80px', md: '90px' }} >
                        <Grid item xs={12} >
                            <Grid container
                                alignItems="center"
                                width={{ xs: '100%', lg: '90%', xl: '80%' }}
                                maxWidth='1460px'
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
