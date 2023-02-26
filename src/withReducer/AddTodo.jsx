import React, { useContext, useEffect, useState } from "react";
import callTodosApi from "../requests/todosApi";
import DispatchContext1 from "./context/dispatchContext1";
import DispatchContext2 from "./context/dispatchContext2";

const AddTodo = ({ editValue }) => {
  callTodosApi();

  const [value, setValue] = useState("");
  const dispatch1 = useContext(DispatchContext1);
  const dispatch2 = useContext(DispatchContext2);
  useEffect(() => {
    setValue(editValue.title);
  }, [editValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="add todo"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() => {
          if (editValue) {
            dispatch1({
              type: "EDITTODO",
              payload: { id: editValue.id, title: value },
            });
            dispatch2({ type: "CLEAREDIT" });
            setValue("");
          } else {
            dispatch1({ type: "ADDTODO", payload: value });
            setValue("");
          }
        }}
      >
        {editValue ? "edit" : "add"}
      </button>
    </div>
  );
};

export default AddTodo;
