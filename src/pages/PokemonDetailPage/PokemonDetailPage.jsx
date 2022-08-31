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

const baseURL = 'https://pokeapi.co/api/v2'


export const PokemonDetailPage = () => {

    const [dataReady, setDataReady] = useState({ p: false, s: false });
    const { pokemonName } = useParams();
    const pokemonURL = `${baseURL}/pokemon/${pokemonName}`;
    const speciesURL = `${baseURL}/pokemon-species/${pokemonName}`;
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
                        mt={2} spacing={2}
                        style={{
                            backgroundColor: '#FFF',
                            borderRadius: '1%'
                        }}>
                        <Grid container
                            justifyContent="center"
                            m={0} spacing={2}>

                            <Grid item xs={12} sm={10} md={5} lg={4} xl={4}
                                textAlign='center'
                                p={2}>
                                <Typography
                                    variant='h3'
                                    component="div"
                                    textAlign='center'
                                    sx={{
                                        width: '100%',
                                        textTransform: 'capitalize',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                    }}>
                                    {dataReady.p && `${pokemon.name}`}

                                </Typography>
                                {!dataReady.p && <LoadingMessage />}
                                {dataReady.p &&
                                    <Box
                                        component="img"
                                        alt={pokemon.name}
                                        src={pokemon.img}
                                        width={{ xs: '90%', md: '100%', filter: 'drop-shadow(1px 1px 1px #000)' }}
                                    />}
                                {dataReady.p &&
                                    pokemon.types.map((type) => (
                                        <Box key={`${pokemon.name}-${type.name}`}
                                            component={Link} to={`/types/${type.name}`} sx={{ color: 'inherit' }}>
                                            <TypeTag
                                                size='lg'
                                                name={type.name}
                                            />
                                        </Box>
                                    ))
                                }

                            </Grid>
                            <Grid item xs={12} sm={10} md={7} lg={4} xl={4} alignSelf='flex-end'
                                textAlign='center' sx={{ height: 'adjust-content' }}
                                p={2} >
                                <Grid container direction='column' justifyContent='end'>
                                    {!dataReady.p && <LoadingMessage />}
                                    {dataReady.p && <StatsTable stats={pokemon.stats} />}
                                    <Grid item mt={4}>
                                        <Typography display='block' variant='h5' sx={{ width: '100%', fontFamily: 'monospace', fontWeight: 700 }}>Habitat</Typography>
                                        {dataReady.s &&
                                            <ContentCard className='plain' title={species.habitat}
                                                fixed={true}
                                                img={`../src/assets/habitat/${habitatImage[species.habitat]}`} />

                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={10} lg={4} xl={4} alignSelf='flex-end'
                                textAlign='center'
                                p={2} >
                                {dataReady.p && <AbilitiesTable abilitiesUrls={pokemon.abilities} />}
                            </Grid>
                        </Grid>
                        <Grid container
                            justifyContent="center"
                            p={1} spacing={2} sx={{ width: '100%' }}>
                            <Grid item xs={12}>
                                {dataReady.s && <EvolutionChain evolutionUrl={species.evolutionUrl} />}
                            </Grid>

                        </Grid>
                    </Grid>
                )
            }
        </MainLayout>
    )
}
