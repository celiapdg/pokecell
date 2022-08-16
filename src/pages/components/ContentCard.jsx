import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const ContentCard = ({ title, img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png", route }) => {
    return (
        <Card >
            <CardActionArea component={Link} to={route}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        No sé si añadiré texto aquí, quizá se podría hacer como children.
                        La imagen sí que debería pasarse como prop
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    )
}
