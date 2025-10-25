import { useState } from "react";

export function Example() {

    const [uname,setName]=useState([]);

    console.log(uname);
  
    function updateData(e){
      e.preventDefault();
      setName(prev=>([...uname,e.target.name.value]));
    }

  return (
    <>
      <h2>To Do List</h2>
    
      <form onSubmit={updateData}>
        <label>Name: <input className="input" type="text" name="name" required /></label>
        <button className="btn">Send</button>
      </form>

      <hr />

      <ol>
        {
          uname.map((i,key)=>(
            <li key={key}>{i}</li>
          ))
        }
      </ol>
    </>
  );
}
