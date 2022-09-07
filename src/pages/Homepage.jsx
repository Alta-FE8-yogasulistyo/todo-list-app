// import library
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

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
    if (edit === false) {
      axios.post("https://api.todoist.com/rest/v1/tasks/", todo).then(() => {
        handleClear();
        getData();
      });
    } else {
      axios.post(`https://api.todoist.com/rest/v1/tasks/${todo.id}`, todo).then(() => {
        handleClear();
        setEdit(false);
        getData();
      });
    }
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

  // Edit data
  const handleEdit = ({ id }) => {
    axios.get(`https://api.todoist.com/rest/v1/tasks/${id}`).then((respon) => {
      setTodo(respon.data);
      setEdit(true);
    });
  };

  // goto detail
  const handleDetail = (data) => {
    navigate("/Detail", {
      state: {
        content: data.content,
        description: data.description,
      },
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbars title="Homepage" detail="Detail" />
      <Inputtodo todo={todo} setTodo={setTodo} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Listtodo list={list} handleDelete={handleDelete} handleEdit={handleEdit} handleDetail={handleDetail} />
    </>
  );
};

export default Homepage;
