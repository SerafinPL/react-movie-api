import "./App.css";

import Search from "./components/Search";
import List from "./components/List";

import DataContextProvider from "./Context/dataContext";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <header className="App-header">
          <Search />
          <List />
        </header>
      </DataContextProvider>
    </div>
  );
}

export default App;
