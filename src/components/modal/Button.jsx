import React from "react";


const Button = (props) => {
  return (
    <button
      className="  rounded-lg px-3 m-3 text-black ring-2 ring-gray-500 hover:bg-gray-600 hover:text-white"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
