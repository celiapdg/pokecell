import { Box, Grid, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { getPokemon, parseIdFromUrl, parseName } from "../../../helpers";
import { useFetchEvolutions } from "../../../hooks";
import { LoadingMessage, PokeCard } from "../../components";
import { TypeIcon } from "../../TypesPage/components/TypeIcon";
import { EvolutionArrow } from "./EvolutionArrow";

export const EvolutionChain = ({ evolutionUrl = '' }) => {
    const [dataReady, setDataReady] = useState(false);
    const { loading, error, res, chains: c } = useFetchEvolutions(parseIdFromUrl(evolutionUrl));

    const chains = useMemo(() => {
        if (!loading) {
            if (!!res && res.length > 0) {
                const finalData = res.map((row, i) => {
                    return row.map((data, j) => {
                        return { pokemon: getPokemon(data.data), details: c[i][j].details };
                    })
                })
                setDataReady(true);
                return finalData;
            }
        }
    }, [res]);


    return (
        <>
            <Typography display='block' variant='h5' textAlign='center'
                sx={{ width: '100%', fontWeight: 700 }}>Evolution chain</Typography>
            {
                !dataReady && <LoadingMessage />
            }
            {dataReady && chains.map((chain, i) => (

                <Box key={`chain${i}`} width='100%'>
                    <Typography display='block' variant='h6' textAlign='center'
                        sx={{ width: '100%', fontWeight: 700 }} >{`Chain ${i + 1}`}</Typography>
                    <Grid container alignItems='center' justifyContent='center' spacing={1}>

                        {
                            chain.map((p, j) => (
                                <Box key={p.pokemon.id + j + i} display='flex' alignItems='center'>
                                    {p.details.length > 0 && <EvolutionArrow details={p.details} />}
                                    <Grid item key={i + j} xs={3}>

                                        <PokeCard
                                            id={p.pokemon.id}
                                            name={parseName(p.pokemon.name)}
                                            variant='h6'
                                            route={`/pokemon/${p.pokemon.name}`}
                                            fixed={false}
                                            img={p.pokemon.img}>
                                            {p.pokemon.types.map((type) => (
                                                <TypeIcon key={`${p.pokemon.name}-${type.name}-${i + j}`}
                                                    size='xs' name={type.name} />
                                            ))
                                            }
                                        </PokeCard>
                                    </Grid>
                                </Box>
                            ))

                        }
                    </Grid>


                </Box>

            ))

            }
        </>

    )
}
