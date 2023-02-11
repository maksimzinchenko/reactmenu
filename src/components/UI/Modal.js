import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// import classes from "./Modal.module.css";

import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
