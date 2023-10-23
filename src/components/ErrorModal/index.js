import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./index.css";

const ErrorModal = (props) => {
  const { errorMsg, closeModel } = props;

  return (
    <div className="error-model">
      <p className="error-message">{errorMsg}</p>
      <button type="button" className="model-button" onClick={closeModel}>
        <RxCross2 className="cross-button" />
      </button>
    </div>
  );
};

export default ErrorModal;
