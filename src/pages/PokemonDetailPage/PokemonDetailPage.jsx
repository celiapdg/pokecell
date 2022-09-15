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
import { typeIdMapping } from "../../helpers/typeColorMapping";
import { useFetchDamages } from "../../hooks/useFetchDamages";
import { BasicProfile } from "./components/BasicProfile";

const baseURL = 'https://pokeapi.co/api/v2'
const callURL = `${baseURL}/type/?limit=18`;
const types = Object.keys(typeIdMapping);

export const PokemonDetailPage = () => {

    const [dataReady, setDataReady] = useState({ p: false, s: false, d: false });
    const { pokemonId } = useParams();
    const pokemonURL = `${baseURL}/pokemon/${pokemonId}`;
    const speciesURL = `${baseURL}/pokemon-species/${pokemonId}`;
    const { loading: loadingP, error: errorP, res: resP } = useFetch(pokemonURL);
    const { loading: loadingS, error: errorS, res: resS } = useFetch(speciesURL);
    const { loading: loadingD, error: errorD, res: resD } = useFetchDamages(callURL);

    const pokemon = useMemo(() => {
        if (!loadingP) {
            if (!!resP) {
                //console.log(resP)
                const final = getPokemon(resP);
                setDataReady((isReady) => ({ ...isReady, p: true }));
                return final;
            }
        }
    }, [resP, resS]);

    const species = useMemo(() => {
        if (!loadingS) {
            if (!!resS) {
                // console.log(resS)
                const final = getSpecies(resS);
                setDataReady((isReady) => ({ ...isReady, s: true }));
                return final;
            }
        }
    }, [resS, resP]);

    const dmgTable = useMemo(() => {
        if (!loadingD) {
            if (!!resD && !!pokemon) {
                const typesId = pokemon.types.map(type => typeIdMapping[type.name]);
                const final = resD.map((row) => {
                    return typesId.map(id => {
                        return row[id - 1]
                    })
                }).map((dmgs, i) => {
                    return dmgs.reduce((dmg1, dmg2) => {
                        return { [types[i]]: dmg1 * dmg2 }
                    })
                })
                setDataReady((isReady) => ({ ...isReady, d: true }));
                return final;
            }
        }
    }, [resD, resP]);

    return (
        <MainLayout>

            {(!!errorP)
                ? (
                    errorP.response.status // TODO: helper que gestione errores
                )
                : (
                    <Grid container width='100%'
                        justifyContent="center"
                        sx={{
                            backgroundColor: '',
                        }}>
                        <Grid container position="relative"
                            justifyContent={{ xs: "center", lg: "space-between" }}
                            m={0}>

                            <Grid item xs={12} sm={10} md={5} lg={4} xl={3.5}
                                textAlign='center' position={{ lg: 'sticky' }} top={90} height='fit-content'
                                p={2}>
                                {dataReady.p && <BasicProfile pokemon={pokemon} />}
                                {!dataReady.p && <LoadingMessage />}
                            </Grid>
                            <Grid item xs={12} sm={10} lg={8} xl={8.5}
                                textAlign='center' sx={{ height: 'adjust-content', }}
                                p={2} >
                                <Grid container alignItems="start">
                                    {!dataReady.p && <LoadingMessage />}
                                    <Grid item mt={4} width='100%'>
                                        {dataReady.s && <Typography display='block' pb={3} sx={{ width: '100%' }}>{species.description}</Typography>}
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        {dataReady.p && <StatsTable stats={pokemon.stats} />}
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        {dataReady.p && <AbilitiesTable abilitiesUrls={pokemon.abilities} />}
                                    </Grid>
                                </Grid>
                                <Grid item mt={4}>
                                    <Typography display='block' variant='h5' sx={{ width: '100%', fontWeight: 700 }}>Habitat</Typography>
                                    {dataReady.s &&
                                        <ContentCard className='plain' title={species.habitat}
                                            fixed={true}
                                            img={`../src/assets/habitat/${habitatImage[species.habitat]}`} />
                                    }
                                </Grid>
                                <Grid container display={{ xs: 'none', xl: 'flex' }} justifyContent='center'>

                                    {dataReady.s && <EvolutionChain evolutionUrl={species.evolutionUrl} />}
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12} display={{ xs: 'block', xl: 'none' }} justifyContent='center'>

                            {dataReady.s && <EvolutionChain evolutionUrl={species.evolutionUrl} />}
                        </Grid>
                    </Grid>
                )
            }
        </MainLayout >
    )
}
