"use client";

import { useState } from "react";
import { clsx } from "clsx";

const sudokuNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const _ = undefined;

const sudokuBoard = [
  [_, 6, _, 3, _, _, 8, 7, 1],
  [_, _, _, _, 3, _, 2, _, _],
  [_, _, 5, 7, 2, 6, _, 4, _],
  [_, _, _, _, _, _, 1, 3, 2],
  [7, 4, 3, _, 6, 2, _, 9, _],
  [2, _, 1, _, _, 8, _, _, _],
  [5, 8, _, _, 1, 3, 4, 2, _],
  [_, _, _, _, _, _, 9, 1, 5],
  [_, 7, 9, _, 5, 4, _, 8, _],
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

  console.log("check ngang", possibleNumbersInRow)

  const possibleNumbersInCol = sudokuNumberList.filter(
    (n) => !thisCol?.includes(n)
  );

  console.log("check doc", possibleNumbersInCol)

  const combinedArray = possibleNumbersInRow.filter(element => possibleNumbersInCol.includes(element));;

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
        <div
          className={clsx(
            "border border-gray-400 w-[90px] h-[90px] flex justify-center items-center font-bold text-2xl",
            colIndex == 3 && "border-l-4",
            colIndex == 5 && "border-r-4",
            rowIndex == 3 && "border-t-4",
            rowIndex == 5 && "border-b-4"
          )}
        >
          {finalPossibleNumbers[0]}
        </div>
      );
    }

    return (
      <>
        <div
          className={clsx(
            "border border-gray-400 w-[90px] h-[90px] grid grid-cols-3 text-gray-600",
            colIndex == 3 && "border-l-4",
            colIndex == 5 && "border-r-4",
            rowIndex == 3 && "border-t-4",
            rowIndex == 5 && "border-b-4"
          )}
        >
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


  const box1 = [
    board[0][0],
    board[0][1],
    board[0][2],
    board[1][0],
    board[1][1],
    board[1][2],
    board[2][0],
    board[2][1],
    board[2][2],
  ];
  const box2 = [
    board[0][3],
    board[0][4],
    board[0][5],
    board[1][3],
    board[1][4],
    board[1][5],
    board[2][3],
    board[2][4],
    board[2][5],
  ];
  const box3 = [
    board[0][6],
    board[0][7],
    board[0][8],
    board[1][6],
    board[1][7],
    board[1][8],
    board[2][6],
    board[2][7],
    board[2][8],
  ];
  const box4 = [
    board[3][0],
    board[3][1],
    board[3][2],
    board[4][0],
    board[4][1],
    board[4][2],
    board[5][0],
    board[5][1],
    board[5][2],
  ];
  const box5 = [
    board[3][3],
    board[3][4],
    board[3][5],
    board[4][3],
    board[4][4],
    board[4][5],
    board[5][3],
    board[5][4],
    board[5][5],
  ];
  const box6 = [
    board[3][6],
    board[3][7],
    board[3][8],
    board[4][6],
    board[4][7],
    board[4][8],
    board[5][6],
    board[5][7],
    board[5][8],
  ];
  const box7 = [
    board[6][0],
    board[6][1],
    board[6][2],
    board[7][0],
    board[7][1],
    board[7][2],
    board[8][0],
    board[8][1],
    board[8][2],
  ];
  const box8 = [
    board[6][3],
    board[6][4],
    board[6][5],
    board[7][3],
    board[7][4],
    board[7][5],
    board[8][3],
    board[8][4],
    board[8][5],
  ];
  const box9 = [
    board[6][6],
    board[6][7],
    board[6][8],
    board[7][6],
    board[7][7],
    board[7][8],
    board[8][6],
    board[8][7],
    board[8][8],
  ];

  console.log(box1)

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
