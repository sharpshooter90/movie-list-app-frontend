import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function MovieCard({ movieName, year, genre, coverImageURL }) {
  return (
    <Card sx={{ maxWidth: 545, minWidth: 320 }}>
      <CardMedia sx={{ height: 400 }} image={coverImageURL} title={movieName} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movieName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {genre} {year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
