import React, { useState } from 'react'

function Task12() {
    const [searchTerm, setSearchTerm] = useState("");
  const users = [
    { id: 1, name: "viyona", email: "viyona@example.com" },
    { id: 2, name: "swetha", email: "swtha@example.com" },
    { id: 3, name: "yatvin", email: "yatvin@example.com" },
    { id: 4, name: "sudha", email: "sudha@example.com" },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
        <h6>Task15</h6>
        <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default Task12