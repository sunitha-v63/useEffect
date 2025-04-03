import React, { useEffect, useState } from 'react'

function Task3() {
    const[count,setcount]=useState(0)

    useEffect(()=>{
console.log("counter",count);

    },[count])
  return (
    <div>
        <h6>Task4</h6>
        <h2>count:{count}</h2>
        <button onClick={()=>setcount(count+1)}>Click</button>
    </div>
  )
}

export default Task3