import { useState } from "react";

export default function Course() {

  const [name,setName]=useState('');
  const [phone,setPhone]=useState(0);
  const [mode,setMode]=useState(false);


  return (
    <section>
      <h2>Course Component</h2>
      <form>
          <label>Name: <input className="input" type="text" required onInput={(e)=>setName(e.target.value)} /></label>
          <label>Phone: <input className="input" type="tel" required onInput={(e)=>setPhone(e.target.value)} /></label>
          <label><input className="input" type="checkbox" required onChange={(e)=>setMode(e.target.checked)}/>: Online</label>
          <button className="btn">Sign up</button>
      </form>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      {/* <p>Online: <span hidden={!mode}>Online</span> <span hidden={mode}>Offline</span> </p> */}
      <p>Online: <span> {mode?'Online':'Offline'}</span></p>
    </section>
  );
}
