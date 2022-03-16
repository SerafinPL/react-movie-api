import { useRef, useEffect, useContext } from "react";

import TextField from "@mui/material/TextField";

import useFetchData from "../hooks/fetchHook";

import { DataContext } from "../Context/dataContext";
import { SecurityUpdateGood } from "@mui/icons-material";

const InputSearch = (props) => {
  const { page,setPage,  setFilms, searchValue, setSearchValue } =
    useContext(DataContext);

  const { fetchData, data } = useFetchData();

  const inputEl = useRef();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    fetchData(event.target.value, 1);
    setPage(1);
  };

  

  useEffect(() => {
  //   // const timer = setTimeout(() => {
  //   //   if (searchValue === inputEl.current.value) {

        fetchData(searchValue, page);
        
        
  //     // }
  //   // }, 500);
  //   // return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

    setFilms(data);
  }, [data]);



  return (
    <>
      <TextField
        inputRef={inputEl}
        id="filled-basic"
        label="Search Movie"
        variant="outlined"
        value={searchValue}
        onChange={handleChange}
        sx={{ width: "Min(80vw, 800px)", m: 3 }}
      />
    </>
  );
};

export default InputSearch;
