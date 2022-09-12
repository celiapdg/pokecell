import { Grid } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfiniteFetch } from "../../hooks/useInfiniteFetch";
import { PokeCard } from "../components";
import { LoadingMessage } from "../components/LoadingMessage";
import { PokeFilterBar } from "./components/PokeFilterBar";
import { MainLayout } from "../layouts/MainLayout";
import { TypeIcon } from "../TypesPage/components/TypeIcon";
import { parseName } from "../../helpers/parseInfo";


export const PokemonListPage = () => {

    const route = useParams();
    const types = useMemo(() => {
        return route['*']?.split('/');
    }, [route]);


    const limit = 110;
    const [offset, setOffset] = useState(0);
    const { loading, error, list } = useInfiniteFetch(limit, offset, 'pokemon');
    console.log('length', list.length)


    const observer = useRef(); // (*)
    const loadingRef = useCallback(  // (*)
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setOffset(() => list.length);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading]
    );


    return (
        <>
            <MainLayout>

                <PokeFilterBar />
                <Grid container
                    alignItems="center"
                    justifyContent="center" pb={5}>
                    {list.map((pokemon, i) => {
                        return (!types || pokemon.types.some(r => types.indexOf(r.name) >= 0)) &&
                            (
                                <PokeCard key={i}
                                    id={pokemon.id}
                                    name={parseName(pokemon.name)}
                                    route={`/pokemon/${pokemon.id}`}
                                    img={pokemon.imgDef}>
                                    {pokemon.types.map((type) => (
                                        <TypeIcon key={`${pokemon.name}-${type.name}`}
                                            size='xs' name={type.name} />
                                    ))
                                    }
                                </PokeCard>)

                    }
                    )}

                    <div style={{ width: '100%' }}>
                        {(loading && list.length < 898) && <LoadingMessage variant='h5' />}
                        {(!loading && list.length < 898) && <div style={{ width: '100%', height: 10 }} ref={loadingRef} />}
                    </div>
                    {error && <p>Error!</p>}
                </Grid>
            </MainLayout>

        </>
    )
}
