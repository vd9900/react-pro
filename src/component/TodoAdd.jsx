import React, { useEffect, useRef, useState } from "react";

// const TodoAdd = ({ onSubmit, setEdit, addEdit }) => {
//   const [value, setValue] = useState("");
//   const handleChange = (e) => {
//     // e.target.value = "";
//     setValue(e.target.value);
//   };
//   const handleClick = () => {
//     if (setEdit) {
//       addEdit({ id: setEdit.id, value });
//       setValue("");
//     } else {
//       onSubmit(value);
//       setValue("");
//     }
//     // console.log(setEdit);
//   };
//   useEffect(() => {
//     setValue(setEdit.value);
//   }, [setEdit]);

//   return (
//     <div>
//       <input
//         onChange={handleChange}
//         type={"text"}
//         value={value}
//         placeholder="add todo"
//       />
//       <button onClick={handleClick}>{setEdit ? "edit" : "Add"}</button>
//     </div>
//   );
// };

const TodoAdd = ({ onSubmit, setEdit, addEdit }) => {
  const [value, setValue] = useState("");
  const todoRef = useRef("");

  const handleChange = (e) => {
    // e.target.value = "";
    setValue(e.target.value);
  };
  const handleClick = () => {
    if (setEdit) {
      addEdit({ id: setEdit.id, value: todoRef.current.value });
      todoRef.current.value = "";
    } else {
      !todoRef.current.value && alert("enter the todo");
      onSubmit(todoRef.current.value);
      todoRef.current.value = "";
    }
    // console.log(setEdit);
  };
  useEffect(() => {
    console.log(setEdit);
    // console.log(todoRef.current.value);

    if (setEdit) todoRef.current.value = setEdit.value;
  }, [setEdit]);

  return (
    <div>
      <input
        // onChange={handleChange}
        type={"text"}
        // value={value}
        placeholder="add todo"
        ref={todoRef}
      />
      <button onClick={handleClick}>{setEdit ? "edit" : "Add"}</button>
    </div>
  );
};

export default TodoAdd;
