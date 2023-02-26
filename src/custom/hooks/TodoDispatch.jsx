import { useContext } from "react";
import DispatchContext1 from "../../withReducer/context/dispatchContext1";
import DispatchContext2 from "../../withReducer/context/dispatchContext2";

const useTodoDispatch2 = () => useContext(DispatchContext2);

const useTodoDispatch1 = () => useContext(DispatchContext1);

export { useTodoDispatch1, useTodoDispatch2 };
