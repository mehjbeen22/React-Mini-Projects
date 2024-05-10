import React, { useRef, useState } from 'react';

const Stopwatch = () => {
  const currentTime = useRef(0);
  const [passedTime, setPassedTime] = useState(0);
  const intervalId = useRef(null);

  const handleStart = () => {
    currentTime.current = Date.now();
    intervalId.current = setInterval(() => {
      setPassedTime(Date.now() - currentTime.current);
    }, 10);
  };
  const handelStop = () => {
    clearInterval(intervalId.current);
  };
  const handelReset = () => {
    setPassedTime(0);
  };

  const formateTime = () => {
    let min = Math.floor((passedTime / (1000 * 60)) % 60);
    let sec = Math.floor((passedTime / 1000) % 60);
    let milisec = Math.floor((passedTime % 1000) / 10);

    min = String(min).padStart(2, '0');
    sec = String(sec).padStart(2, '0');
    milisec = String(milisec).padStart(2, '0');
    return ` ${min}:${sec}:${milisec}`;
  };

  return (
    <div className=" flex justify-center items-center h-[100vh] flex-col">
      <div className=" flex justify-center items-center flex-col ">
        <h1 className="text-3xl mb-4">Stopwatch</h1>
        <div className="flex justify-center items-center bg-gray-200 h-16 w-48 mb-4">
          <div className="text-4xl">{formateTime()}</div>
        </div>
        <div>
          <button
            onClick={handleStart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
          >
            Start
          </button>
          <button
            onClick={handelStop}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded"
          >
            Stop
          </button>
          <button
            onClick={handelReset}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
