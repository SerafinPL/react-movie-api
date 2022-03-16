import { Route, Routes, useNavigate } from "react-router-dom";

import FullMovie from "./FullMovie";

import SearchConsole from "./SearchConsole";

const Container = (props) => {
  return (
    <main>
      <Routes>
        <Route path={"/:code"} exact element={<FullMovie />} />
        <Route path="/" element={<SearchConsole />} />
      </Routes>
    </main>
  );
};

export default Container;
