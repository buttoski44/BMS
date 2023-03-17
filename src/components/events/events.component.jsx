import { Event } from "../event/event.component";

export const Events = () => {
   return ( 
      <div className="px-10 my-11 w-full h-1/2 flex flex-col justify-centre align-centre gap-9">
        <div className="text-center">Events</div>
        <div className='w-full flex items-center justify-around'>
            <Event/>
            <Event/>
            <Event/>
        </div>
      </div>
   )
};