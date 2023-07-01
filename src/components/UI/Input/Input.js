import React, { forwardRef } from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  const inputClass = `${props.className ? props.className : classes.input}`;
  return (
    <input
      className={inputClass}
      ref={ref}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
});
export default Input;
