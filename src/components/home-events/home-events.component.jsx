import { Event } from "../event/event.component";

export const HomeEvents = () => {
  return (
    <div
      style={{
        backgroundImage: `url()`,
      }}
      className="px-2 sm:px-10 lg:px-40 my-96 w-full lg:h-[calc(100vh-6rem)] bg-[#F31C23] flex flex-col justify-center items-center gap-10"
    >
      <h2 className="py-3 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-100 ">
        Events
      </h2>
      <div className="flex flex-wrap gap-10 items-center justify-around w-full py-4">
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
};
