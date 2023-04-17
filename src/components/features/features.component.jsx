import { useState } from "react";
import Pensile from "../../assets/pencile.png";

export const Features = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="px-2 sm:px-10 lg:px-40 my-40 w-full lg:h-[calc(100vh-6rem)] flex flex-col lg:flex-row items-center bg-[#00ADEF] lg:items-center justify-start lg:gap-10 "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`w-1/2 py-1 px-4 my-5 lg:my-20 h-28 flex justify-center gap-16 items-center bg-white border-4 border-solid border-blue-100 rounded-[30px] duration-300  delay-100 ${
          hover && "translate-y-16"
        } shadow-xl`}
      >
        <div
          style={{
            backgroundImage: `url(${Pensile})`,
            backgroundSize: "cover",
          }}
          className="w-20 h-20"
        />
        <div className="flex flex-col items-center justify-between">
          <span className="text-2xl font-bold text-blue-500">28</span>
          <span className="text-2xl font-bold text-blue-400">STAFF</span>
        </div>
      </div>
      <div
        className={`w-1/2 py-1 px-4 my-5 lg:my-20 h-28 flex justify-center gap-16 items-center bg-white border-4 border-solid border-blue-100 rounded-[30px] duration-300  delay-100 ${
          hover && "-translate-y-32"
        } shadow-xl`}
      >
        <div
          style={{
            backgroundImage: `url(${Pensile})`,
            backgroundSize: "cover",
          }}
          className="w-20 h-20"
        />
        <div className="flex flex-col items-center justify-between">
          <span className="text-2xl font-bold text-blue-500">28</span>
          <span className="text-2xl font-bold text-blue-400">STAFF</span>
        </div>
      </div>
      <div
        className={`w-1/2 py-1 px-4 my-5 lg:my-20 h-28 flex justify-center gap-16 items-center bg-white border-4 border-solid border-blue-100 rounded-[30px] duration-300  delay-100 ${
          hover && "translate-y-32"
        } shadow-xl`}
      >
        <div
          style={{
            backgroundImage: `url(${Pensile})`,
            backgroundSize: "cover",
          }}
          className="w-20 h-20"
        />
        <div className="flex flex-col items-center justify-between">
          <span className="text-2xl font-bold text-blue-500">28</span>
          <span className="text-2xl font-bold text-blue-400">STAFF</span>
        </div>
      </div>
    </div>
  );
};
