import "./App.css";

import DataContextProvider from "./Context/dataContext";

import { HashRouter } from "react-router-dom";

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
