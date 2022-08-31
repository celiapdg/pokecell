import { Box, Grid, Typography } from "@mui/material"

const styles = {
    backgroundColor: '#C7ECFF',
};


export const LandingPage = () => {

    return (
        <>
            <Grid container
                component='header'
                alignItems="end"
                justifyContent="end"
                overflow='hidden'
                sx={{
                    height: '100vh',
                    width: '100%',
                    background: 'rgba(0,74,173)',
                    padding: 3,
                    scrollsnapalign: 'center',
                }}
            >
                <Box sx={{
                    position: 'relative',
                    left: '-30vw', bottom: '-10vh',
                    borderRadius: '50%',
                    width: '65vw', height: '65vw',
                }}>

                    <Box sx={{
                        position: 'absolute',
                        borderRadius: '50%',
                        width: '100%', height: '100%',
                        background: 'white',
                        border: '2vw black solid'
                    }} />

                    <Box sx={{
                        position: 'absolute',
                        top: '50%', bottom: '50%',
                        width: '100%',
                        background: 'rgba(0,74,173)',
                        border: '1vw rgba(0,74,173) solid'
                    }} />

                    <Box sx={{
                        position: 'absolute',
                        top: '39%', left: '39%',
                        borderRadius: '50%',
                        width: '22%', height: '22%',
                        background: 'white',
                        border: '2vw rgba(0,74,173) solid'
                    }} />

                </Box>


                {/* <Typography variant="h1"
                    sx={{
                        mr: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'white',
                    }}>POKECELL</Typography> */}
            </Grid>
        </>
    )
}
