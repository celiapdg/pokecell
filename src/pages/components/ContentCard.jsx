import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const ContentCard = ({ title,
    img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    route,
    children }) => {
    return (
        <Card >
            <CardActionArea component={Link} to={route}>
                <CardMedia
                    component="img"
                    height="240"
                    image={img}
                    alt={title}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ textTransform: 'capitalize' }}>
                        {title}
                    </Typography>
                    {children}
                </CardContent>
            </CardActionArea>

        </Card>
    )
}
