import "../style.css";
import React, { useContext, useState } from "react";
import ShowAdd from "./ShowAdd";
import TodoAdd from "./TodoAdd";
import { ThemeContext } from "./context/themeContext";

const App = () => {

  const [todoList, setTodoList] = useState([]);
  const [editValue, setEditValue] = useState("");
  function handleSubmit(value) {
    console.log(value);
    setTodoList([...todoList, { id: todoList.length + 1, value }]);
  }
  function handledelete(id) {
    const newTodos = todoList.filter((t) => t.id !== id);
    console.log(newTodos);
    setTodoList(newTodos);
  }
  function handleEdit(value) {
    setEditValue(value);
  }
  function changeTodoList(value) {
    const newArry = [...todoList];
    const index = todoList.findIndex((t) => t.id === value.id);
    newArry.splice(index, 1, value);
    setTodoList(newArry);
    setEditValue("");
  }

  // using usecontext to change the app theme
  const theme = useContext(ThemeContext);

  const [mode, setMode] = useState("lightMode");

  return (
    <ThemeContext.Provider value={mode}>
      <div className={`${mode}`}>
        <button
          onClick={() =>
            setMode("lightMode" === mode ? "darkMode" : "lightMode")
          }
        >
          mode
        </button>
        <TodoAdd
          onSubmit={handleSubmit}
          setEdit={editValue}
          addEdit={changeTodoList}
        />
        <ShowAdd onDelete={handledelete} todos={todoList} onEdit={handleEdit} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
