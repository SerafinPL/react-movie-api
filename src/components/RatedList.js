import { useContext } from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  CircularProgress,
  Typography,
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

  const { rated } = useContext(DataContext);

  view = (
    <Box sx={{ minHeight: "80vh", width: "Min(80vw, 800px)", m: 3, mt:8 }}>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ color: "#000", textAlign: 'left' }}
      >
        Rated by You:
      </Typography>
      <List sx={{ minHeight: "80vh", width: "100%", }}>
        {rated.map((film) => (
          <ListItem disablePadding key={film.identy}>
            <ListItemButton onClick={() => clickHandler(film.identy)}>
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
                primary={`"${film.Title}" rate by You on ${film.rate}!`}
                secondary={film.Year}
              ></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return <>{view}</>;
};

export default ListMove;
