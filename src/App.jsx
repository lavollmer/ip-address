import React, { useState } from "react";
import "./App.css";
import PatternBG from "../src/assets/pattern-bg-desktop.png";
import PatternBGMobile from "../src/assets/pattern-bg-mobile.png";
import IconArrow from "../src/assets/icon-arrow.svg";
import IconLocation from "../src/assets/icon-location.svg";

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
        <div
          className="bg-cover w-full h-full bg-center p-0 m-0"
          style={{ backgroundImage: `url(${PatternBG})` }}
        >
          <div>
            <h1 className="font-rubik font-lg">IP Address Tracker</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <p>
                <input type="text" value={value} onChange={handleChange} />
              </p>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div>
            <p>IP Address:</p>
            <p>Location:</p>
            <p>Timezone:</p>
            <p>ISP:</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
