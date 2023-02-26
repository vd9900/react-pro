import React, { useRef, useState } from "react";

let num = 0;
const counter = () => {
  const [count, setCount] = useState(0);
  const nameRef = useRef("");
  const messageRef = useRef("");

  function handleClick(e) {
    e.stopPropagation();
    if (!nameRef.current.value && !messageRef.current.value) {
      return alert("please fill the input");
    }
    alert(
      `hello ${nameRef.current.value} \n message: ${nameRef.current.value}`
    );
    // setCount((count) => count + 1);
    // num++;
    // console.log(num);
  }
  return (
    <div>
      <div>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <input type="text" ref={messageRef} />
      </div>
      <button onClick={handleClick}>greet</button>
    </div>
  );
};

export default counter;
