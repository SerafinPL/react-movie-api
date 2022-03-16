import { useEffect, useContext } from "react";

import TextField from "@mui/material/TextField";

import useFetchData from "../hooks/fetchHook";

import { DataContext } from "../Context/dataContext";

const InputSearch = (props) => {
  const { page, setPage, setFilms, searchValue, setSearchValue } =
    useContext(DataContext);

  const { fetchData, data } = useFetchData();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    fetchData(event.target.value, 1);
    setPage(1);
  };

  useEffect(() => {
    fetchData(searchValue, page);
  }, []);

  useEffect(() => {
    setFilms(data);
  }, [data]);

  return (
    <>
      <TextField
        id="filled-basic"
        label="Search Movie"
        variant="outlined"
        value={searchValue}
        onChange={handleChange}
        InputLabelProps={{style: { color: '#fff' }}}
        InputProps={{style: { borderColor: '#fff' }}}
        sx={{ width: "Min(80vw, 800px)", m: 3, input: { color: '#fff', fill: '#fff' }, fieldset:{borderColor: '#fff!important', hover:{borderColor: '#fff'} }   }}
        
      />
    </>
  );
};

export default InputSearch;
