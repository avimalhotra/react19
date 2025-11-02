import { useState, useEffect, useRef } from "react";

export function Example() {

    const ref=useRef(0);          // initial value;
    const refInputName=useRef(null);
    const refInputMail=useRef(null);

    console.log(ref);
    
    // ref.current=1;
    
    // console.log(ref);

    // console.log( refInputName );


    function focusInput(){
        // refInputName.current.focus();
        refInputMail.current.focus();
    }

    function changeRef(){
      ref.current=ref.current+1;
       console.log(ref);
    }
  
  return (
    <>
      <h2>Form Example</h2>

      {/* <p>ref: {ref.current}</p> */}

      <label>Name: <input type="text" ref={refInputName} /> </label>
      <label>Email: <input type="text" ref={refInputMail} /> </label>

      <button onClick={focusInput}>Click</button>

      <hr />

      <button onClick={changeRef}>Change</button> <span>{ref.current}</span>

  </>
  );
}