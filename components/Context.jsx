import { createContext } from "react";
import React, { useReducer } from "react";

export const Context = createContext();
const intitalValue = 0;
export const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;

    default:
      return state;
  }
};
const Contexts = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intitalValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Contexts;
