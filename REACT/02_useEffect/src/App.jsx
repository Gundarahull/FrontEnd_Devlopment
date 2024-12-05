import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./copmonents/Navbar";
import Footer from "./copmonents/Footer";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("I am at the App Entry.....");
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Footer />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      Key Distinction Rendering Order: Parent (App) first → Child (Navbar)
      second. Effect Execution Order: Child (Navbar) first → Parent (App)
      second.
    </>
  );
}

export default App;
