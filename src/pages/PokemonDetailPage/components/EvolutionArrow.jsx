import { ArrowForwardIos } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { useCallback, useMemo, useState } from "react"
import { getEvolutionConditions } from "../../../helpers"

export const EvolutionArrow = ({ details }) => {
    const [display, setDisplay] = useState('none')

    const handleDisplay = useCallback(
        () => {
            setDisplay(display === 'none' ? 'block' : 'none');
        },
        [display],
    )

    const evolutionConditions = useMemo(() => getEvolutionConditions(details[0]), [details]);
    // console.log(evolutionConditions.conditions)

    return (<>
        <Box onMouseEnter={handleDisplay} onMouseLeave={handleDisplay} position='relative'>
            <ArrowForwardIos className="hover-info" fontSize='large' />
            <Box display={display} p={1.5} textAlign='center' sx={{
                width: 200,
                backgroundColor: 'rgb(0,0,0,0.7)',
                color: 'white',
                position: 'absolute',
                left: -85,
                margin: '0 auto',
                borderRadius: '16px',
                zIndex: 100000
            }}>
                <Typography
                    sx={{
                        width: '100%',
                        textTransform: 'capitalize',
                    }}>{evolutionConditions.trigger}</Typography>
                {
                    evolutionConditions.conditions.map(condition => {
                        return (
                            <Typography key={condition[0]} >{`${condition[0]} ${condition[1]}`}</Typography>
                        )
                    })
                }
            </Box>
        </Box>

    </>
    )
}
