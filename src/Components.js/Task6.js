import React, { useEffect, useState } from 'react'

function Task6() {
    const[count,setCount]=useState(0)

    useEffect(()=>{
        document.title=count
    })
  return (
    <div>
        <h6>Task8</h6>
        <h4>document title count:{count}</h4>
        <button onClick={()=>setCount(count+1)}>count</button>
    </div>
  )
}

export default Task6