import { useState, useReducer, useMemo } from "react";

export default function Example() {   

  /* counter */
  // const initialState={count:0};
  // function reducer(state,action){
  //     switch(action.type){
  //       case "inc": return {count:state.count+1};
  //       case "dec": return {count:state.count-1};
  //       case "reset": return {count:0};
  //       default : return state
  //     }
  // }
  // const [state,dispatch]=useReducer(reducer,initialState);

  /* form  */

  const initialState={name:"", email:"", age:0};

   function reducer(state,action){
    switch(action.type){
      case "setName" : return {...state,name:action.value};
      case "setEmail" : return {...state,email:action.value};
      case "setAge" : return {...state,age:action.value};
      case "reset" : return initialState;
      default : return state;
    }
  };

  function handleSubmit(e){
      e.preventDefault();
      console.log(state);
  }

  const [state,dispatch]=useReducer(reducer,initialState);


  /* useMemo */

  const [count, setCount] = useState(0);

  const heavyTask=useMemo(()=>{
    let result=0;
    for(let i=0; i<1000000000; i++){
      result+=i;
    }
    return result;
  },[]);


  return (
    <>
      <h2>Example Component</h2>

      {/* <button className="btn" onClick={()=>dispatch({type:"inc"})}>Increment</button>
      <button className="btn" onClick={()=>dispatch({type:"dec"})}>Decrement</button>
      <button className="btn" onClick={()=>dispatch({type:"reset"})}>Reset</button>
      <output>{state.count}</output> */}


      {/* <form onSubmit={handleSubmit}>
        <label>Name: <input className="input" type="text" value={state.name} required  onChange={(e)=>{dispatch({type:"setName", value:e.target.value})}}/> </label>
        <label>Email: <input className="input" type="email" value={state.email} required onChange={(e)=>{dispatch({type:"setEmail", value:e.target.value})}}/> </label>
        <label>Age: <input className="input" type="number" value={state.age} required onChange={(e)=>{dispatch({type:"setAge", value:e.target.value})}}/> </label>
        <button className="btn">Signup</button>
      </form> */}

      <hr />

      <button className="btn" onClick={()=>setCount(count+1)}>Increment</button>
      <p>Count: {count}</p>
      <p>Loop Response: {heavyTask}</p>

    
  </>
  );
}