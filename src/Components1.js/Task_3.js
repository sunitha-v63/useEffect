import React, { useEffect, useState } from 'react'

function Task_3() {
 
    const [quote, setQuote] = useState("");

    useEffect(() => {
      const fetchQuote = () => {
        fetch("https://jsonplaceholder.typicode.com/users") 
          .then((response) => response.json())
          .then((data) => setQuote(data.name));
      };
  
      fetchQuote(); 
      const interval = setInterval(fetchQuote, 5000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <>
        <h6>mini-project</h6>
        <p>{quote}</p>
    </>
  )
}

export default Task_3