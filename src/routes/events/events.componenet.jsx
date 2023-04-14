import { Event } from "../../components/event/event.component";

export const Events = () => {
  return (
    <>
      <div className="px-20 w-full h-32 mt-24 flex items-end justify-start">
        <span className="py-3 mb-3 text-3xl font-bold tracking-wider text-red-300 heading ">
          Events
        </span>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-20 p-16">
        <Event events={true} />
      </div>
    </>
  );
};
