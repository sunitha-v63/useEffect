import React, { useEffect, useState } from 'react'

function Task_2() {
    const [isVisible, setIsVisible] = useState(false);
    const [userData, setUserData] = useState([]);
  
    useEffect(() => {
      if (isVisible) {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUserData(data))
          .catch((error) => console.error("Error fetching data:", error));
      } else {
        setUserData([]);
      }
    }, [isVisible]);
  
    return (
      <>
        <h6>Mini Project</h6>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide Data" : "Fetch User Data"}
        </button>
        
        {isVisible && (
          <div>
            {userData.length > 0 ? (
              userData.map((user) => (
                <div key={user.id}>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </div>
              ))
            ) : (
              <p>Loading...</p> 
            )}
          </div>
        )}
    </>
  )
}

export default Task_2