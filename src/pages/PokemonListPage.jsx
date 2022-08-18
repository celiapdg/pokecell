import { Grid } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInfiniteFetch } from "../hooks/useInfiniteFetch";
import { ContentCard, TypeTag } from "./components";
import { MainLayout } from "./layouts/MainLayout";


export const PokemonListPage = () => {

    const limit = 24;
    const [offset, setOffset] = useState(0);
    const { loading, error, list } = useInfiniteFetch(limit, offset, 'pokemon');
    // console.log(list)
    const loader = useRef(null);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setOffset((prev) => prev + limit);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "40px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return (
        <>
            <MainLayout>
                <Grid container>
                    {list.map((pokemon, i) => (
                        <Grid item
                            p={2} xs={6} sm={4} md={3} xl={2}
                            key={i}>
                            <ContentCard
                                title={pokemon.name}
                                variant='h5'
                                route={`/pokemon/${pokemon.name}`}
                                img={pokemon.imgDef}>
                                {pokemon.types.map((type) => (
                                    <TypeTag
                                        key={`${pokemon.name}-${type.name}`}
                                        name={type.name}
                                    />
                                ))
                                }
                            </ContentCard>
                        </Grid>
                    ))}

                    {loading && <p>Loading...</p>}
                    {error && <p>Error!</p>}
                    <div ref={loader} />
                </Grid>
            </MainLayout>

        </>
    )
}
