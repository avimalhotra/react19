import { useState } from "react";


export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(){
    // setCount(count+1);
    // setCount(count+2);
    setCount(count=>count+1);
    setCount(count=>count+2);
  }


  return (
    <>
      <h3>Counter</h3>
      <button className="btn" onClick={() => setCount(count - 1)}> Decrement</button>
      <span>{count}</span>
      <button className="btn" onClick={() => setCount(count + 1)}> Increment</button>
     
      <hr />

      <button className="btn" onClick={handleClick}>Click</button> <span>{count}</span>

      

    </>
  );
}
