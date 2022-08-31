import { Grid } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInfiniteFetch } from "../../hooks/useInfiniteFetch"
import { LoadingMessage } from "../components";
import { MainLayout } from "../layouts/MainLayout"
import { SkillCard } from "./components/SkillCard";

export const SkillsPage = () => {
    const limit = 24;
    const [offset, setOffset] = useState(0);
    const { loading, error, list } = useInfiniteFetch(limit, offset, 'move');

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
        <MainLayout>
            <Grid container
                alignItems="center"
                justifyContent="center"
                spacing={2} py={3} px={1}>
                {list.map((move, i) => (
                    <Grid item
                        xs={6} sm={4} lg={3.7} xl={3}
                        key={i}>
                        <SkillCard move={move} />
                    </Grid>
                ))}

                {loading && <LoadingMessage variant='h5' />}
                {error && <p>Error!</p>}
                <div ref={loader} />
            </Grid>
        </MainLayout>
    )
}