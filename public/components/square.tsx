export const Square = ({ value }: { value?: number | undefined }) => {
    const isEmpty = value === undefined || value === null;

  if (!isEmpty) {
    return (
      <div className="border border-black w-[50px] h-[50px] flex justify-center items-center">
        {value}
      </div>
    );
  } 
  return (
      <div className="border border-black w-[50px] h-[50px] flex justify-center items-center"></div>
    );
};
