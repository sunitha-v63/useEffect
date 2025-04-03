import React, { useState } from "react";

function Task10() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    console.log("Fetching users...");
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
  };
  return (
    <div>
      <h6>Task13</h6>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Fetch Users"}
      </button>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task10;
