// import library
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import file
import Homepage from "./pages/Homepage";
import DetailTodo from "./pages/DetailTodo";

const App = () => {
  // set Token bearer
  axios.defaults.headers.common = {
    Authorization: `Bearer 62e5a2372cdc7ded0f0b283da6ef3821f82bd4fe`,
    "Content-Type": "application/json",
  };
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/Detail" element={<DetailTodo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
