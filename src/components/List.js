import { useContext, useState, useEffect } from "react";

import TextField from "@mui/material/TextField";

import useFetchData from "../hooks/fetchHook";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Pagination,
  Box,
  CircularProgress,
} from "@mui/material";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import TheatersIcon from "@mui/icons-material/Theaters";

import { DataContext } from "../Context/dataContext";

import { useNavigate } from "react-router-dom";

const ListMove = (props) => {
  let view = <CircularProgress />;

  let navigate = useNavigate();

  const clickHandler = (id) => {
    navigate("/" + id);
  };

  const { films, setFilms, searchValue, setSearchValue, page, setPage } =
    useContext(DataContext);

  const { fetchData, data } = useFetchData();

  const [paginationStatus, setpaginationStatus] = useState(false);

  

  const handleChange = (event, value) => {
    setPage(value);
    setpaginationStatus(true);

    fetchData(searchValue, value);
  };

  useEffect(() => {
    setFilms(data);
    setpaginationStatus(false);
  }, [data]);

  console.log(films);

  if (paginationStatus) {
    view = <CircularProgress />;
  } else {
    if (films.Response === "True") {
      view = (
        <Box sx={{ minHeight: "80vh", width: "100%" }}>
          <List sx={{ minHeight: "80vh", width: "100%" }}>
            {films.Search.map((film) => (
              <ListItem disablePadding key={film.imdbID}>
                <ListItemButton onClick={() => clickHandler(film.imdbID)}>
                  <ListItemIcon>
                    {film.Type === "movie" ? (
                      <TheatersIcon />
                    ) : film.Type === "series" ? (
                      <ClosedCaptionIcon />
                    ) : (
                      <HighQualityIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#000" }}
                    primary={film.Title}
                    secondary={film.Year}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    } else {
      view = (<Box sx={{ minHeight: "80vh", width: "100%" }}>{films.Error}</Box>);
    }
  }

  return (
    <>
      {view}{" "}
      <Pagination
        count={parseInt(films.totalResults / 10) + 1}
        color="primary"
        showFirstButton
        showLastButton
        page={page}
        onChange={handleChange}
        siblingCount={0}
      />
    </>
  );
};

export default ListMove;
