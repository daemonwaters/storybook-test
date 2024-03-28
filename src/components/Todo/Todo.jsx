import React from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import "./Todo.css"

function Todo({ text, checked }) {
  return (
    <div className="todo">
      <p
        style={{
          textDecoration: checked ? "line-through" : "",
          color: checked ? "green" : "",
        }}
      >
        {text}
      </p>
      <div className="controls">
        <Button variant="check" />
        <Button />
      </div>
    </div>
  );
}


Todo.prototype = {
    title : PropTypes.string.isRequired,
    checked : PropTypes.bool.isRequired
}




export default Todo;
