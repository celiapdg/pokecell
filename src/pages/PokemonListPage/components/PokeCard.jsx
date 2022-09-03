import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const PokeCard = ({ title,
    img = "../src/assets/habitat/null.jpeg",
    route = '',
    children }) => {

    const imgWidth = { xs: 140, sm: 150, md: 170 }
    const cardHeight = { xs: 215, sm: 230, md: 255 }

    return (
        <>
            <Card elevation={0}
                sx={{
                    height: cardHeight,
                    width: imgWidth,
                    margin: '0 5px',
                    backgroundColor: 'rgb(0,0,0,0)',
                    borderRadius: '50px'
                }} >
                <CardActionArea component={Link} to={route}>
                    <CardMedia
                        component="img"
                        image={img}
                        alt={title}
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

                        <Grid container justifyContent="center" p={2} pt={9.5}>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component="div"
                                textAlign='center'
                                sx={{
                                    width: '100%',
                                    textTransform: 'capitalize',
                                    fontWeight: 700,
                                }}>
                                {title}
                            </Typography>
                            {children}
                        </Grid>

                    </Card>
                </CardActionArea>
            </Card>
        </>
    )
}
