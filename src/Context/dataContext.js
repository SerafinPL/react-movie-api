import React, { useState } from "react";

export const DataContext = React.createContext({});

// eslint-disable-next-line
export default (props) => {
  const [films, setFilms] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  return (
    <DataContext.Provider
      value={{
        films: films,
        setFilms: setFilms,
        searchValue: searchValue,
        setSearchValue: setSearchValue,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
