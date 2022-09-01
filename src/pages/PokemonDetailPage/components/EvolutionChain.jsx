import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { getPokemon } from "../../../helpers/getPokemonData";
import { useFetchEvolutions } from "../../../hooks/useFetchEvolutions"
import { PokeCard } from "../../components";
import { ContentCard } from "../../components/ContentCard";
import { LoadingMessage } from "../../components/LoadingMessage"
import { TypeTag } from "../../TypesPage/components/TypeTag";
import { EvolutionArrow } from "./EvolutionArrow";

export const EvolutionChain = ({ evolutionUrl = '' }) => {

    const [dataReady, setDataReady] = useState(false);
    const { loading, error, res, chains: c } = useFetchEvolutions(evolutionUrl)

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
                sx={{ width: '100%', fontFamily: 'monospace', fontWeight: 700 }}>Evolution chain</Typography>
            {
                !dataReady && <LoadingMessage />
            }
            {dataReady && chains.map((chain, i) => (

                <Box key={`chain${i}`} width='100%'>
                    <Typography display='block' variant='h6' textAlign='center'
                        sx={{ width: '100%', fontFamily: 'monospace', fontWeight: 700 }} >{`Chain ${i + 1}`}</Typography>
                    <Grid container alignItems='center' justifyContent='center' spacing={1}>

                        {

                            chain.map((p, j) => (
                                <>
                                    {p.details.length > 0 && <EvolutionArrow details={p.details} />}
                                    <Grid item key={i + j} xs={3}>
                                        <PokeCard
                                            title={p.pokemon.name}
                                            variant='h6'
                                            route={`/pokemon/${p.pokemon.name}`}
                                            fixed={false}
                                            img={p.pokemon.img}>
                                            {p.pokemon.types.map((type) => (
                                                <TypeTag size='xs'
                                                    key={`${p.pokemon.name}-${type.name}-${i + j}`}
                                                    name={type.name}
                                                />
                                            ))
                                            }
                                        </PokeCard>
                                    </Grid>
                                </>

                            ))
                        }
                    </Grid>


                </Box>

            ))

            }
        </>

    )
}
