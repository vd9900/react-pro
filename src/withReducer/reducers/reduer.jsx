import React from "react";

const reducer = (intialState, action) => {
  switch (action.type) {
    case "ONLOAD":
      return action.payload;
    case "ADDTODO":
      return [
        ...intialState,
        { id: intialState.length + 1, value: action.payload },
      ];
    case "DELETETODO": {
      return intialState.filter((t) => t.id !== action.payload);
    }
    case "EDITTODO": {
      const newArry = [...intialState];
      console.log(newArry);
      console.log(action.payload);
      const index = newArry.findIndex((t) => t.id === action.payload.id);
      console.log(index);
      newArry.splice(index, 1, action.payload);
      console.log(newArry);
      return newArry;
    }
    default:
      return intialState;
  }
};

export { reducer };
