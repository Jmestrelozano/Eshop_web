import { useState } from "react";

export const UseForm = (initialState = {}) => {
  const [state, setstate] = useState(initialState);

  const handleOnchange = ({ target }) => {
    setstate({ ...state, [target.name]: target.value });
  };

  return [state, handleOnchange];
};
