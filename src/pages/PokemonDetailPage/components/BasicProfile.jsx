import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { parseName } from '../../../helpers'
import { TypeTag } from '../../TypesPage/components'

export const BasicProfile = ({ pokemon }) => {
    return (
        <Box>
            <Box sx={{
                width: '100%',
                textAlign: 'center',
            }}>
                <Typography
                    variant='h4'
                    component="span"
                    textAlign='center'
                    sx={{
                        textTransform: 'capitalize',
                        fontWeight: 700,
                        color: '#8d8c8a'
                    }}>
                    {`#${pokemon.id} `}
                </Typography>
                <Typography
                    variant='h3'
                    component="span"
                    textAlign='center'
                    sx={{
                        textTransform: 'capitalize',
                        fontWeight: 700,
                    }}>
                    {parseName(pokemon.name)}
                </Typography>
            </Box>

            <Box
                component="img"
                alt={pokemon.name}
                src={pokemon.art}
                width={{ xs: '90%', md: '100%', filter: 'drop-shadow(1px 1px 1px #000)' }}
            />

            {pokemon.types.map((type) => (
                <Box key={`${pokemon.name}-${type.name}`}
                    sx={{ display: 'inline-block' }}>
                    <Box
                        component={Link} to={'/types'}
                        sx={{ color: 'inherit', textDecoration: 'none' }}>
                        <TypeTag
                            size='lg'
                            name={type.name}
                        />
                    </Box>
                </Box>


            ))}



        </Box>
    )
}
