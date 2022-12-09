import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

function Preview() {
    return (
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                image=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    米 プレビュー
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default Preview;
