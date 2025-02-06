
import React, { useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef(null);


  const handleFocus = () => {
    inputRef.current.focus() // Access the DOM node directly
  };


  return (
    <div>
        <h1>Example of useRef</h1>
      <input ref={inputRef} type="text" placeholder="Focus me" />
      <button onClick={handleFocus}>Focus Input</button>

    </div>
  );
};


export default UseRef;
