import { Grid } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfiniteFetch } from "../../hooks/useInfiniteFetch";
import { PokeCard } from "../components";
import { LoadingMessage } from "../components/LoadingMessage";
import { PokeFilterBar } from "./components/PokeFilterBar";
import { MainLayout } from "../layouts/MainLayout";
import { TypeIcon } from "../TypesPage/components/TypeIcon";


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

                <PokeFilterBar />
                <Grid container
                    alignItems="center"
                    justifyContent="center">
                    {list.map((pokemon, i) => {
                        return (!types || pokemon.types.some(r => types.indexOf(r.name) >= 0)) &&
                            (
                                <PokeCard key={i}
                                    title={pokemon.name}
                                    route={`/pokemon/${pokemon.name}`}
                                    img={pokemon.imgDef}>
                                    {pokemon.types.map((type) => (
                                        <TypeIcon key={`${pokemon.name}-${type.name}`}
                                            size='xs' name={type.name} />
                                    ))
                                    }
                                </PokeCard>)

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
