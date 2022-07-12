import React from "react";

function Error(props) {
  return (
    <div id="error">
      <div className="error-container">
        <div className="title">
          <h3>Error</h3>
        </div>
        <div>
          <button className="close" onClick={() => props.onClose()}>
            close
          </button>
        </div>
      </div>
      <p> {props.message} </p>
    </div>
  );
}

export default Error;
