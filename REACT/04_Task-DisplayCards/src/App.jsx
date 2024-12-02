import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div style={{ border: "2px solid black" }}>
        <h1 style={{ textAlign: "center" }}>Displaying the Cards....</h1>
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <div
                key={user.id}
                style={{
                  backgroundColor: "green",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <h2>Name of the User: {user.name}</h2>
                <h3>Username of the User: {user.username}</h3>
                <h3>Email of the User: {user.email}</h3>
                <h3>Phone of the User: {user.phone}</h3>
              </div>
            );
          })
        ) : (
          <h2 style={{ textAlign: "center" }}>Loading users...</h2>
        )}
      </div>
    </>
  );
}

export default App;
