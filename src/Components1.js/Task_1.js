import React, { useEffect, useState } from 'react'

function Task_1() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
  return (
    <>
        <h6>Task_1</h6>
        <p>useState is a hook used to manage state in functional components, while useEffect is a hook used to manage side effects (like fetching data, setting up event listeners, or updating the DOM) in functional components.</p>
        <h6>Task2</h6>
        <h4>Counter: {count}</h4>
      </>
  )
}

export default Task_1