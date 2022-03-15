import { useContext, useState, useEffect } from "react";

import TextField from "@mui/material/TextField";

import useFetchData from '../hooks/fetchHook'

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Pagination,
  Box,
  CircularProgress
} from "@mui/material";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import TheatersIcon from "@mui/icons-material/Theaters";

import { DataContext } from "../Context/dataContext";

const ListMove = (props) => {
  const { films, setFilms, searchValue, setSearchValue } = useContext(DataContext);

  const { fetchData, data } = useFetchData();



  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
        
    fetchData(searchValue, value)
  };

  let view = <CircularProgress/>;

  useEffect(() => {
    setFilms(data);
  }, [data]);

  if (films.Response === "True") {
    view = (
      <Box>
        <List>
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
                <ListItemText primary={film.Title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Pagination
          count={parseInt(films.totalResults / 10) + 1}
          color="primary"
          showFirstButton
          showLastButton
          page={page}
          onChange={handleChange}
        />
      </Box>
    );
  } else {
    view = films.Error;
  }

  return <>{view}</>;
};

export default ListMove;
