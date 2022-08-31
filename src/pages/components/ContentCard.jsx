import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const ContentCard = ({ title,
    img = "../src/assets/habitat/null.jpeg",
    route = '',
    variant,
    children, fixed,
    className = '',
    elevation = 1 }) => {

    let imgWidth = {}
    fixed ?
        imgWidth = '100%'
        : imgWidth = { xs: 100, sm: 150, md: 200, xl: '100%' }

    let imgHeight = {}
    fixed ?
        imgHeight = 240
        : imgHeight = { xs: 100, sm: 150, md: 200, xl: '100%' }

    return (
        <Card elevation={elevation} sx={{ borderRadius: '50px' }}>
            <CardActionArea className={className} component={Link} to={route}>
                <CardMedia
                    component="img"
                    image={img}
                    alt={title}
                    sx={{ width: imgWidth, height: imgHeight, margin: '0 auto' }}
                />
                <CardContent >
                    <Grid container justifyContent="center">
                        <Typography
                            gutterBottom
                            variant={variant}
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
            </CardActionArea>

        </Card>
    )
}
