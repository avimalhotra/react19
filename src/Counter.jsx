import { useState } from "react";

let i = 10;
function sayHi() {
  console.log(i++);
}

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Counter</h3>
      {/* <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button> */}
      <button className="btn" onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
      <span>{count}</span>
      {/* <button className="btn" onClick={sayHi}>
        Click
      </button> */}
    </>
  );
}
