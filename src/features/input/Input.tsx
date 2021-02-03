import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProfit } from "../profit/profitSlice";

const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      className="row"
      onSubmit={evt => {
        evt.preventDefault();
        dispatch(fetchProfit(text));
      }}
    >
      <input
        name="id"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Id goes here"
      />
      <button>$$$</button>
    </form>
  );
};

export default Input;
