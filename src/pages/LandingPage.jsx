import { Fab, Grid, Typography } from "@mui/material"
import { useRef } from "react";
import { ContentCard } from "./components"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const styles = {
    backgroundColor: '#FFFDE3',
};


export const LandingPage = () => {

    const contentSection = useRef();

    // https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/
    const scrollDown = () => {
        window.scrollTo({
            top: contentSection.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={styles}
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
                        background: 'linear-gradient(to right bottom, #e57373, #f44336, #d32f2f)',
                        padding: 3,
                        scrollsnapalign: 'center',
                    }}
                >
                    <Typography variant="h1"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                        }}>POKECELL</Typography>
                    <Fab size="small"
                        sx={{
                            position: 'absolute',
                            bottom: 16
                        }}
                        onClick={scrollDown}>
                        <KeyboardDoubleArrowDownIcon />
                        {/* <NavigationIcon sx={{ mr: 1 }} /> */}
                    </Fab>
                </Grid>
                <Grid container
                    direction={{ xs: 'column', md: 'row' }}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        minHeight: '70vh',
                        width: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        scrollsnapalign: 'center'
                    }}
                    ref={contentSection}>

                    <Grid item p={2} sm={12} md={4}>
                        <ContentCard title='POKEMON' variant='h4'
                            route='/pokemon' img='src/assets/pokemons.jpg' />
                    </Grid>
                    <Grid item p={2} sm={12} md={4}>
                        <ContentCard title='TIPOS' variant='h4'
                            route='/types' img='src/assets/pokemontypes.jpeg' />
                    </Grid>
                    <Grid item p={2} sm={12} md={4}>
                        <ContentCard title='HABILIDADES' variant='h4'
                            route='/skills' img='src/assets/pokemonbattle2.webp' />
                    </Grid>
                </Grid>
                <Grid item
                    sx={{
                        minHeight: '30vh',
                        width: '100%',
                        background: 'linear-gradient(to right bottom, #d32f2f, #f44336, #e57373)',
                        padding: 4,
                        scrollsnapalign: 'center'
                    }}>

                </Grid>
            </Grid>
        </>
    )
}
