const _ = undefined;

export const sudokuMiniBoard = [
  [1, 4, 5],
  [6, 2, 7],
  [_, _, _],
];

//cell.rowIndex, cell.colIndex

const Square = ({ value }: { value?: number | undefined }) => {
  const isEmpty = value === undefined || value === null;

  const sudokuNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function possibleNumbers() {
    const usedNumbers = sudokuMiniBoard.flat().filter((n) => n !== undefined);

    return sudokuNumberList.filter((n) => !usedNumbers.includes(n));
  }

  if (!isEmpty) {
    return (
      <div className="border border-black w-[90px] h-[90px] flex justify-center items-center font-bold text-2xl">
        {value}
      </div>
    );
  }

  if (possibleNumbers().length == 1) {
    return (
      <div className="border border-black w-[90px] h-[90px] flex justify-center items-center font-bold text-2xl">
        {possibleNumbers()[0]}
      </div>
    );
  }

  return (
    <div className="border border-black w-[90px] h-[90px] grid grid-cols-3 text-gray-600">
      <span className="flex items-center justify-center w-[30px] h-[30px]">
        {possibleNumbers().includes(1) && 1}
      </span>
      <span className="flex items-center justify-center w-[30px] h-[30px]">
        {possibleNumbers().includes(2) && 2}
      </span>
      <span className="flex items-center justify-center w-[30px] h-[30px]">
        {possibleNumbers().includes(3) && <span>3</span>}
      </span>
      <span className="flex items-center justify-center w-[30px] h-[30px]">
        {possibleNumbers().includes(4) && 4}
      </span>
      <span className="flex items-center justify-center w-[30px] h-[30px]">
        {possibleNumbers().includes(5) && 5}
      </span>
      <span className="flex items-center justify-center w-[30px] h-[30px]">
        {possibleNumbers().includes(6) && 6}
      </span>
      <span className="flex items-center justify-center w-[30px] h-[30px]">
        {possibleNumbers().includes(7) && 7}
      </span>
      <span className="flex items-center justify-center w-[30px] h-[30px]">
        {possibleNumbers().includes(8) && 8}
      </span>
      <span className="flex items-center justify-center w-[30px] h-[30px]">
        {possibleNumbers().includes(9) && 9}
      </span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-white h-screen text-black flex justify-center items-center">
      <div>
        <div className="m-auto w-[270px]">
          {sudokuMiniBoard.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-3">
              {row.map((cell, cellIndex) => (
                <Square key={cellIndex} value={cell} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
