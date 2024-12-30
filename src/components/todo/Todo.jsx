import React, { useReducer, useState } from "react";

const initialState = {
  count: 0,
  show: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + action.payload };
    case "DEC":
      return state.count <= 0 ? state : { ...state, count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "SHOW":
      return { ...state, show: !state.show };

    default:
      return state;
  }
};

const Todo = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex gap-5">
      <button
        className="select-none"
        onClick={() => setCount((state) => state + 1)}
      >
        Todo {count}
      </button>
      <h1>{state.count}</h1>
      <button
        className="select-none"
        onClick={() => dispatch({ type: "INC", payload: 1 })}
      >
        Increment-1
      </button>
      <button
        className="select-none"
        onClick={() => dispatch({ type: "INC", payload: 10 })}
      >
        Increment-10
      </button>
      <button
        className="select-none"
        onClick={() => dispatch({ type: "INC", payload: 100 })}
      >
        Increment-100
      </button>
      <button className="select-none" onClick={() => dispatch({ type: "DEC" })}>
        Decrement
      </button>
      <button
        className="select-none"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "SHOW" })}>
        {state.show ? "Show Less" : "Show More"}
      </button>
      {state.show && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          minima? Earum quisquam odit consectetur officiis, provident officia
          repellat aliquam distinctio dolore suscipit ducimus nesciunt dolorem?
        </p>
      )}
    </div>
  );
};

export default Todo;
