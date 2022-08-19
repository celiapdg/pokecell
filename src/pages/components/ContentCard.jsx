import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const ContentCard = ({ title,
    img = "../src/assets/habitat/null.jpeg",
    route = '',
    variant,
    children, className = '',
    elevation = 1 }) => {
    return (
        <Card elevation={0}>
            <CardActionArea className={className} component={Link} to={route}>
                <CardMedia
                    component="img"
                    height="240"
                    image={img}
                    alt={title}
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
