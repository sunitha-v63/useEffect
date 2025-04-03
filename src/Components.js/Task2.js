import React, { useEffect } from 'react'

function Task2() {
    useEffect(()=>{
        console.log("Component Mounted");

    },[])
  return (
    <>
        <h6>Task2 & Task3</h6>
        <p>Basic useEffect Example (
            "check console log")
        </p>
        
    </>
  )
}

export default Task2