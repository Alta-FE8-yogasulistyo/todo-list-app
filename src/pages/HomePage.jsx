//import library
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputTodo from "../component/InputTodo";
import ListTodo from "../component/ListTodo";
import Navbars from "../component/Navbars";
import background from "../background/background.png";

const HomePage = () => {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState({
    content: "",
    description: "",
  });

  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  //Get API
  const getApi = () => {
    axios.get("https://api.todoist.com/rest/v1/tasks").then((respon) => setTodo(respon.data));
  };

  useEffect(() => {
    getApi();
  }, []);

  //input data
  const handleChange = (event) => {
    let newItem = { ...item };
    newItem[event.target.name] = event.target.value;
    setItem(newItem);
  };
  //submit data
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(edit);
    if (edit === true) {
      axios.post(`https://api.todoist.com/rest/v1/tasks/${item.id}`, item).then(() => {
        handleClear();
        setEdit(false);
        getApi();
      });
    } else {
      axios.post(`https://api.todoist.com/rest/v1/tasks/`, item).then(() => {
        handleClear();
        getApi();
      });
    }
  };

  //clear data
  const handleClear = () => {
    let newItem = {};
    newItem["content"] = "";
    newItem["description"] = "";
    setItem(newItem);
  };

  //Delete data
  const handleDelete = ({ id }) => {
    axios.delete(`https://api.todoist.com/rest/v1/tasks/${id}`).then(() => {
      getApi();
    });
  };

  //edit data

  const handleEdit = ({ id }) => {
    axios.get(`https://api.todoist.com/rest/v1/tasks/${id}`, item).then((respon) => {
      console.log(respon.data);
      setItem(respon.data);
      setEdit(true);
    });
  };

  //Detail
  const handleDetail = (data) => {
    navigate("/detail", {
      state: {
        content: data.content,
        description: data.description,
        id: data.id,
        url: data.url,
      },
    });
  };

  return (
    <div class="container" style={{ backgroundImage: `url(${background})` }}>
      <Navbars title="Homepage" detail="Detail" />
      <InputTodo item={item} setItem={setItem} handleChange={handleChange} handleSubmit={handleSubmit} />
      <ListTodo todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleDetail={handleDetail} />
    </div>
  );
};

export default HomePage;
