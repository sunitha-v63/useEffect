import React, { useEffect, useState } from 'react'

function Task5() {
    const [users, setUsers] = useState([]); 
    
    useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users") 
          .then((response) => response.json()) 
          .then((data) => setUsers(data)); 
      }, []); 

  return (
    <>
    <h6>Task7</h6>
    <ul>
        {users.map((user)=>
            (<li key={user.id}>{user.name}</li>
        ))}
    </ul>

    </>
  )
}

export default Task5
