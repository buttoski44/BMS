export const Section = ({ children }) => {
  return (
    <button className="w-24 h-10 text-[#F31C23] bg-red-200 rounded-xl duration-200 border-red-200 hover:cursor-pointer hover:bg-red-100 hover:border-[1px]">
      {children}
    </button>
  );
};
