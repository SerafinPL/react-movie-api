import Search from "./Search";
import List from "./List";
import RatedList from "./RatedList";

import { Paper } from "@mui/material";

const SearchConsole = (props) => (
  <>
    <header className="App-header">
      <Search />
      <Paper elevation={3} sx={{ width: "Min(99vw, 800px)", m: 3, pb: 3 }}>
        <List />
      </Paper>
    </header>
    <div className="App-header black">
      <Paper elevation={3} sx={{ width: "Min(80vw, 800px)", m: 3, pb: 3 }}>
        <RatedList />
      </Paper>
    </div>
  </>
);

export default SearchConsole;
