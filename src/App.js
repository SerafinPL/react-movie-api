import "./App.css";

import Search from "./components/Search";
import List from "./components/List";

import DataContextProvider from "./Context/dataContext";

import { HashRouter} from "react-router-dom";


import { Route, Routes } from "react-router-dom";

import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
      <HashRouter basename="/">
      
       

        <Container />
        
        </HashRouter>
      </DataContextProvider>
    </div>
  );
}

export default App;
