import { useState, useRef, useEffect, useContext } from "react";

import TextField from "@mui/material/TextField";

import useFetchData from "../hooks/fetchHook";

import { DataContext } from "../Context/dataContext";

const InputSearch = (props) => {
  const { films, setFilms, searchValue, setSearchValue } =
    useContext(DataContext);

  const { fetchData, data } = useFetchData();

  const inputEl = useRef();

  

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue === inputEl.current.value) {
        fetchData(searchValue, 1);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    setFilms(data);
  }, [data]);

  return (
    <>
      <TextField
        inputRef={inputEl}
        id="filled-basic"
        label="Search Movie"
        variant="filled"
        value={searchValue}
        onChange={handleChange}
      />
    </>
  );
};

export default InputSearch;
