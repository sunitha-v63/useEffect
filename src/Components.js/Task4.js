import React, { useEffect, useState } from 'react'

function Task4() {
    const[name,setname]=useState("viyona")
    const[age,setage]=useState(2)

    useEffect(()=>{
        console.log("Name",name);
        
    },[name])

    useEffect(()=>{
        console.log("age:",age);
        
    },[age])

    useEffect(() => {
        return () => {
          console.log("Component Unmounted");
        };
      }, []);
  return (
    <div>
        <h6>Task5 & Task6</h6>
        <h3>{name}</h3>
        <button onClick={()=>{setname("yatvin")}}>Name change</button>
        <h3>{age}</h3>
        <button onClick={()=>(setage(age+1))}>Age change</button>
    </div>
  )
}

export default Task4