import { Event } from "../../components/event/event.component";

export const Events = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url()` }}
        className="px-20 w-full h-32 mt-24 bg-[#F31C23] flex items-end justify-start"
      >
        <span className="py-3 mb-3 text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-100 heading ">
          Events
        </span>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-20 p-16">
        <Event events={true} />
      </div>
    </>
  );
};
