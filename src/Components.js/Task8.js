import React, { useEffect, useState } from 'react'

function Task8() {
    const[count,setcount]=useState(0)
    const[msg,setmsg]=useState("")

    useEffect(()=>{
        if(count%2==0){
            setmsg("counter is even")
        }
        else{
            setmsg("")
        }
    })
  return (
    <div>
        <h6>Task10</h6>
        <h4>{count}</h4>
        <button onClick={(()=>setcount(count+1))}>Counter</button>
        <h4>{msg}</h4>
    </div>
  )
}

export default Task8