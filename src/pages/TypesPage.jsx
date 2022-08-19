import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { TypeTag } from "./components";
import { LoadingMessage } from "./components/LoadingMessage";
import { MainLayout } from "./layouts/MainLayout";

const baseURL = 'https://pokeapi.co/api/v2'

export const TypesPage = () => {
    const callURL = `${baseURL}/type/?limit=18`;
    const { loading, error, res } = useFetch(callURL);

    return (
        <>
            <MainLayout>

                <Grid container
                    alignItems="center"
                    justifyContent="center"
                    p={6}>
                    {loading && <LoadingMessage variant='h3' />}
                    {!loading && res.map((type) => (
                        <Grid p={2}
                            component={Link} to={`/types/${type.name}`}
                            sx={{
                                color: 'inherit'
                            }}
                            item key={`${type.name}`}>
                            <TypeTag
                                padding={2}
                                variant='h3'
                                name={type.name}
                                url={type.url} />
                        </Grid>
                    ))
                    }
                </Grid>
            </MainLayout>

        </>
    )
}
