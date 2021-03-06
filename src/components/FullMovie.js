import {
  Box,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import BasicRating from "./Rating";

import { useEffect } from "react";

import { useParams } from "react-router-dom";

import useFetchData from "../hooks/fetchHook";

import { useNavigate } from "react-router-dom";

const FullMovie = () => {
  const { fetchMovieData, movie } = useFetchData();

  let navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchMovieData(params.code);
  }, []);

  let params = useParams();

  let view = (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CircularProgress />
    </Box>
  );

  if (Object.keys(movie).length === 0 && movie.constructor === Object) {
    console.log("start");
    view = (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          pb:3
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    view = (
      <Box
        sx={{
          width: "100%",

          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          pb:3
        }}
      >
        <Button variant="contained" onClick={clickHandler} sx={{ m: 3 }}>
          Back to List
        </Button>
        <Card sx={{ maxWidth: 'Min(500px, 95vw)' }}>
          <CardMedia
            component="img"
            height="400"
            image={movie.Poster}
            alt="no Poster"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" sx={{ p: 3 }}>
              {movie.Title}
            </Typography>
            <Typography variant="h5" sx={{ p: 2 }}>
              Actors: {movie.Actors}
            </Typography>
            <Typography variant="body2" sx={{ p: 2 }}>
              {movie.Plot}
            </Typography>
            <Typography variant="h6" sx={{ p: 2 }}>
              Rating IMDb:
              {movie.Ratings[0] ? movie.Ratings[0].Value : " no Rating"}
            </Typography>
            <Typography variant="h6" sx={{ p: 2 }}>
              <BasicRating identy={movie.imdbID} />
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return view;
};

export default FullMovie;
