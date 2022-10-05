import React, { useState, useEffect } from "react";

function App() {
  const now = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  const [time, setTime] = useState(now);

  useEffect(() => {
    const updateEverySeconds = setInterval(updateTime, 1000);
    return () => clearInterval(updateEverySeconds);
  }, []);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });

    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
