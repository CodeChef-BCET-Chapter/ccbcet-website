import React from "react";


const Button = (props) => {
  return (
    <button
      className=" bg-red-500 px-3 py-2 text-white"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
