import { useState } from "react";

export function Example() {
  
    const [car,setCar]=useState({name:"", power:0, torque:0});

    // function changeData(){setCar({...car, power:90, name:"alto"});}
    function updateData(e){
      const {name,value}=e.target;
      setCar(x=>({...x,[name]:value}))
    }

    function sendData(e){
      e.preventDefault();
      console.log("send");
    }

    // const cars=["swift","brezza","alto","i20","creta"];
    const nums=[1,2,4,5,7,10,21,33];
    const even=nums.filter(i=>i%2==0);
    const total=nums.reduce((x,y)=>x+y);

    const data=[
            { id:1, "name": "swift", "type": "hatchback", "price":870000},
            { id:2, "name": "dzire", "type": "sedan", "price":980000},
            { id:3, "name": "ciaz", "type": "sedan", "price":1100000},
            { id:4, "name": "baleno", "type": "hatchback", "price":880000},
            { id:5, "name": "fronx", "type": "hatchback", "price":1150000},
            { id:6, "name": "brezza", "type": "suv", "price":1250000},
            { id:7, "name": "grand vitara", "type": "suv", "price":1990000},
            { id:8, "name": "alto", "type": "hatchback", "price":400000},
            { id:9, "name": "wagon r", "type": "hatchback", "price":500000},
            { id:10, "name": "jimny", "type": "suv", "price":1400000}
      ];

    const hatch=data.filter(i=>i.type=="hatchback");


    function HelloAdmin(prop){
      console.log( prop );
      
      if(prop.role=="admin"){
        return <h2>Hello Admin</h2>
      }
      else if(prop.role=="moderator"){
      return <h2>Hello Moderator</h2>
      }
      else{
         return <h2>Hello User</h2>
      }
    }


  return (
    <>
      <h2>Examples</h2>

      {/* <button className="btn" onClick={changeData}>Change</button> */}

      <form onSubmit={sendData}>
        <label>Name: <input className="input" type="text" name="name" onChange={updateData}/></label>
        <label>Power: <input className="input" type="number" name="power" onChange={updateData}/></label>
        <label>Torque: <input className="input" type="number" name="torque" onChange={updateData}/></label>
        <button className="btn">Send</button>
      </form>

      <p>Name: {car.name}, Power: {car.power}, Torque: {car.torque}</p>

      <hr />

      {/* <ol>
          {cars.map((car,index)=>(
            <li key={index}>{car}</li>
          ))}
      </ol> */}

      <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
              {
                hatch.map((car)=>(
                  <tr key={car.id}><td>{car.name}</td><td>{car.type}</td><td>{car.price}</td></tr>
                ))
              }
          </tbody>  
      </table>
     
      <hr />
      <ol>
            {even.map((num,index)=>(<li key={index}>{num}</li>))}
      </ol>

      <hr />
      <p>{total}</p>

      <hr />

      <HelloAdmin role="moderator" />
      
    </>
  );
}
