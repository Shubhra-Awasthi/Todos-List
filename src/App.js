import './App.css';
import React, { useState, useEffect } from 'react';

import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { Todos } from './Components/Todos';
import About from './Components/About';
import AddTodo from './Components/AddTodo';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //todos list
  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    // console.log("I am onDelete of todo: ", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("Deleted", todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    // console.log("I am adding this todo: ", title, desc);
    let sno;

    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }


    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, myTodo]);

    console.log(myTodo);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);





  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />

        <Routes>
          <Route path="/" element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }/>
          <Route path="/about" element={<About />} />
        </Routes>




        <Footer />
      </Router>
    </>
  );
}

export default App;
