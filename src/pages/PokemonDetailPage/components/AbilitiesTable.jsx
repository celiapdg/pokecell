import { Paper, Grid, Typography } from "@mui/material"
import { AbilityDetails } from "./AbilityDetails";

export const AbilitiesTable = ({ abilitiesUrls = [] }) => {

    return (
        <Grid container p={2}
            sx={{ fontFamily: 'monospace' }}>
            <Typography display='block' variant='h5' sx={{ width: '100%', fontWeight: 700 }}>Passives</Typography>
            {
                abilitiesUrls.map(url => <AbilityDetails key={url} url={url} />)
            }
        </Grid>
    )
}