import { useState, useCallback } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchData = useCallback(( search) => {
    fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_CODE}&s=${search}`,
      {
        method: "GET",
      
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

        if (err = 'Too Many Requests'){

          window.alert('Zbyt dużo zapytań do Bazy')
        }

        setError('')

      });
  }, []);

  return {
    fetchData: fetchData,
    data: data,
    
  };
};

export default useFetchData;