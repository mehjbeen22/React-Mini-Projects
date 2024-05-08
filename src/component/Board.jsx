import { useState } from 'react';

const Board = () => {
  const winnerArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function calculateWinner() {
    for (let i = 0; i < winnerArr.length; i++) {
      const [x, y, z] = winnerArr[i];

      if (
        inputs[x] !== '' &&
        inputs[x] === inputs[y] &&
        inputs[y] === inputs[z]
      ) {
        return true;
      }
    }
    return null;
  }

  const [inputs, setInputs] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState(true);
  const winner = calculateWinner();
  // console.log('Calculate WInner', winner);

  let status = '';

  if (winner) {
    status = 'Winner is' + ' ' + (player ? '0' : 'X');
  } else {
    status = 'Next Player  is' + ' ' + (player ? 'X' : '0');
  }

  const handleInput = (e) => {
    // console.log(e.target.dataset.index);

    if (inputs[e.target.dataset.index] !== '') return;

    const copiedArr = inputs.map((input, index) => {
      if (index == e.target.dataset.index) {
        return player ? 'X' : '0';
      }
      return input;
    });

    setInputs(copiedArr);
    setPlayer(!player);
  };

  return (
    <div className=" flex justify-center items-center h-[100vh] flex-col">
      <div className="grid grid-cols-3 w-[300px] gap-2" onClick={handleInput}>
        {inputs.map((input, index) => {
          return (
            <div
              data-index={index}
              className="w-24 h-24 border border-[#ec4899] rounded-md flex justify-center items-center font-bold text-4xl shadow-lg text-[#831843]"
              key={index}
            >
              {input}
            </div>
          );
        })}
      </div>
      <p className="text-3xl mt-5 shadow-md p-2 bg-[#f472b6] rounded-sm">
        {status}
      </p>
    </div>
  );
};

export default Board;
