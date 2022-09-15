import { Grid } from "@mui/material";
import { useCallback, useMemo, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useInfiniteFetch } from "../../hooks/useInfiniteFetch";
import { LoadingMessage } from "../components/LoadingMessage";
import { PokeFilterBar } from "./components/PokeFilterBar";
import { MainLayout } from "../layouts/MainLayout";
import { PokeList } from "./components/PokeList";


export const PokemonListPage = () => {

    const [offset, setOffset] = useState(0);
    const observer = useRef();

    const fetchLimit = 110;
    const { loading, error, list } = useInfiniteFetch(fetchLimit, offset, 'pokemon');

    const loadingRef = useCallback(
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
                <Grid container
                    alignItems="center"
                    justifyContent="center" pb={5}>
                    <Grid item xs={12} px={3}>
                        <PokeFilterBar />
                    </Grid>

                    <PokeList list={list} />

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
