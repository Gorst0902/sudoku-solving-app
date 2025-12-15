"use client";

import { useState, useEffect } from "react";
import { clsx } from "clsx";

const sudokuNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const _ = undefined;

const newMap = [
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
];

function findLocation(row: number, col: number) {
  if (row < 3 && col < 3) {
    return 0;
  } else if (row < 3 && 2 < col && col < 6) {
    return 1;
  } else if (row < 3 && col > 5) {
    return 2;
  } else if (row > 2 && row < 6 && col < 3) {
    return 3;
  } else if (row > 2 && row < 6 && col > 2 && col < 6) {
    return 4;
  } else if (row > 2 && row < 6 && col > 5) {
    return 5;
  } else if (row > 5 && col < 3) {
    return 6;
  } else if (row > 5 && col > 2 && col < 6) {
    return 7;
  } else {
    return 8;
  }
}

function possibleNumbers(
  newBoard: (number | undefined)[][],
  rowIndex: number,
  colIndex: number,
  box: (number | undefined)[][]
) {
  const thisRow = newBoard[rowIndex];
  const thisCol = newBoard.map((rowIndex) => rowIndex[colIndex]);
  const possibleNumbersInRow = sudokuNumberList.filter(
    (n) => !thisRow?.includes(n)
  );
  const possibleNumbersInCol = sudokuNumberList.filter(
    (n) => !thisCol?.includes(n)
  );
  const combinedArray = possibleNumbersInRow.filter((element) =>
    possibleNumbersInCol.includes(element)
  );
  const location = findLocation(rowIndex, colIndex);
  console.log(box[location]);
  const resultList = combinedArray.filter(
    (item) => !box[location].includes(item)
  );

  if (possibleNumbersInRow.length == 1) return possibleNumbersInRow;
  if (possibleNumbersInCol.length == 1) return possibleNumbersInCol;
  return resultList;
}

