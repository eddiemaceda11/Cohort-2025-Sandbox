import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* GUEST MANAGEMENT */}
      <h1>Guest Management</h1>
      <div>
        <div>
          <h2>Upcoming visits</h2>
          <div>
            <div className="guest-info">
              <p>John Doe</p>
              <p>104838</p>
              <span>Pending</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
