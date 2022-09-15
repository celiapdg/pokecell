import { useFetchDamages } from "../../../hooks/useFetchDamages";
import { typeColorMapping, typeIdMapping } from "../../../helpers/typeColorMapping";
import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { TypeIcon } from "./TypeIcon";

const baseURL = 'https://pokeapi.co/api/v2'
const callURL = `${baseURL}/type/?limit=18`;
const types = Object.keys(typeIdMapping);
const colors = {}

export const TypesTable = () => {
    const { loading, error, res } = useFetchDamages(callURL);
    console.log(res)

    return (
        <>
            {!loading && (
                <>
                    <Box width='fit-content' display='flex' position='sticky' top={0} >
                        <Box
                            position='sticky' left={0} top={0} display='flex'
                            alignItems='center' justifyContent='center'
                            height={70} width={70}
                            sx={{
                                backgroundColor: 'white',
                                boxSizing: 'border-box',
                                zIndex: 12000,
                            }}>
                            <Box alignSelf='end' justifySelf='flex-end'>FROM</Box>
                            <Box mt={2} alignSelf='start'>TO</Box>
                            <div className="diagonal"></div>
                        </Box>
                        {
                            types.map((type) => {
                                return (
                                    <Box
                                        position='sticky' top={0}
                                        height={70} width={70} display='flex'
                                        alignItems='center' justifyContent='center'
                                        sx={{

                                            boxSizing: 'border-box',
                                            backgroundColor: typeColorMapping[type],
                                            scrollSnapAlign: 'start'

                                        }}>
                                        <TypeIcon name={type} size='xl' />
                                    </Box>
                                )
                            })
                        }
                    </Box>

                    {res.map((row, i) => {
                        return (
                            <Box width='fit-content' display='flex' position='relative' sx={{
                                zIndex: -1000,

                            }}>
                                <Box
                                    position='sticky' left={0} display='flex'
                                    alignItems='center' justifyContent='center'
                                    height={70} width={70}
                                    sx={{

                                        boxSizing: 'border-box',
                                        backgroundColor: typeColorMapping[types[i]]

                                    }}>
                                    <TypeIcon name={types[i]} size='xl' />
                                </Box>
                                {row.map((value, j) => {
                                    return (
                                        <Box display='flex'
                                            alignItems='center' justifyContent='center'
                                            height={70} width={70}
                                            sx={{
                                                borderLeft: '0.5px solid black',
                                                borderTop: '0.5px solid black',
                                                boxSizing: 'border-box',
                                                backgroundColor: 'white',
                                                scrollSnapAlign: 'start'
                                            }}>
                                            <Typography variant='h5'>
                                                {value}
                                            </Typography>
                                        </Box>
                                    )
                                })}
                            </Box>)
                    })}
                </>
            )
            }
        </>
    )
}
