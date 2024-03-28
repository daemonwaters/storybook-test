import React from "react";
import PropTypes from "prop-types";
import { FaCheck, FaPlus, FaTrash } from "react-icons/fa";
import "./Button.css";

function Button({ title, variant = 'add', color, backgroundColor, onClick, size }) {
  return (
    <button
    
      onClick={onClick}
      style={{
        color,
        backgroundColor,
        padding: size,
      }}
    >
      {title}
      {variant == "add" ? (
        <FaPlus />
      ) : variant == "check" ? (
        <FaCheck />
      ) : (
        <FaTrash />
      )}
    </button>
  );
}

Button.prototype = {
  title: PropTypes.string,
  variant: PropTypes.oneOf['add','check'],
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.number,
};

export default Button;
