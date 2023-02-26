import React, { useContext } from "react";
import VideoContext from "./context/videosContext";
import {
  useTodoDispatch1,
  useTodoDispatch2,
} from "../custom/hooks/TodoDispatch";
let num = 0;
const ShowTodo = () => {
  console.log("app render", num);
  num++;
  const lists = useContext(VideoContext);
  console.log(lists);
  const dispatch1 = useTodoDispatch1();
  const dispatch2 = useTodoDispatch2();
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {lists.map((list) => {
          return (
            <li key={list.id}>
              {list.title}
              <button
                onClick={() =>
                  dispatch2({ type: "ADDEDITVALUE", payload: list })
                }
              >
                edit
              </button>
              <button
                onClick={() =>
                  dispatch1({ type: "DELETETODO", payload: list.id })
                }
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowTodo;
