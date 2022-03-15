import { useState, useRef, useEffect } from "react";

import TextField from "@mui/material/TextField";

import useFetchData from '../hooks/fetchHook'
import { from } from "@apollo/client";

const InputSearch = (props) => {

  const {fetchData, data} = useFetchData();

  const inputEl = useRef();

  const [value, setValue] = useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(inputEl.current.value);
  };

  useEffect(() => {

    const timer = setTimeout(() => {
      if (value === inputEl.current.value){
        fetchData(value);
      }

    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  
  useEffect(() => {

    console.log(data.Response)
  }, [data]);



  return (
    <>
      <TextField
        inputRef={inputEl}
        id="filled-basic"
        label="Search Movie"
        variant="filled"
        value={value}
        onChange={handleChange}
      />
      
    </>
  );
};

export default InputSearch;
