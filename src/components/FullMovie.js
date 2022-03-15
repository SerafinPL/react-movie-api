









import {useParams } from "react-router-dom";



const  FullMovie = () => {
  let params = useParams();
  return <h1>Invoice {params.code}</h1>;
}

export default FullMovie;