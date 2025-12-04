"use client";

import { useState } from "react";
import { clsx } from "clsx";

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

function possibleNumbers(
  newBoard: (number | undefined)[][],
  rowIndex: number,
  colIndex: number
) {
  // const usedNumbers = sudokuBoard.flat().filter((n) => n !== undefined);

  const thisRow = newBoard[rowIndex];

  const thisCol = newBoard.map((rowIndex) => rowIndex[colIndex]);

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

export default function Home() {
  const [board, setBoard] = useState(sudokuBoard);

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

    const finalPossibleNumbers = possibleNumbers(board, rowIndex, colIndex);

    const updated = board.map((row) => [...row]);

    if (!isEmpty) {
      return (
        <>
          <div
            className={clsx(
              "border border-gray-400 w-[90px] h-[90px] flex flex-col justify-center items-center font-bold text-2xl",
              colIndex == 3 && "border-l-4",
              colIndex == 5 && "border-r-4",
              rowIndex == 3 && "border-t-4",
              rowIndex == 5 && "border-b-4"
            )}
          >
            {value}
          </div>
        </>
      );
    }

    if (finalPossibleNumbers.length == 1) {
      updated[rowIndex][colIndex] = finalPossibleNumbers[0];
      setBoard(updated);
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

  return (
    <div className="bg-white h-screen text-black flex justify-center items-center">
      <div>
        <div className="m-auto">
          {board.map((row, rowIndex) => (
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
