import {
    Grid, Typography, Box
} from "@mui/material"

// TODO: Convertir a barras que se llenan con el valor sobre 110? cuál es el máximo?
export const StatsTable = ({ stats = {} }) => {

    const statStyle = { fontWeight: 700, textAlign: 'right', pr: 2 }

    return (
        <Box justifyContent='space-around'
            sx={{ fontSize: '1.4em' }}>
            <Typography gutterBottom display='block' variant='h5' sx={{ width: '100%', fontWeight: 700 }}>Base Stats</Typography>

            <Grid container rowSpacing={1} justifyContent='center'>
                <Grid item xs={3} sx={statStyle}>
                    HP
                </Grid>
                <Grid item xs={9} >
                    <Box position='relative' width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box width={`${stats.hp * 100 / 255}%`} className='full' height='24px'
                            sx={{
                                backgroundColor: '#FF1616',
                                fontSize: '0.7em',
                                borderRadius: '12px'
                            }} />
                        <Typography position='absolute' top={0} left={0} right={0}>{stats.hp}/255</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={statStyle}>
                    Speed
                </Grid>
                <Grid item xs={9}>
                    <Box position='relative' width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box className='full' width={`${stats.speed * 100 / 255}%`} height='24px'
                            sx={{
                                backgroundColor: '#F4AFAF',
                                fontSize: '0.7em',
                                borderRadius: '12px'
                            }} />
                        <Typography position='absolute' top={0} left={0} right={0}>{stats.speed}/255</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={statStyle}>
                    ATK
                </Grid>
                <Grid item xs={9}>
                    <Box position='relative' width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box className='full' width={`${stats.attack * 100 / 255}%`} height='24px'
                            sx={{
                                backgroundColor: '#EFA739',
                                fontSize: '0.7em',
                                borderRadius: '12px'
                            }} />
                        <Typography position='absolute' top={0} left={0} right={0}>{stats.attack}/255</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={statStyle}>
                    DEF
                </Grid>
                <Grid item xs={9}>
                    <Box position='relative' width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box className='full' width={`${stats.defense * 100 / 255}%`} height='24px'
                            sx={{
                                backgroundColor: '#FFDE59',
                                fontSize: '0.7em',
                                borderRadius: '12px'
                            }} />
                        <Typography position='absolute' top={0} left={0} right={0}>{stats.defense}/255</Typography>

                    </Box>
                </Grid>


                <Grid item xs={3} sx={statStyle}>
                    sATK
                </Grid>
                <Grid item xs={9}>
                    <Box position='relative' width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box className='full' width={`${stats.sAttack * 100 / 255}%`} height='24px'
                            sx={{
                                backgroundColor: '#5CE1E6',
                                fontSize: '0.7em',
                                borderRadius: '12px'
                            }} />
                        <Typography position='absolute' top={0} left={0} right={0}>{stats.sAttack}/255</Typography>

                    </Box>
                </Grid>
                <Grid item xs={3} sx={statStyle}>
                    sDEF
                </Grid>
                <Grid item xs={9}>
                    <Box position='relative' width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box className='full' width={`${stats.sDefense * 100 / 255}%`} height='24px'
                            sx={{
                                backgroundColor: '#7ED957',
                                fontSize: '0.7em',
                                borderRadius: '12px'
                            }} />
                        <Typography position='absolute' top={0} left={0} right={0}>{stats.sDefense}/255</Typography>

                    </Box>
                </Grid>
                <Grid item xs={8} sx={{ fontWeight: 700 }}>
                    Weight
                </Grid>
                <Grid item xs={4} sx={{ fontWeight: 700 }}>
                    Height
                </Grid>
                <Grid item xs={8}>
                    {stats.weight / 10} kg
                </Grid>
                <Grid item xs={4}>
                    {stats.height / 10} m
                </Grid>
            </Grid>

        </Box>
    )
}
