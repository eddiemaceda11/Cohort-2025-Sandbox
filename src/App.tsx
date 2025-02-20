import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [expiration, setExpiration] = useState<number>(10);

  useEffect(() => {
    const timeInt = setInterval(() => {
      setExpiration((prevState) => {
        if (prevState <= 0) {
          return 0;
        }
        return prevState - 1;
      });
    }, 1000);
    return () => clearInterval(timeInt);
  }, [expiration]);

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
      <div className="parking-passes">
        <h2>Parking Passes</h2>
        <div>
          <div className="parking-pass">
            <p>John Doe</p>
            <p>In use</p>
            <p>Expires in 3 days</p>
          </div>
        </div>
        <button>Start countdown</button>
      </div>
    </>
  );
}

export default App;
