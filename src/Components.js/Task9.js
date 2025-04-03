import React, { useEffect, useState } from 'react'

function Task9() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
              console.log("Fetched users:", data);
              setUsers(data);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching users:", error);
              setLoading(false);
            });
        }, 2000);
      }, []);
  return (
    <div>
        <h6>Task11 & Task12</h6>
        {loading ? <p>Loading users...</p> : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Task9