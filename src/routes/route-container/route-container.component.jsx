import { Events } from "../events/events.component";
import { Achievements } from "../achievements/achievements.componenet";
import { Contact } from "../contact/contact.componenet";
import { About } from "../about/about.componenet";
import { useParams } from "react-router-dom";
import Blackboard from "../../assets/dark-wood.jpg";

export const RouteContainer = () => {
    const { nav } = useParams();
    
    switch (nav) {
        case "events":
            return (
            <>
                <div style={{ backgroundImage : `url()`,}} className="border- w-full h-48 bg-[#f3f3f3] flex items-end justify-center">
                    <span className="mb-3 p-5 font-semibold text-wblacktext-3xl tracking-wider">Events</span>
                </div>    
                <Events events={true}/>
            </>
            );
        case "achiev":
            return (
            <>
                <div style={{ backgroundImage :`url()`,}} className="w-full h-48 bg-[#f3f3f3] flex items-end justify-center">
                    <span className="mb-3 p-5 font-semibold text-black text-3xl tracking-wider">Achievements</span>
                </div>
                <Achievements/>
            </>
            );
        case "contact":
            return (
            <>
                <div style={{ backgroundImage :`url()`,}} className="w-full h-48 bg-[#f3f3f3] flex items-end justify-center">
                    <span className="mb-3 p-5 font-semibold text-black text-3xl tracking-wider">Contact</span>
                </div>
                <Contact/>
            </>
            );
        case "about":
            return (
            <>
                <div style={{ backgroundImage :`url()`,}} className="w-full h-48 bg-[#f3f3f3] flex items-end justify-center">
                    <span className="mb-3 p-5 font-semibold text-black text-3xl tracking-wider">About</span>
                </div>
                <About/>
            </>    
            );

        default:
            return null;
    }
};