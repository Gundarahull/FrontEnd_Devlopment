import React from "react";
import { useContext } from "react";
import { useState } from "react";
import userContext from "../context/userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };    //values from the state
    console.log("userDat>>>>",user);
    
    setUser(user);
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        placeholder="Username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
