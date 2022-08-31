import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material"
import { TypeTag } from "../../TypesPage/components"

export const SkillCard = ({ move }) => {

    return (
        <Card p={0} sx={{ borderRadius: '40px' }}>
            <CardActionArea >
                <CardContent >
                    <Grid container spacing={1}
                        direction='column'>
                        <Grid item>
                            <Grid container justifyContent='space-between'>

                                <Typography
                                    component="div"
                                    display='inline'
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                    }}>
                                    {move.name}
                                </Typography>
                                <TypeTag size='xs' name={move.type} />
                            </Grid>
                        </Grid>
                        <Grid item justifySelf='flex-end'>
                            <Grid container justifyContent='space-between'>
                                <Typography
                                    component="div"
                                    display='inline'
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                    }}>
                                    {move.damageClass === 'physical' && '💥'}
                                    {move.damageClass === 'special' && '🌀'}
                                    {move.damageClass === 'status' && '✨'}
                                    {!!move.power && ` ${move.power}`}
                                </Typography>
                                <Typography
                                    component="div"
                                    display='inline'
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                    }}>
                                    PP {move.pp}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>

        </Card >
    )
}
