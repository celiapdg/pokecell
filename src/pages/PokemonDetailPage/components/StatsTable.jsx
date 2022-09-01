import {
    Grid, Typography, Box
} from "@mui/material"

// TODO: Convertir a barras que se llenan con el valor sobre 110? cuál es el máximo?
export const StatsTable = ({ stats = {} }) => {
    return (
        <Box justifyContent='space-around'
            sx={{ fontSize: '1.4em' }}>
            <Typography gutterBottom display='block' variant='h5' sx={{ width: '100%', fontWeight: 700 }}>Base Stats</Typography>

            <Grid container rowSpacing={1} justifyContent='center'>
                <Grid item xs={3} sx={{ fontWeight: 700 }}>
                    HP
                </Grid>
                <Grid item xs={9} >
                    <Box width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box width={`${stats.hp * 100 / 255}%`} height='24px' sx={{ backgroundColor: '#FF1616', fontSize: '0.7em', borderRadius: '12px' }}>{stats.hp}/255</Box>
                    </Box>

                </Grid>
                <Grid item xs={3} sx={{ fontWeight: 700 }}>
                    Speed
                </Grid>
                <Grid item xs={9}>
                    <Box width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box width={`${stats.speed * 100 / 255}%`} height='24px' sx={{ backgroundColor: '#F4AFAF', fontSize: '0.7em', borderRadius: '12px' }}>{stats.speed}/255</Box>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{ fontWeight: 700 }}>
                    ATK
                </Grid>
                <Grid item xs={9}>
                    <Box width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box width={`${stats.attack * 100 / 255}%`} height='24px' sx={{ backgroundColor: '#EFA739', fontSize: '0.7em', borderRadius: '12px' }}>{stats.attack}/255</Box>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{ fontWeight: 700 }}>
                    DEF
                </Grid>
                <Grid item xs={9}>
                    <Box width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box width={`${stats.defense * 100 / 255}%`} height='24px' sx={{ backgroundColor: '#FFDE59', fontSize: '0.7em', borderRadius: '12px' }}>{stats.defense}/255</Box>
                    </Box>
                </Grid>


                <Grid item xs={3} sx={{ fontWeight: 700 }}>
                    sATK
                </Grid>
                <Grid item xs={9}>
                    <Box width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box width={`${stats.sAttack * 100 / 255}%`} height='24px' sx={{ backgroundColor: '#5CE1E6', fontSize: '0.7em', borderRadius: '12px' }}>{stats.sAttack}/255</Box>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{ fontWeight: 700 }}>
                    sDEF
                </Grid>
                <Grid item xs={9}>
                    <Box width='100%' sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                        <Box width={`${stats.sDefense * 100 / 255}%`} height='24px' sx={{ backgroundColor: '#7ED957', fontSize: '0.7em', borderRadius: '12px' }}>{stats.sDefense}/255</Box>
                    </Box>
                </Grid>
                <Grid item xs={5} sx={{ fontWeight: 700 }}>
                    Weight
                </Grid>
                <Grid item xs={5} sx={{ fontWeight: 700 }}>
                    Height
                </Grid>
                <Grid item xs={5}>
                    {stats.weight / 10} kg
                </Grid>
                <Grid item xs={5}>
                    {stats.height / 10} m
                </Grid>
            </Grid>

        </Box>
    )
}
