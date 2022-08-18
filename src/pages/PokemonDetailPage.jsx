import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { useFetch } from "../hooks/useFetch";
import { TypeTag } from "./components";

const baseURL = 'https://pokeapi.co/api/v2'


export const PokemonDetailPage = () => {

    const { pokemonName } = useParams();
    const pokemonURL = `${baseURL}/pokemon/${pokemonName}`;
    const speciesURL = `${baseURL}/pokemon-species/${pokemonName}`;
    const { loading: loadingP, error: errorP, res: resP } = useFetch(pokemonURL);
    const { loading: loadingS, error: errorS, res: resS } = useFetch(speciesURL);
    const pokemon = { name: pokemonName }

    if (!loadingP) {
        pokemon.img = resP.sprites.other["official-artwork"].front_default;
        pokemon.imgHome = resP.sprites.other.home.front_default;
        pokemon.imgHomeShiny = resP.sprites.other.home.front_shiny;
        pokemon.types = resP.types.map(type => type.type);
    }


    return (
        <MainLayout>
            {
                (loadingP && !errorP)
                    ?
                    'Loading...' // TODO: componente de Loading
                    : (!!errorP)
                        ? (
                            errorP.response.status // TODO: helper que gestione errores
                        )
                        : (
                            <Grid container
                                alignItems="center"
                                justifyContent="center"
                                p={2} m={2}>
                                <Grid item xs={12} sm={10} md={5} lg={4} xl={3}
                                    textAlign='center'
                                    p={2}
                                    sx={{
                                        border: 'red solid 2px'
                                    }}>
                                    <Typography
                                        gutterBottom
                                        variant='h3'
                                        component="div"
                                        textAlign='center'
                                        sx={{
                                            width: '100%',
                                            textTransform: 'capitalize',
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                        }}>
                                        {pokemon.name}
                                    </Typography>
                                    <Box
                                        component="img"
                                        alt={pokemon.name}
                                        src={pokemon.img}
                                        width={{ xs: '90%', md: '100%' }}
                                    />
                                    {pokemon.types.map((type) => (
                                        <TypeTag
                                            variant='h6'
                                            padding={1}
                                            key={`${pokemon.name}-${type.name}`}
                                            name={type.name}
                                        />
                                    ))
                                    }
                                </Grid>
                                <Grid item xs={12} md={7} lg={8} xl={9}
                                    textAlign='center'
                                    p={2}>
                                    awa
                                </Grid>
                            </Grid>
                        )
            }
        </MainLayout>
    )
}
