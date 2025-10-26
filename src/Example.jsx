import { useState, useEffect } from "react";

export function Example() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [terms, setTerms] = useState(false);
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  const [count, setCount]=useState(0);


  function sendData(e){
    e.preventDefault();
    console.log(e.target);
  }


  // useEffect(()=>{ console.log("use effect") });
  useEffect(()=>{ console.log("use effect") },[count]);

  console.log("app starts");

  return (
    <>
      <h2>Form Example</h2>

      <form onSubmit={sendData}>
          <div>
            <label>Name: <input className="input" type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required /></label> <output>{name}</output>
          </div>
         <div>
           <label>Age: <input className="input" type="number" name="age" value={age} onChange={(e)=>{setAge(e.target.valueAsNumber)}}  required/></label>
            <output>{age}</output>
         </div>
         <div>
           <label> <input type="checkbox" name="terms" value={terms} onChange={(e)=>{setTerms(e.target.checked)}} required/> : Terms and Conditions </label>
           <output> {terms ? (<b>Agree</b>) : (<i>Disagree</i>) }</output>
         </div>
         <div>
            <label> <input checked={gender === "male"} onChange={(e)=>{setGender(e.target.value)}} type="radio" name="gender" value="male" required /> Male</label>
            <label> <input checked={gender === "female"} onChange={(e)=>{setGender(e.target.value)}} type="radio" name="gender" value="female" required /> Female</label>  
            <output> {gender}</output>
         </div>
         <div>
          <label>City: <select value={city} required name="city" onChange={(e)=>{setCity(e.target.value)}} className="input">
            <option disabled selected value="">--Choose City--</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Chennai</option>
            </select></label> 
            <output>{city}</output>
            </div>
            <div>
              <button className="btn" type="submit">Submit</button>
            </div>
      </form>

      <hr />
  <h2>Counter</h2>
  <button className="btn" onClick={()=>setCount(count-1)}>Decrement</button>
  <output>{count}</output>
  <button className="btn" onClick={()=>setCount(count+1)}>Increment</button>
  
  </>
  );
}