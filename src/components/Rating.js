import { useState, useContext, useEffect } from "react";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { DataContext } from "../Context/dataContext";

const BasicRating = (props) => {
  const [value, setValue] = useState(2);

  const [scored, setScored] = useState(false);

  const { films, setFilms, rated, setRated } = useContext(DataContext);

  const [rateFromContext] = rated.filter(
    (item) => item.identy === props.identy
  );

  useEffect(() => {
    if (rateFromContext !== undefined) {
      setScored(true);
      setValue(rateFromContext.rate);
    }
  }, []);

  let view = null;

  console.log(rated);

  if (scored) {
    view = (
      <Box>
        <Typography component="legend">You've rated this!</Typography>
        <Rating name="simple-controlled" value={value} readOnly />
      </Box>
    );
  } else {
    view = (
      <Box>
        <Typography component="legend">Your rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            setScored(true);

            const [allMovieData] = films.Search.filter(
              (item) => item.imdbID === props.identy
            );
            console.log(allMovieData);

            const thisFilm = {};

            thisFilm.identy = props.identy;

            thisFilm.rate = newValue;

            thisFilm.Title = allMovieData.Title;
            thisFilm.Year = allMovieData.Year;
            thisFilm.Type = allMovieData.Type;

            setRated((state) => ([...state, thisFilm]));
          }}
        />
      </Box>
    );
  }

  return view;
};

export default BasicRating;
