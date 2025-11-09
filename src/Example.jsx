import { useState } from "react";
import Child from './Child';



export default function Example() {   

  const [counter,setCounter]=useState(0);

    
  const items = [
    {name:"paper", price: 10 }, 
    {name:"pen", price: 20 }, 
    {name:"glue", price: 30 }
  ];

  
  // const sum=items.reduce((sum,item)=>sum + item.price, 0);              // ✅
  // console.log( sum );


  return (
    <>
      <h2>State Management</h2>

      <button className="btn" onClick={()=>setCounter(counter-1)}>-</button>
      <output className="counter">{counter}</output>
      <button className="btn" onClick={()=>setCounter(counter+1)}>+</button>
      <button className="btn" onClick={()=>setCounter(0)}>Reset</button>

      <hr />



      <hr />
      <Child count={counter} setCount={setCounter} />

  </>
  );
}