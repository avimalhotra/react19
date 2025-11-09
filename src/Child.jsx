export default function Child({count,setCount}){

     return (
          <>
               <h3>Child Component</h3>
               {/* <p>{x.count}</p> */}
               <button className="btn" onClick={()=>setCount(count-10)}>-10</button>
               <output className="counter">{count}</output>
               <button className="btn" onClick={()=>setCount(count+10)}>+10</button>
          </>
     )
}