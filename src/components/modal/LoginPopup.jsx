import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./LoginPopup.module.css";

import Login from "../login/Login"
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className=" bg-red-500">Modal</header>
      <div className="text-xl">Please login please</div>
      <footer className={classes.actions}>
        <Login />
        <Button onClick={props.onConfirm}>Okay hfgh</Button>
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
