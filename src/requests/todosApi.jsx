import axios from "axios";
import { useEffect } from "react";
import {
  useTodoDispatch1,
  useTodoDispatch2,
} from "../custom/hooks/TodoDispatch";

const callTodosApi = () => {
  const dispatch = useTodoDispatch1();
  const url = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => dispatch({ type: "ONLOAD", payload: res.data }));
  }, [url]);
};

export default callTodosApi;
