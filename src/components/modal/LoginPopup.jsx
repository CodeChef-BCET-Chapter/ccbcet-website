import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./LoginPopup.module.css";

import Login from "../login/Login";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className=" bg-red-600 p-2 text-center text-xl text-white">
        Please Login
      </header>
      <div className="p-5 text-center text-2xl text-gray-800">
        You need to login before registeration.
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Cancel</Button>
        <div className="m-3 flex items-center rounded-lg bg-gray-600">
          <Login />
        </div>
      </footer>
    </Card>
  );
};

const LoginPopup = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default LoginPopup;
