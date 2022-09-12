import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav/Nav";
import { useState, useEffect } from "react";

import Todo from "./views/Todo/Todo";

import Fruit from "./views/Fruit/Fruit";

import Text from "./views/Text/Text";

import Covid19 from "./Covid19/Covid19";

// import CountDown from "./Countdown/Countdown";
import { CountDown, NewCountDown } from "./Countdown/Countdown";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//JSX : viết code html trong javascript
//babel : dịch
const App = () => {
  // let teacher = "Eric"; //String
  let year = 2022;
  let obj = {
    // name: "Hưng",
    age: "20",
    height: "165",
    channel: "Hoi Dan IT",
  };
  let link = "https://www.youtube.com/watch?v=7e2Asrs2NGM";

  let [name, setName] = useState("Hưng");

  // const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");

  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "Watching TV",
      type: "Hưng",
    },
    {
      id: "todo2",
      title: "Go Swimming",
      type: "Mạnh",
    },
    {
      id: "todo3",
      title: "Playing football",
      type: "Hiệp",
    },
    {
      id: "todo4",
      title: "Doing homework",
      type: "Hưng",
    },
  ]);

  useEffect(() => {
    console.log("run use effect title");
  }, [title]);

  useEffect(() => {
    console.log("run use effect todos");
  }, [todos]);

  const handleOnChangeInput = (event) => {
    setTitle(event.target.value);
  };

  const handleEventClick = (event) => {
    console.log(">>> New title : ", title);
    if (!title) {
      alert("empty input");
      return;
    }
    let newTodo = {
      id: "todo" + Math.floor(Math.random() * 10000),
      title: title,
      type: "Eric",
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  const deleteDataTodo = (id) => {
    // alert(id);
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
    // console.log("New currentTodos : ", currentTodos);
  };

  const onTimesup = () => {
    alert("Time up");
  };

  // re-render
  return (
    <Router>
      <div className="App">
        {/* {console.log('check obj : ', obj)} */}
        {/* muốn sử dụng câu lệnh javascript trong JSX phải có dấu {} */}
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <h1>
            Hello world with Reactjs and {name} in {year} !
          </h1>

          {/* <h2>My name is {obj.name}</h2> */}
          {/* <h2>I'm {obj.age} years old</h2>
        <h2>I study reactjs in {obj.channel}</h2>
        <p style={{ color: "red", fontSize: "20px", marginTop: "15px" }}>
          {JSON.stringify(obj)}
        </p>
        <a href={link} target="_blank" rel="noreferrer">
          Visit my favorite music
        </a> */}

          {/* 

        <Todo
          todos={todos.filter((item) => item.type === "Hưng")}
          address={`Hưng's todos`}
          deleteDataTodo={deleteDataTodo}
        />
         */}
          <Switch>
            <Route path="/" exact>
              <Covid19 />
            </Route>
            <Route path="/timer">
              <CountDown onTimesup={onTimesup} />
              <span>----------------</span>
              <NewCountDown onTimesup={onTimesup} />
            </Route>
            <Route path="/todo">
              <Text />

              <Todo
                todos={todos}
                address={"All todos"}
                deleteDataTodo={deleteDataTodo}
              />
              <input
                type="text"
                // value={address}
                value={title}
                onChange={(event) => handleOnChangeInput(event)}
              />
              <button
                type="button"
                onClick={(event) => handleEventClick(event)}
              >
                Click me
              </button>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
};

export default App;
