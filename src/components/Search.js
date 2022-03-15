import { useState, useRef, useEffect } from "react";

import TextField from "@mui/material/TextField";

const InputSearch = (props) => {
  const inputEl = useRef();


  const [value, setValue] = useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(inputEl.getValue())
    
  };

  useEffect(() => {
    

    const timer = setTimeout((event) => {
      console.log(event.target)
      
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);

  console.log(inputEl.getValue())
  console.log('value: '+value)
  return (
    <>
    
      <TextField
        ref={inputEl}
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
