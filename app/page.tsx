import { Square } from "@/public/components/square";

const sudokuNumberList = [1, 2, 3 ,4 , 5, 6, 7, 8, 9]

const _ = undefined

const sudokuMiniBoardExample = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sudokuMiniBoard = [
  [1, _, _],
  [_, 2, _],
  [_, _, 3],
]

function solvingSudokuSquare({miniboard} : {miniboard:Array<number>})  {
  let value
  return (value);
}

export default function Home() {
  return (
    <div className="bg-white h-screen text-black">
      {/* <div className="mx-auto w-[450px] grid grid-cols-9"></div>
       */}
      <div className="mx-auto w-[150px]">
        {sudokuMiniBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-3">
            {row.map((cell, cellIndex) => (
              <Square key={cellIndex} value={cell} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-green-400 rounded-3xl py-2 px-5 ">Solve</button>
      </div>
    </div>
  );
}
