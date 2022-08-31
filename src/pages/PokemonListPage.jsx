import { Grid } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfiniteFetch } from "../hooks/useInfiniteFetch";
import { ContentCard, PokeCard } from "./components";
import { LoadingMessage } from "./components/LoadingMessage";
import { PokeFilterSidebar } from "./components/PokeFilterSidebar";
import { MainLayout } from "./layouts/MainLayout";
import { TypeTag } from "./TypesPage/components";


export const PokemonListPage = () => {

    const route = useParams();
    const types = useMemo(() => {
        return route['*']?.split('/');
    }, [route]);

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

                <Grid container
                    alignItems="center"
                    justifyContent="center">
                    {list.map((pokemon, i) => {
                        return (!types || pokemon.types.some(r => types.indexOf(r.name) >= 0)) &&
                            (<Grid item
                                p={1} xs={6} sm={4.8} md={3.5} lg={3} xl={2.4}
                                key={i}>
                                <PokeCard
                                    title={pokemon.name}
                                    route={`/pokemon/${pokemon.name}`}
                                    img={pokemon.imgDef}>
                                    {pokemon.types.map((type) => (
                                        <TypeTag
                                            key={`${pokemon.name}-${type.name}`}
                                            name={type.name}
                                        />
                                    ))
                                    }
                                </PokeCard>
                            </Grid>)
                    }
                    )}

                    {loading && <LoadingMessage variant='h5' />}
                    {error && <p>Error!</p>}
                    <div ref={loader} />
                </Grid>
            </MainLayout>

        </>
    )
}
