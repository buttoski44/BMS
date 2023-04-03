import { Event } from "../../components/event/event.component";


export const Events = ({events}) => {
   return ( 
      <div className="my-11 px-10 w-full h-1/2 flex flex-col justify-centre align-centre gap-9">
        {events ? null : <div className="text-center">Events</div>}
        <div className='w-full flex items-center justify-around'>
            <Event/>
            <Event/>
            <Event/>
        </div>
      </div>
   )
};