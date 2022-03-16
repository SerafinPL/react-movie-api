import React, { useState } from "react";

export const DataContext = React.createContext({});

// eslint-disable-next-line
export default (props) => {
  const [films, setFilms] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [page, setPage] = useState(1);

  return (
    <DataContext.Provider
      value={{
        films: films,
        setFilms: setFilms,
        searchValue: searchValue,
        setSearchValue: setSearchValue,
        page: page,
        setPage: setPage,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
