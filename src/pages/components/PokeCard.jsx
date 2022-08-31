import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const PokeCard = ({ title,
    img = "../src/assets/habitat/null.jpeg",
    route = '',
    children }) => {

    const imgWidth = { xs: 100, sm: 150, md: 200, xl: '100%' }
    const imgHeight = { xs: 100, sm: 150, md: 200, xl: '100%' }
    const cardHeight = { xs: 195, sm: 250, md: 305, xl: 380 }

    return (
        <>
            <Card elevation={0} sx={{ height: cardHeight, backgroundColor: 'rgb(0,0,0,0)', borderRadius: '50px' }}>
                <CardActionArea component={Link} to={route}>
                    <CardMedia
                        component="img"
                        image={img}
                        alt={title}
                        sx={{
                            width: imgWidth,
                            height: imgHeight,
                            margin: '0 auto',
                            zIndex: 1000,
                        }}
                    />
                    <Card elevation={2} sx={{
                        position: 'relative', bottom: 100, zIndex: -1,
                        borderRadius: '50px'
                    }}>
                        <CardContent >
                            <Grid container justifyContent="center" pt={10}>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component="div"
                                    textAlign='center'
                                    sx={{
                                        width: '100%',
                                        textTransform: 'capitalize',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                    }}>
                                    {title}
                                </Typography>
                                {children}
                            </Grid>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Card>
        </>
    )
}
