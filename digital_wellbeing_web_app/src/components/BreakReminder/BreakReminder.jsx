// BreakReminder.js
import React, { useEffect, useState } from 'react';

function BreakReminder({ screenTime }) {
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (screenTime >=  1000) { // 2 hours in milliseconds
        setShowReminder(true);
      } else {
        setShowReminder(false);
      }
    }, 1000); // Check every second

    return () => clearInterval(intervalId);
  }, [screenTime]);

  return (
    <>
      {showReminder && (
        <div className="fixed bottom-0 right-0 bg-blue-500 text-white p-4 rounded-tl-md shadow-md">
          <p className="text-sm">It's time to take a break!</p>
        </div>
      )}
      {!showReminder && (
        <div className="fixed bottom-0 right-0 bg-green-500 text-white p-4 rounded-tl-md shadow-md">
          <p className="text-sm">Continue your work!</p>
        </div>
      )}
    </>
  );
}

export default BreakReminder;
