import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { Link, useParams } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { useFetch } from "../../hooks/useFetch";
import { ContentCard } from "../components";
import { useMemo, useState } from "react";
import { getPokemon, getSpecies } from "../../helpers/getPokemonData";
import { LoadingMessage } from "../components";
import { habitatImage } from "../../helpers/habitatImageMapping";
import { TypeTag } from "../TypesPage/components";
import { AbilitiesTable, EvolutionChain, StatsTable } from "./components";
import { parseName } from "../../helpers/parseInfo";

const baseURL = 'https://pokeapi.co/api/v2'


export const PokemonDetailPage = () => {

    const [dataReady, setDataReady] = useState({ p: false, s: false });
    const { pokemonId } = useParams();
    const pokemonURL = `${baseURL}/pokemon/${pokemonId}`;
    const speciesURL = `${baseURL}/pokemon-species/${pokemonId}`;
    const { loading: loadingP, error: errorP, res: resP } = useFetch(pokemonURL);
    const { loading: loadingS, error: errorS, res: resS } = useFetch(speciesURL);


    const pokemon = useMemo(() => {
        if (!loadingP) {
            if (!!resP) {
                //console.log(resP)
                setDataReady({ ...dataReady, p: true });
                return getPokemon(resP);
            }
        }
    }, [resP]);

    const species = useMemo(() => {
        if (!loadingS) {
            if (!!resS) {
                // console.log(resS)
                setDataReady({ ...dataReady, s: true });
                return getSpecies(resS);
            }
        }
    }, [resS]);



    return (
        <MainLayout>

            {(!!errorP)
                ? (
                    errorP.response.status // TODO: helper que gestione errores
                )
                : (
                    <Grid container
                        justifyContent="center"
                        mt={2} spacing={2}>
                        <Grid container
                            justifyContent="center"
                            m={0} spacing={2}>
                            <Box sx={{
                                width: '100%',
                                textAlign: 'center',
                            }}>
                                <Typography
                                    variant='h4'
                                    component="span"
                                    textAlign='center'
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontWeight: 700,
                                        color: '#8d8c8a'
                                    }}>
                                    {dataReady.p && `#${pokemon.id} `}
                                </Typography>
                                <Typography
                                    variant='h3'
                                    component="span"
                                    textAlign='center'
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontWeight: 700,
                                    }}>
                                    {dataReady.p && `${parseName(pokemon.name)}`}
                                </Typography>
                            </Box>
                            <Grid item xs={12} sm={10} md={5} lg={4} xl={2.7}
                                textAlign='center'
                                p={2}>

                                {!dataReady.p && <LoadingMessage />}
                                {dataReady.p &&
                                    <Box
                                        component="img"
                                        alt={pokemon.name}
                                        src={pokemon.art}
                                        width={{ xs: '90%', md: '100%', filter: 'drop-shadow(1px 1px 1px #000)' }}
                                    />}
                                {dataReady.p &&
                                    pokemon.types.map((type) => (
                                        <Box key={`${pokemon.name}-${type.name}`}
                                            sx={{ display: 'inline-block' }}>
                                            <Box
                                                component={Link} to={'/types'}
                                                sx={{ color: 'inherit', textDecoration: 'none' }}>
                                                <TypeTag
                                                    size='lg'
                                                    name={type.name}
                                                />
                                            </Box>
                                        </Box>


                                    ))

                                }

                                <Grid item mt={4}>
                                    {dataReady.s && <Typography display='block' pb={3} sx={{ width: '100%' }}>{species.description}</Typography>}

                                    <Typography display='block' variant='h5' sx={{ width: '100%', fontWeight: 700 }}>Habitat</Typography>
                                    {dataReady.s &&
                                        <ContentCard className='plain' title={species.habitat}
                                            fixed={true}
                                            img={`../src/assets/habitat/${habitatImage[species.habitat]}`} />

                                    }
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={10} lg={8}
                                textAlign='center' sx={{ height: 'adjust-content' }}
                                p={2} >
                                <Grid container>
                                    {!dataReady.p && <LoadingMessage />}
                                    <Grid item xs={12} xl={6}>
                                        {dataReady.p && <StatsTable stats={pokemon.stats} />}
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        {dataReady.p && <AbilitiesTable abilitiesUrls={pokemon.abilities} />}
                                    </Grid>
                                </Grid>
                                <Grid container display={{ xs: 'none', xl: 'flex' }} justifyContent='center'>

                                    {dataReady.s && <EvolutionChain evolutionUrl={species.evolutionUrl} />}
                                </Grid>

                            </Grid>
                            <Grid item xs={12} display={{ xs: 'block', xl: 'none' }} justifyContent='center'>

                                {dataReady.s && <EvolutionChain evolutionUrl={species.evolutionUrl} />}
                            </Grid>
                        </Grid>
                    </Grid>
                )
            }
        </MainLayout >
    )
}
