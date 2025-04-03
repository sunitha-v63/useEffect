import React, { useEffect, useState } from 'react'

function Task7() {
    const[task,settask]=useState("")

    useEffect(()=>{
        console.log("input",task);
        
    },[task])
  return (
    <div>
        <h6>Task9</h6>
        <form>
            <input type="text" value={task} placeholder='Enter' onChange={((e)=>settask(e.target.value))}/>
      
        </form>
    </div>
  )
}

export default Task7