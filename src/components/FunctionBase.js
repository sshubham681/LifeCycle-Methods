import React,{useEffect, useState} from 'react'

const FunctionBase = () => {

    const[count,setCount] = useState(0);
    const[show,setShow] = useState(false)

    useEffect(()=>{
        console.log("useEffect is running");
    })

    return (
        <div>
          <h1>Function Counter</h1>
          <button onClick={() =>{setCount(count+1)}}>+</button>
          <h2>{count}</h2>
          <button onClick={() =>{setCount(count-1)}}>-</button>
            <h1></h1>
          <button onClick = {()=>{setShow(!show)}}>Toggle</button>
          {
              show?<h2>Showing</h2>:null
          }   
        </div>
    )
}

export default FunctionBase
