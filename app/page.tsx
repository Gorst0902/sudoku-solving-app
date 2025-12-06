"use client";

import { useState } from "react";
import { clsx } from "clsx";

const sudokuNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const _ = undefined;

const sudokuBoard = [
  [_, _, _, 4, 9, _, _, _, _],
  [3, _, 6, _, _, _, _, _, 7],
  [_, 8, _, _, 5, 3, _, 9, _],
  [6, _, _, 5, _, 1, _, 8, _],
  [_, 3, _, _, _, _, _, 5, _],
  [5, 4, _, _, _, _, 3, _, _],
  [_, 1, _, _, 6, _, _, _, 3],
  [_, _, _, 1, _, _, _, 2, 4],
  [_, _, 8, 3, _, 4, _, 6, _],
];

const Box = [
  [
    sudokuBoard[0][0],
    sudokuBoard[0][1],
    sudokuBoard[0][2],
    sudokuBoard[1][0],
    sudokuBoard[1][1],
    sudokuBoard[1][2],
    sudokuBoard[2][0],
    sudokuBoard[2][1],
    sudokuBoard[2][2],
  ],
  [
    sudokuBoard[0][3],
    sudokuBoard[0][4],
    sudokuBoard[0][5],
    sudokuBoard[1][3],
    sudokuBoard[1][4],
    sudokuBoard[1][5],
    sudokuBoard[2][3],
    sudokuBoard[2][4],
    sudokuBoard[2][5],
  ],
  [
    sudokuBoard[0][6],
    sudokuBoard[0][7],
    sudokuBoard[0][8],
    sudokuBoard[1][6],
    sudokuBoard[1][7],
    sudokuBoard[1][8],
    sudokuBoard[2][6],
    sudokuBoard[2][7],
    sudokuBoard[2][8],
  ],
  [
    sudokuBoard[3][0],
    sudokuBoard[3][1],
    sudokuBoard[3][2],
    sudokuBoard[4][0],
    sudokuBoard[4][1],
    sudokuBoard[4][2],
    sudokuBoard[5][0],
    sudokuBoard[5][1],
    sudokuBoard[5][2],
  ],
  [
    sudokuBoard[3][3],
    sudokuBoard[3][4],
    sudokuBoard[3][5],
    sudokuBoard[4][3],
    sudokuBoard[4][4],
    sudokuBoard[4][5],
    sudokuBoard[5][3],
    sudokuBoard[5][4],
    sudokuBoard[5][5],
  ],
  [
    sudokuBoard[3][6],
    sudokuBoard[3][7],
    sudokuBoard[3][8],
    sudokuBoard[4][6],
    sudokuBoard[4][7],
    sudokuBoard[4][8],
    sudokuBoard[5][6],
    sudokuBoard[5][7],
    sudokuBoard[5][8],
  ],
  [
    sudokuBoard[6][0],
    sudokuBoard[6][1],
    sudokuBoard[6][2],
    sudokuBoard[7][0],
    sudokuBoard[7][1],
    sudokuBoard[7][2],
    sudokuBoard[8][0],
    sudokuBoard[8][1],
    sudokuBoard[8][2],
  ],
  [
    sudokuBoard[6][3],
    sudokuBoard[6][4],
    sudokuBoard[6][5],
    sudokuBoard[7][3],
    sudokuBoard[7][4],
    sudokuBoard[7][5],
    sudokuBoard[8][3],
    sudokuBoard[8][4],
    sudokuBoard[8][5],
  ],
  [
    sudokuBoard[6][6],
    sudokuBoard[6][7],
    sudokuBoard[6][8],
    sudokuBoard[7][6],
    sudokuBoard[7][7],
    sudokuBoard[7][8],
    sudokuBoard[8][6],
    sudokuBoard[8][7],
    sudokuBoard[8][8],
  ]
]

function findLocation(row: number, col: number) {
  if (row < 3 && col < 3) {
    return 0
  } else if (row < 3 && 2 < col && col < 6) {
    return 1
  } else if (row < 3 && col > 5) {
    return 2
  } else if (row > 2 && row < 6 && col < 3) {
    return 3
  } else if (row > 2 && row < 6 && col > 2 && col < 6) {
    return 4
  } else if (row > 2 && row < 6 && col > 6) {
    return 5
  } else if (row > 5 && col < 3) {
    return 6
  } else if (row > 5 && col > 2 && col < 6) {
    return 7
  } else {
    return 8
  }

}

function possibleNumbers(
  newBoard: (number | undefined)[][],
  rowIndex: number,
  colIndex: number,
) {
  const thisRow = newBoard[rowIndex];

  const thisCol = newBoard.map((rowIndex) => rowIndex[colIndex]);

  const possibleNumbersInRow = sudokuNumberList.filter(
    (n) => !thisRow?.includes(n)
  );

  const possibleNumbersInCol = sudokuNumberList.filter(
    (n) => !thisCol?.includes(n)
  );

  const combinedArray = possibleNumbersInRow.filter(element => possibleNumbersInCol.includes(element));

  const location = findLocation(rowIndex, colIndex)

  console.log(Box[location])

  const resultList = combinedArray.filter(item => !Box[location].includes(item));

  console.log("check trong box", resultList)

  if (possibleNumbersInRow.length == 1) return possibleNumbersInRow;

  if (possibleNumbersInCol.length == 1) return possibleNumbersInCol;

  return resultList;
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
