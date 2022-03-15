import { Box, CircularProgress } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState, useRef, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import useFetchData from "../hooks/fetchHook";

const FullMovie = () => {
  const { fetchMovieData, movie } = useFetchData();

  useEffect(() => {
    fetchMovieData(params.code);
    console.log(movie);
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);
  console.log(movie);

  let params = useParams();

  let view = <CircularProgress />;

  if (Object.keys(movie).length === 0 && movie.constructor === Object) {
    console.log("start");
  } else {
    view = (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={movie.Poster}
            alt="movie poster"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.Plot}
            </Typography>
            <Typography variant="h6" color="text.secondary">
                Rating IMDb: 
            
              {movie.Ratings[0].Value}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return view;
};

export default FullMovie;
