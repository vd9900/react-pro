import React from "react";

const ShowAdd = ({ todos, onDelete, onEdit }) => {
//   console.log(todos);
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.value}
              <button onClick={() => onEdit(todo)}>edit</button>
              <button onClick={() => onDelete(todo.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowAdd;
