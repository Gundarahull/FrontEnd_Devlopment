import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import UserProfile from "./components/userProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContextProvider>
        <h1>ContextAPi for State Management.....</h1>
        <p>huihui</p>
        <Login/>
        <UserProfile/>
      </UserContextProvider>
    </>
  );
}

export default App;
