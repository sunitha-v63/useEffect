import React, { useEffect, useState } from 'react'

function Task11() {
    const [seconds, setSeconds] = useState(0); 
 
  useEffect(() => { 
    const interval = setInterval(() => { 
      setSeconds((prev) => prev + 1); 
    }, 1000); 
 
    return () => clearInterval(interval);
  }, []); 
  return (
    <>
    <h6>Task14</h6>
    <h2>Timer: {seconds}s</h2>
    </>
  )
}

export default Task11