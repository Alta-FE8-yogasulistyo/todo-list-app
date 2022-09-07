import React from "react";
import { useLocation } from "react-router-dom";
import Navbars from "../component/Navbars";

const DetailPage = () => {
  const location = useLocation();

  return (
    <>
      <Navbars title="Homepage" />
      <div>
        <h1>{location.state.content}</h1>
        <p>{location.state.description}</p>
      </div>
    </>
  );
};

export default DetailPage;
