import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <>
      <div>
        <h1>IP Address Tracker</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            <input type="text" value={value} onChange={handleChange} />
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div></div>
    </>
  );
}

export default App;
