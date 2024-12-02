import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const a = useRef(0);
  const btnRef = useRef("");
  const usingRef = () => {
    btnRef.current.style.backgroundColor = "red";
  };

  useEffect(() => {
    console.log("the value of a is ", a.current);
  }, [count]);

  return (
    <>
      <div>
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
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      <div>
        <button onClick={() => a.current++}>Increment</button>
        <h1>UseRef means rrefferning the variable...</h1>

        <h1>
          We cant access like this because its changing right...for like this we
          can use STATE
        </h1>
        <p>Current value: {a.current}</p>
        <p>
          But we cant use "open brackets a"---because it has a statis value
          right
        </p>
        <button ref={btnRef} onClick={usingRef}>
          using Ref to access the Element{" "}
        </button>
        <div style={{ border: "2px solid red" }}>
          <h1>
            Use useRef for mutable references like timers, DOM nodes, or keeping
            a value across renders without updating the UI. Use useState when
            you need to update the UI dynamically based on changes.
          </h1>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              border: "1px solid black",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "8px",
                    border: "1px solid black",
                    textAlign: "left",
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    padding: "8px",
                    border: "1px solid black",
                    textAlign: "left",
                  }}
                >
                  useRef
                </th>
                <th
                  style={{
                    padding: "8px",
                    border: "1px solid black",
                    textAlign: "left",
                  }}
                >
                  useState
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  Purpose
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  Keeps a mutable reference value that doesn't trigger
                  re-renders.
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  Manages state that triggers re-renders when updated.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  Re-rendering
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  Does not cause the component to re-render when updated.
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  Causes the component to re-render when updated.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  Value Access
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  Access the current value using <code>.current</code>.
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  Access the value via the state variable.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  Use Case
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  For persistent values that don't need to cause UI updates
                  (e.g., DOM refs, timers).
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  For values that should update the UI when changed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div>

        
      </div>
    </>
  );
}

export default App;
