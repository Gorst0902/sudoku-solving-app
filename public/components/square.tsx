// import { sudokuMiniBoard } from "@/app/page";

// const sudokuNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const _ = undefined;

// const possibleNumbers = () => {
//   const usedNumbers = sudokuMiniBoard
//     .flat()
//     .filter((n) => n !== undefined);

//   return sudokuNumberList.filter((n) => !usedNumbers.includes(n));
// };

// if (possibleNumbers().length == 1) {
//   // value = possibleNumbers()[0]
//   console.log("so cuoi cung",possibleNumbers()[0])
// }

// export const Square = ({ value }: { value?: number | undefined }) => {
//   const isEmpty = value === undefined || value === null;

//   if (!isEmpty) {
//     return (
//       <div className="border border-black w-[50px] h-[50px] flex justify-center items-center">
//         {value}
//       </div>
//     );
//   }
//   return (
//     <div className="border border-black w-[50px] h-[50px] flex justify-center items-center"></div>
//   );
// };
