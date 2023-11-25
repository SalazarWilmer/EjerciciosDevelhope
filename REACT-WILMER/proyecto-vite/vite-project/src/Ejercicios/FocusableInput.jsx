import React, { useEffect, useRef } from "react";

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="form-group">
      <label htmlFor="textInput">Input:</label>
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        id="textInput"
        placeholder="Enter text"
      />
    </div>
  );
};

export default FocusableInput;
