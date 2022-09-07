// import library
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import file
import Homepage from "./pages/Homepage";

const App = () => {
  // set Token bearer
  axios.defaults.headers.common = {
    Authorization: "Bearer " + "62e5a2372cdc7ded0f0b283da6ef3821f82bd4fe",
  };
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
