import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CloseIcon from "@material-ui/icons/Close";

function Error(props) {
  return (
    <div id="error">
      <div className="error-container">
        <div className="title">
          <ErrorOutlineIcon className="error-icon" />
          <h3>Error</h3>
        </div>
        <div>
          <button className="close" onClick={() => props.onClose()}>
            <CloseIcon />
          </button>
        </div>
      </div>
      <p> {props.message} </p>
    </div>
  );
}

export default Error;
