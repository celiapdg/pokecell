import { Grid } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInfiniteFetch } from "../hooks/useInfiniteFetch";
import { ContentCard } from "./components/ContentCard";



export const PokemonListPage = () => {

    const limit = 24;
    const [offset, setOffset] = useState(0);
    const { loading, error, list } = useInfiniteFetch(limit, offset);
    console.log(list)
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
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return (
        <>
            <Grid container>
                {list.map((pokemon) => (
                    <Grid item p={2} xs={6} sm={4} md={3} xl={2}>
                        <ContentCard
                            title={pokemon.name}
                            route='/pokemon'
                            img={pokemon.imgDef} />
                    </Grid>
                ))}

                {loading && <p>Loading...</p>}
                {error && <p>Error!</p>}
                <div ref={loader} />
            </Grid>
        </>
    )
}
