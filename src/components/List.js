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

const ListMove = (props) => {
  let view = null;

  const { films, setFilms, searchValue, setSearchValue } =
    useContext(DataContext);

  const { fetchData, data } = useFetchData();

  const [paginationStatus, setpaginationStatus] = useState(false);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setpaginationStatus(true);

    fetchData(searchValue, value);
  };

  useEffect(() => {
    setFilms(data);
    setpaginationStatus(false);
  }, [data]);

  if (paginationStatus) {
    view = <CircularProgress />;
  } else {
    if (films.Response === "True") {
      view = (
        <Box>
          <List sx={{minHeight: '80vh'}}>
            {films.Search.map((film) => (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {film.Type === "movie" ? (
                      <TheatersIcon />
                    ) : film.Type === "series" ? (
                      <ClosedCaptionIcon />
                    ) : (
                      <HighQualityIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={film.Title} secondary={film.Year} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    } else {
      view = films.Error;
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
      />
    </>
  );
};

export default ListMove;
