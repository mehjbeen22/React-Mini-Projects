import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';

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
    clearInterval(intervalId.current);
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
    <div className="bg-[#f1f5f9] flex justify-center items-center flex-col h-[90vh]">
      <h1 className="text-3xl mb-4 font-bold">Stopwatch</h1>

      <div className="border-2 p-5 bg-[#94a3b8] w-[35%] shadow-lg rounded-md">
        <div className="bg-white flex items-center  border border-gray-200 p-6 justify-center gap-2 rounded-lg shadow-md">
          <div className="text-4xl">{formateTime()}</div>
        </div>
        <div className=" m-5 p-5  flex gap-5 justify-center items-center">
          <Button
            variant="contained"
            onClick={handleStart}
            sx={{
              backgroundColor: '#22c55e',
              '&:hover': {
                // Using sx prop for styling in Material-UI
                backgroundColor: 'black',
                color: '#fff',
                boxShadow:
                  ' rgba(16, 17, 26, 0.1) 10px 10px 20px, rgba(16, 17, 26, 0.1) 0px 8px 24px, rgba(16, 17, 26, 0.1) 0px 16px 48px',
              },
            }}
          >
            START
          </Button>

          <Button
            variant="contained"
            onClick={handelStop}
            sx={{
              backgroundColor: '#be123c',
              '&:hover': {
                // Using sx prop for styling in Material-UI
                backgroundColor: 'black',
                color: '#fff',
                boxShadow:
                  ' rgba(16, 17, 26, 0.1) 10px 10px 20px, rgba(16, 17, 26, 0.1) 0px 8px 24px, rgba(16, 17, 26, 0.1) 0px 16px 48px',
              },
            }}
          >
            STOP
          </Button>
          <Button variant="contained" onClick={handelReset}>
            RESET
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
