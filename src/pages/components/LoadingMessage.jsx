import { Grid, Typography } from "@mui/material"

export const LoadingMessage = ({ variant }) => {
    return (
        <Grid container pt={2} alignItems="center"
            justifyContent="center">
            <Typography variant={variant} display='inline-block' sx={{
                textTransform: 'capitalize',
                fontFamily: 'monospace',
                fontWeight: 700,
            }}>Loading</Typography>
            <Typography variant={variant} display='inline-block' sx={{
                textTransform: 'capitalize',
                fontFamily: 'monospace',
                fontWeight: 700,
            }} className='first animate__animated animate__bounce animate__infinite'> .</Typography>
            <Typography variant={variant} display='inline-block' sx={{
                textTransform: 'capitalize',
                fontFamily: 'monospace',
                fontWeight: 700,
            }} className='second animate__animated animate__bounce animate__infinite'> .</Typography>
            <Typography variant={variant} display='inline-block' sx={{
                textTransform: 'capitalize',
                fontFamily: 'monospace',
                fontWeight: 700,
            }} className='third animate__animated animate__bounce animate__infinite' > .</Typography>
        </Grid>
    )
}
