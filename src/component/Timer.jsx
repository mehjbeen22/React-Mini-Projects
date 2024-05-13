import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';

const Timer = () => {
  const [hh, setHH] = useState(0);
  const [mm, setMM] = useState(0);
  const [ss, setSS] = useState(0);
  const totalSeconds = useRef(null);
  const intervalId = useRef(null);

  const handleStart = () => {
    if (hh === 0 && mm === 0 && ss === 0) return;
    totalSeconds.current = hh * 3600 + mm * 60 + ss;
    intervalId.current = setInterval(() => {
      totalSeconds.current -= 1;
      setHH(Math.floor(totalSeconds.current / 3600));
      setMM(Math.floor((totalSeconds.current / 60) % 60));
      setSS(Math.floor(totalSeconds.current % 60));
      if (totalSeconds.current === 0) clearInterval(intervalId);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
  };

  const handleReset = () => {
    clearInterval(intervalId.current);
    setHH(0);
    setMM(0);
    setSS(0);
  };

  return (
    <div className="bg-[#e5e7eb] flex justify-center items-center flex-col h-[89.7vh]">
      <h1 className="text-3xl mb-4 font-bold">Timer</h1>

      <div>
        <div className="bg-white flex items-center  border border-gray-200 p-6 justify-center gap-2 rounded-lg shadow-md">
          <input
            type="number"
            placeholder="hh"
            className="w-20 h-14 px-4 py-2  border-r-4 border-gray-400 focus:outline-none rounded-l-lg text-center"
            value={hh}
            onChange={(e) => setHH(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="mm"
            className="w-20 h-14 px-4 py-2 border-r-4 border-gray-400 focus:outline-none text-center"
            value={mm}
            onChange={(e) => setMM(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="ss"
            className="w-20 h-14 px-4 py-2 focus:outline-none rounded-r-lg text-center"
            value={ss}
            onChange={(e) => setSS(Number(e.target.value))}
          />
        </div>
        <div className=" m-5 p-5  flex gap-5">
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
            onClick={handleStop}
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
          <Button
            variant="contained"
            onClick={handleReset}
            sx={{
              '&:hover': {
                // Using sx prop for styling in Material-UI
                backgroundColor: 'black',
                color: '#fff',
                boxShadow:
                  ' rgba(16, 17, 26, 0.1) 10px 10px 20px, rgba(16, 17, 26, 0.1) 0px 8px 24px, rgba(16, 17, 26, 0.1) 0px 16px 48px',
              },
            }}
          >
            RESET
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
