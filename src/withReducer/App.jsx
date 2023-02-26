import React, { useReducer, useState } from "react";
import ShowTodo from "./ShowTodo";
import AddTodo from "./AddTodo";
import { reducer } from "./reducers/reduer";
import { reducer2 } from "./reducers/reduer2.jsx";
import TodosContext from "./context/videosContext";
import DispatchContext1 from "./context/dispatchContext1";
import DispatchContext2 from "./context/dispatchContext2";

const App = () => {
  // get request to server

  //   const [todos, setTodos] = useState([]);
  const [todos, dispatch1] = useReducer(reducer, []);
  const [editValue, dispatch2] = useReducer(reducer2, "");

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext1.Provider value={dispatch1}>
        <DispatchContext2.Provider value={dispatch2}>
          <div>
            {/* <AddTodo
              dispatch1={dispatch1}
              dispatch2={dispatch2}
              editValue={editValue}
            /> */}
            {/* // with use context */}
            <AddTodo editValue={editValue} />
            {/* <ShowTodo dispatch1={dispatch1} dispatch2={dispatch2} lists={todos} /> */}
            {/* // with use context */}
            <ShowTodo />
          </div>
        </DispatchContext2.Provider>
      </DispatchContext1.Provider>
    </TodosContext.Provider>
  );
};

export default App;
