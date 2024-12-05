import { useState } from "react";
import Cards from "./Components/Cards";

function App() {
  const [count, setCount] = useState(1);
  const updateCount = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);
  };
  return (
    <>
      <div>
        <h1>
          Props-- means the properties which can change according to the
          data....
        </h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <Cards title="Rahul" description="about Rahul" />
          <Cards title="Cool" description="about Cool" />
          <Cards title="Gunda" description="about Gunda" />
          <Cards title="Sunny" description="about Sunny" />
          <Cards title="Kojja" description="about Kojja" />
        </div>
      </div>
      <div>
        <div
          style={{ border: "4px solid black", margin: "10px", padding: "40px" }}
        >
          <h1>The count is -{count}</h1>
          <button onClick={() => updateCount()}>Update-Me</button>
        </div>
      </div>

      <div>
        
      </div>
    </>
  );
}

export default App;
