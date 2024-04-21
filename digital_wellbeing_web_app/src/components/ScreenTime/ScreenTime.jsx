// ScreenTimeTracker.js
import React, { useEffect, useState } from 'react';

function ScreenTimeTracker() {
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      setTimeOnPage(elapsedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow">
      <h2 className="text-lg font-bold mb-2">Screen Time Tracker</h2>
      <p className="text-gray-700">Time on page: {Math.floor(timeOnPage / 1000)} seconds</p>
    </div>
  );
}

export default ScreenTimeTracker;
