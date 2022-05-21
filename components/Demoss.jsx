import React, { useContext } from "react";
import Button from "./Button";
import { Context } from "./Context";
import useDemo from "./useDemo";
const Demoss = ({ firstname, lastname }) => {
  const { state, dispatch } = useContext(Context);
  const { practice, variabel } = useDemo();
  return (
    <div>
      {state}
      <Button
        label={"click me"}
        type={"submit"}
        disabled={false}
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      />
      <div>{practice()}</div>
      <div>{variabel}</div>
      {firstname}
    </div>
  );
};

export default Demoss;
