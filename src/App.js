import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import component
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  //set bearer token API
  axios.defaults.headers.common = {
    Authorization: `Bearer 62e5a2372cdc7ded0f0b283da6ef3821f82bd4fe`,
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
