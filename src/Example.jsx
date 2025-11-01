import { useState, useEffect } from "react";

export function Example() {

  const [counter,setCounter]=useState(0);
  const [cars,setCars]=useState([]);
  const [sec,setSec]=useState(0);


  // console.log("app starts");

  function changeCounter(){ 
    console.log("change");
    setCounter(counter=>counter+1);
  }

  function addCars(e){
    e.preventDefault();
    setCars([...cars,e.target.car.value]);
  }

  useEffect(()=>{
    document.querySelector("form input").value="";
    // console.log("app done");
  });            
  // useEffect(()=>{console.log("app done")},[counter]);            // with dependencies


  useEffect(()=>{
        const id=setInterval(()=>{
            setSec(sec=>sec+1);
        },1000);
        
        return ()=>clearInterval(id);
  },[]);

  
  return (
    <>
      <h2>Form Example</h2>

      {/* <button className="btn" onClick={()=>setCounter(counter+1)}>Increment</button> */}
      <button className="btn" onClick={changeCounter}>Increment</button>
      <output>{counter}</output>
      <hr />

     <form onSubmit={addCars}>
       <label>To do : <input className="input" type="text" name="car" required /> </label>
      <button className="btn">Add</button>
     </form>

      <ol>
      {
        cars.map((elem,index)=>
        <li key={index}>{elem}</li>
        )
      }
      </ol>

      <hr />
      <p>Sec: {sec}</p>

  </>
  );
}