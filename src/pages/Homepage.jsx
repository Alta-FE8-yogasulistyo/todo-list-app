// import library
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

// import file
import Navbars from "../component/Navbars";
import Inputtodo from "../component/Inputtodo";
import Listtodo from "../component/Listtodo";

const Homepage = () => {
  // initial state
  const [list, setList] = useState([]);

  const [todo, setTodo] = useState({
    content: "",
    description: "",
  });

  // Fetch API
  const getData = () => {
    axios.get("https://api.todoist.com/rest/v1/tasks").then((res) => setList(res.data));
  };

  //   handle change
  const handleChange = (e) => {
    let newItem = { ...todo };
    newItem[e.target.name] = newItem[e.target.value];
    setTodo(newItem);
  };

  //   handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://api.todoist.com/rest/v1/tasks/", todo).then(() => {
      handleClear();
      getData();
    });
  };
  // handleClear
  const handleClear = () => {
    let newItem = { ...todo };
    newItem["content"] = "";
    newItem["description"] = "";
    setTodo(newItem);
  };

  //   Delete
  const handleDelete = ({ id }) => {
    axios.delete(`https://api.todoist.com/rest/v1/tasks/${id}`).then(() => {
      getData();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbars title="Homepage" detail="Detail" />
      <Inputtodo todo={todo} setTodo={setTodo} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Listtodo list={list} handleDelete={handleDelete} />
    </>
  );
};

export default Homepage;
