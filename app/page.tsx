// import { useState } from "react";

const sudokuNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const _ = undefined;

const sudokuBoard = [
  [_, _, 1, 6, 7, 2, 4, 9, 8],
  [_, 4, 9, 8, 3, 1, 7, 2, 5],
  [8, 2, 7, 5, 4, 9, 3, 6, 1],
  [9, 6, 2, 4, 1, 5, 8, 3, 7],
  [3, 7, 4, 9, 2, 8, 1, 5, _],
  [1, 8, 5, 7, 6, 3, 9, 4, 2],
  [4, 9, 6, 1, 5, 7, 2, 8, 3],
  [7, 5, 3, 2, 8, 4, 6, 1, 9],
  [2, 1, 8, 3, 9, 6, 5, _, 4],
];

const newBoard = sudokuBoard

function possibleNumbers(rowIndex:number, colIndex:number) {
  // const usedNumbers = sudokuBoard.flat().filter((n) => n !== undefined);

  const thisRow = sudokuBoard[rowIndex];

  const thisCol = sudokuBoard.map((rowIndex) => rowIndex[colIndex]);

  const possibleNumbersInRow = sudokuNumberList.filter(
    (n) => !thisRow?.includes(n)
  );

  const possibleNumbersInCol = sudokuNumberList.filter(
    (n) => !thisCol?.includes(n)
  );

  const combinedArray = possibleNumbersInRow.concat(possibleNumbersInCol);

  if (possibleNumbersInRow.length == 1) return possibleNumbersInRow;

  if (possibleNumbersInCol.length == 1) return possibleNumbersInCol;

  // return sudokuNumberList.filter((n) => !usedNumbers.includes(n));
  return combinedArray;
}

//cell.rowIndex, cell.colIndex

const Square = ({
  value,
  rowIndex,
  colIndex,
}: {
  value?: number | undefined;
  rowIndex: number;
  colIndex: number;
}) => {
  const isEmpty = value === undefined || value === null;

  console.log("newBoard", newBoard)

  const finalPossibleNumbers = possibleNumbers(rowIndex, colIndex)

  console.log(sudokuBoard)

  if (!isEmpty) {
    return (
      <>
        <div className="border border-black w-[90px] h-[90px] flex flex-col justify-center items-center font-bold text-2xl">
          {value}
        </div>
      </>
    );
  }

  if (finalPossibleNumbers.length == 1) {
    // newBoard[rowIndex, colIndex] = finalPossibleNumbers[0]
    return (
      <div className="border border-black w-[90px] h-[90px] flex justify-center items-center font-bold text-2xl">
        {finalPossibleNumbers[0]}
      </div>
    );
  }

  return (
    <>
      <div className="border border-black w-[90px] h-[90px] grid grid-cols-3 text-gray-600">
        <span className="flex items-center justify-center w-[30px] h-[30px]">
          {finalPossibleNumbers.includes(1) && 1}
        </span>
        <span className="flex items-center justify-center w-[30px] h-[30px]">
          {finalPossibleNumbers.includes(2) && 2}
        </span>
        <span className="flex items-center justify-center w-[30px] h-[30px]">
          {finalPossibleNumbers.includes(3) && 3}
        </span>
        <span className="flex items-center justify-center w-[30px] h-[30px]">
          {finalPossibleNumbers.includes(4) && 4}
        </span>
        <span className="flex items-center justify-center w-[30px] h-[30px]">
          {finalPossibleNumbers.includes(5) && 5}
        </span>
        <span className="flex items-center justify-center w-[30px] h-[30px]">
          {finalPossibleNumbers.includes(6) && 6}
        </span>
        <span className="flex items-center justify-center w-[30px] h-[30px]">
          {finalPossibleNumbers.includes(7) && 7}
        </span>
        <span className="flex items-center justify-center w-[30px] h-[30px]">
          {finalPossibleNumbers.includes(8) && 8}
        </span>
        <span className="flex items-center justify-center w-[30px] h-[30px]">
          {finalPossibleNumbers.includes(9) && 9}
        </span>
      </div>
    </>
  );
};

export default function Home() {


  return (
    <div className="bg-white h-screen text-black flex justify-center items-center">
      <div>
        <div className="m-auto">
          {sudokuBoard.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-9">
              {row.map((cell, cellIndex) => (
                <Square
                  key={cellIndex}
                  value={cell}
                  colIndex={cellIndex}
                  rowIndex={rowIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
