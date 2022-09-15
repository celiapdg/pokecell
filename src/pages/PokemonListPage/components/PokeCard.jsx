import { Card, CardActionArea, CardContent, CardMedia, Grid, styled, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const PokeCard = ({ id, name,
    img = "../src/assets/habitat/null.jpeg",
    route = '',
    children }) => {

    const imgWidth = { xs: 140, sm: 150, md: 170, lg: 190 }
    const cardHeight = { xs: 220, sm: 235, md: 260, lg: 280 }
    const StyledCardActionArea = styled(CardActionArea)(({ theme }) => `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
`);

    return (
        <Card elevation={0} className='bounce-parent shadow'
            sx={{
                height: cardHeight,
                width: imgWidth,
                margin: '0 8px',
                backgroundColor: 'rgb(0,0,0,0)',
                borderRadius: '50px',
            }} >
            <StyledCardActionArea component={Link} to={route} >
                <CardMedia className="bounce"
                    component="img"
                    image={img}
                    alt={name}
                    sx={{
                        width: imgWidth,
                        margin: '0 auto',
                        zIndex: 1000,

                    }}
                />
                <Card elevation={2} sx={{
                    position: 'relative', bottom: 80, zIndex: -1,
                    borderRadius: '50px'
                }}>

                    <Grid container display='flex' justifyContent="center" p={2} pt={7.5}>
                        <Typography
                            textAlign='center'
                            sx={{
                                width: '100%',
                                textTransform: 'capitalize',
                                fontWeight: 700,
                                fontSize: '1.2em',
                                color: '#8d8c8a'
                            }}>
                            #{id}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant='h5'
                            textAlign='center'
                            sx={{
                                width: '100%',
                                textTransform: 'capitalize',
                                fontWeight: 700,
                            }}>
                            {name}
                        </Typography>
                        {children}
                    </Grid>

                </Card>
            </StyledCardActionArea>
        </Card>
    )
}