export default function Home() {
  const [board, setBoard] = useState<(number | undefined)[][]>(newMap);
  const [doneMap, setDoneMap] = useState(false);

  const [activeCell, setActiveCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const Square = ({
    value,
    rowIndex,
    colIndex,
    box,
  }: {
    value?: number | undefined;
    rowIndex: number;
    colIndex: number;
    box: (number | undefined)[][];
  }) => {
    const isEmpty = value === undefined || value === null;
    const finalPossibleNumbers = possibleNumbers(
      board,
      rowIndex,
      colIndex,
      box
    );

    useEffect(() => {
      if (isEmpty && finalPossibleNumbers.length === 1) {
        const updated = board.map((row) => [...row]);
        updated[rowIndex][colIndex] = finalPossibleNumbers[0]!;
        setBoard(updated);
      }
    }, [finalPossibleNumbers.length]);

    if (!isEmpty) {
      return (
        <div
          className={clsx(
            "border border-gray-400 w-[60px] h-[60px] flex flex-col justify-center items-center font-bold text-2xl",
            colIndex == 3 && "border-l-4",
            colIndex == 5 && "border-r-4",
            rowIndex == 3 && "border-t-4",
            rowIndex == 5 && "border-b-4"
          )}
        >
          {value}
        </div>
      );
    }

    return (
      <>
        <div
          className={clsx(
            "border border-gray-400 w-[60px] h-[60px] grid grid-cols-3 text-gray-600",
            colIndex == 3 && "border-l-4",
            colIndex == 5 && "border-r-4",
            rowIndex == 3 && "border-t-4",
            rowIndex == 5 && "border-b-4"
          )}
        >
          <span className="flex items-center justify-center w-[20px] h-[20px] text-sm">
            {finalPossibleNumbers.includes(1) && 1}
          </span>
          <span className="flex items-center justify-center w-[20px] h-[20px] text-sm">
            {finalPossibleNumbers.includes(2) && 2}
          </span>
          <span className="flex items-center justify-center w-[20px] h-[20px] text-sm">
            {finalPossibleNumbers.includes(3) && 3}
          </span>
          <span className="flex items-center justify-center w-[20px] h-[20px] text-sm">
            {finalPossibleNumbers.includes(4) && 4}
          </span>
          <span className="flex items-center justify-center w-[20px] h-[20px] text-sm">
            {finalPossibleNumbers.includes(5) && 5}
          </span>
          <span className="flex items-center justify-center w-[20px] h-[20px] text-sm">
            {finalPossibleNumbers.includes(6) && 6}
          </span>
          <span className="flex items-center justify-center w-[20px] h-[20px] text-sm">
            {finalPossibleNumbers.includes(7) && 7}
          </span>
          <span className="flex items-center justify-center w-[20px] h-[20px] text-sm">
            {finalPossibleNumbers.includes(8) && 8}
          </span>
          <span className="flex items-center justify-center w-[20px] h-[20px] text-sm">
            {finalPossibleNumbers.includes(9) && 9}
          </span>
        </div>
      </>
    );
  };

  const Box = [
    [
      board[0][0],
      board[0][1],
      board[0][2],
      board[1][0],
      board[1][1],
      board[1][2],
      board[2][0],
      board[2][1],
      board[2][2],
    ],
    [
      board[0][3],
      board[0][4],
      board[0][5],
      board[1][3],
      board[1][4],
      board[1][5],
      board[2][3],
      board[2][4],
      board[2][5],
    ],
    [
      board[0][6],
      board[0][7],
      board[0][8],
      board[1][6],
      board[1][7],
      board[1][8],
      board[2][6],
      board[2][7],
      board[2][8],
    ],
    [
      board[3][0],
      board[3][1],
      board[3][2],
      board[4][0],
      board[4][1],
      board[4][2],
      board[5][0],
      board[5][1],
      board[5][2],
    ],
    [
      board[3][3],
      board[3][4],
      board[3][5],
      board[4][3],
      board[4][4],
      board[4][5],
      board[5][3],
      board[5][4],
      board[5][5],
    ],
    [
      board[3][6],
      board[3][7],
      board[3][8],
      board[4][6],
      board[4][7],
      board[4][8],
      board[5][6],
      board[5][7],
      board[5][8],
    ],
    [
      board[6][0],
      board[6][1],
      board[6][2],
      board[7][0],
      board[7][1],
      board[7][2],
      board[8][0],
      board[8][1],
      board[8][2],
    ],
    [
      board[6][3],
      board[6][4],
      board[6][5],
      board[7][3],
      board[7][4],
      board[7][5],
      board[8][3],
      board[8][4],
      board[8][5],
    ],
    [
      board[6][6],
      board[6][7],
      board[6][8],
      board[7][6],
      board[7][7],
      board[7][8],
      board[8][6],
      board[8][7],
      board[8][8],
    ],
  ];

  const SquareCanType = ({
    rowIndex,
    colIndex,
    activeCell,
    setActiveCell,
    value,
  }: {
    rowIndex: number;
    colIndex: number;
    activeCell: { row: number; col: number } | null;
    setActiveCell: (pos: { row: number; col: number }) => void;
    value: number | undefined;
  }) => {
    const isActive =
      activeCell?.row === rowIndex && activeCell?.col === colIndex;
    function handleClick() {
      setActiveCell({ row: rowIndex, col: colIndex });
    }
    return (
      <div
        className={clsx(
          "border cursor-pointer border-gray-400 w-[60px] h-[60px] flex justify-center items-center font-bold text-2xl",
          colIndex == 3 && "border-l-4",
          colIndex == 5 && "border-r-4",
          rowIndex == 3 && "border-t-4",
          rowIndex == 5 && "border-b-4",
          isActive && "bg-blue-300"
        )}
        onClick={handleClick}
      >
        {value}
      </div>
    );
  };

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!activeCell) return; // no square selected

      const num = Number(e.key);
      if (num >= 1 && num <= 9) {
        setBoard((prev) => {
          const newBoard = prev.map((row) => [...row]);
          newBoard[activeCell.row][activeCell.col] = num;
          return newBoard;
        });
      }

      if (e.key === "Backspace" || e.key === "Delete") {
        setBoard((prev) => {
          const newBoard = prev.map((row) => [...row]);
          newBoard[activeCell.row][activeCell.col] = undefined;
          return newBoard;
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCell]);

  if (doneMap) {
    return (
      <div className="bg-white h-screen text-black flex justify-center items-center">
        <div className="m-auto">
          <div>
            {board.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-9">
                {row.map((cell, cellIndex) => (
                  <Square
                    key={cellIndex}
                    colIndex={cellIndex}
                    rowIndex={rowIndex}
                    value={board[rowIndex][cellIndex]} // <-- required
                    box={Box}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 py-2 px-6 rounded-3xl cursor-pointer"
              onClick={() => {
                setDoneMap(false);
              }}
            >
              Try new board
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white h-screen text-black flex justify-center items-center">
      <div className="m-auto">
        <div>
          {newMap.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-9">
              {row.map((cell, cellIndex) => (
                <SquareCanType
                  key={cellIndex}
                  colIndex={cellIndex}
                  rowIndex={rowIndex}
                  activeCell={activeCell}
                  setActiveCell={setActiveCell}
                  value={board[rowIndex][cellIndex]}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-400 py-2 px-6 rounded-3xl cursor-pointer"
            onClick={() => {
              setDoneMap(true);
            }}
          >
            Solve
          </button>
        </div>
      </div>
    </div>
  );
}
