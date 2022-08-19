import {
    Paper, Grid, Typography
} from "@mui/material"

export const StatsTable = ({ stats = {} }) => {
    return (
        <Grid container component={Paper} elevation={0} p={2} justifyContent='space-around'
            sx={{ fontFamily: 'monospace', fontSize: '1.4em' }}>
            <Typography gutterBottom display='block' variant='h5' sx={{ width: '100%', fontFamily: 'monospace', fontWeight: 700 }}>Base Stats</Typography>
            <Grid item xs={5.5}>
                <Grid container rowSpacing={1}>
                    <Grid item xs={6} sx={{ fontWeight: 700, color: 'error.dark' }}>
                        HP
                    </Grid>
                    <Grid item xs={6}>
                        {stats.hp}
                    </Grid>
                    <Grid item xs={6} sx={{ fontWeight: 700, color: 'error.dark' }}>
                        ATK
                    </Grid>
                    <Grid item xs={6}>
                        {stats.attack}
                    </Grid>
                    <Grid item xs={6} sx={{ fontWeight: 700, color: 'error.dark' }}>
                        DEF
                    </Grid>
                    <Grid item xs={6}>
                        {stats.defense}
                    </Grid>
                    <Grid item xs={6} sx={{ fontWeight: 700, color: 'error.dark' }}>
                        Height
                    </Grid>
                    <Grid item xs={6}>
                        {stats.height}
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={5.5}>
                <Grid container rowSpacing={1}>
                    <Grid item xs={6} sx={{ fontWeight: 700, color: 'error.dark' }}>
                        Speed
                    </Grid>
                    <Grid item xs={6}>
                        {stats.speed}
                    </Grid>
                    <Grid item xs={6} sx={{ fontWeight: 700, color: 'error.dark' }}>
                        sATK
                    </Grid>
                    <Grid item xs={6}>
                        {stats.sAttack}
                    </Grid>
                    <Grid item xs={6} sx={{ fontWeight: 700, color: 'error.dark' }}>
                        sDEF
                    </Grid>
                    <Grid item xs={6}>
                        {stats.sDefense}
                    </Grid>
                    <Grid item xs={6} sx={{ fontWeight: 700, color: 'error.dark' }}>
                        Weight
                    </Grid>
                    <Grid item xs={6}>
                        {stats.weight}
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    )
}
