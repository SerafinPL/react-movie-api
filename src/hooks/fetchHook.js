import { useState, useCallback } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  const fetchData = useCallback((search, page) => {
    fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_CODE}&s=*${search}*&page=${page}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "true",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((res) => {
        setData(res);

        return res;
      })
      .catch((err) => {
        console.log(err.Error);

        if ((err = "Too Many Requests")) {
          window.alert("Zbyt dużo zapytań do Bazy");
        }

        setError("");
      });
  }, []);

  const fetchMovieData = useCallback((id) => {
    fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_CODE}&i=${id}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "true",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((res) => {
        setMovie(res);

        return res;
      })
      .catch((err) => {
        console.log(err.Error);

        setError("");
      });
  }, []);

  return {
    fetchData: fetchData,
    fetchMovieData: fetchMovieData,
    data: data,
    movie: movie,
  };
};

export default useFetchData;
