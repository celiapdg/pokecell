import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { typeIdMapping } from "../helpers/typeColorMapping";
import { useFetch } from "../hooks/useFetch";
import { TypeTag } from "./components";
import { MainLayout } from "./layouts/MainLayout";


const baseURL = 'https://pokeapi.co/api/v2'

export const TypesDetailPage = () => {

    const { typeName } = useParams();
    const typeId = typeIdMapping[typeName];
    const callURL = `${baseURL}/type/${typeId}`;
    const { loading, error, res } = useFetch(callURL);
    const dmg = res.damage_relations;

    return (
        <>
            <MainLayout>
                {
                    (loading && !error)
                        ?
                        'Loading...' // TODO: componente de Loading
                        : (!!error)
                            ? (
                                error.response.status // TODO: helper que gestione errores
                            )
                            : (
                                <Grid container
                                    alignItems="center"
                                    justifyContent="center"
                                    p={2}>
                                    <Grid item xs={12} md={4}
                                        textAlign='center'
                                        p={2}>
                                        <TypeTag
                                            padding={2}
                                            variant='h3'
                                            name={res.name}
                                            url={res.url} />
                                    </Grid>

                                    <Grid item xs={12} md={8}
                                        p={2}>
                                        <TableContainer component={Paper} elevation={0} >
                                            <Table aria-label="simple table" >
                                                <TableHead >
                                                    <TableRow >
                                                        <TableCell >Multiplier</TableCell>
                                                        <TableCell align="center">DAMAGE TO</TableCell>
                                                        <TableCell align="center">HIT BY</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow >
                                                        <TableCell component="th" scope="row">
                                                            x2
                                                        </TableCell>
                                                        <TableCell align="center">
                                                            {
                                                                dmg.double_damage_to.map(type => (
                                                                    <Box key={`${res.name}-${type.name}`}
                                                                        component={Link} to={`/types/${type.name}`} sx={{ color: 'inherit' }}>
                                                                        <TypeTag
                                                                            name={type.name}
                                                                            url={type.url}
                                                                        />
                                                                    </Box>
                                                                ))
                                                            }
                                                        </TableCell>
                                                        <TableCell align="center">
                                                            {
                                                                dmg.double_damage_from.map(type => (
                                                                    <Box key={`${res.name}-${type.name}`}
                                                                        component={Link} to={`/types/${type.name}`} sx={{ color: 'inherit' }}>
                                                                        <TypeTag
                                                                            name={type.name}
                                                                            url={type.url}
                                                                        />
                                                                    </Box>
                                                                ))
                                                            }
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow

                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            1/2 </TableCell>
                                                        <TableCell align="center">
                                                            {
                                                                dmg.half_damage_to.map(type => (
                                                                    <Box key={`${res.name}-${type.name}`}
                                                                        component={Link} to={`/types/${type.name}`} sx={{ color: 'inherit' }}>
                                                                        <TypeTag name={type.name} url={type.url}
                                                                        />
                                                                    </Box>
                                                                ))
                                                            }
                                                        </TableCell>
                                                        <TableCell align="center">
                                                            {
                                                                dmg.half_damage_from.map(type => (
                                                                    <Box key={`${res.name}-${type.name}`}
                                                                        component={Link} to={`/types/${type.name}`} sx={{ color: 'inherit' }}>
                                                                        <TypeTag
                                                                            name={type.name}
                                                                            url={type.url}
                                                                        />
                                                                    </Box>
                                                                ))
                                                            }
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow

                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            Zero
                                                        </TableCell>
                                                        <TableCell align="center">
                                                            {
                                                                dmg.no_damage_to.map(type => (
                                                                    <Box key={`${res.name}-${type.name}`}
                                                                        component={Link} to={`/types/${type.name}`} sx={{ color: 'inherit' }}>
                                                                        <TypeTag
                                                                            name={type.name}
                                                                            url={type.url}
                                                                        />
                                                                    </Box>
                                                                ))
                                                            }
                                                        </TableCell>
                                                        <TableCell align="center">
                                                            {
                                                                dmg.no_damage_from.map(type => (
                                                                    <Box key={`${res.name}-${type.name}`}
                                                                        component={Link} to={`/types/${type.name}`} sx={{ color: 'inherit' }}>
                                                                        <TypeTag
                                                                            name={type.name}
                                                                            url={type.url}
                                                                        />
                                                                    </Box>
                                                                ))
                                                            }
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>

                                </Grid>
                            )

                }



            </MainLayout>
        </>
    )
}
