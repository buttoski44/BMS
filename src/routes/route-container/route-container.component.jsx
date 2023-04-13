import { Achievements } from "../achievements/achievements.componenet";
import { Contact } from "../contact/contact.componenet";
import { About } from "../about/about.componenet";
import { useParams } from "react-router-dom";
import { Events } from "../events/events.componenet";

export const RouteContainer = () => {
  const { nav } = useParams();

  switch (nav) {
    case "events":
      return <Events />;

    case "achiev":
      return <Achievements />;

    case "contact":
      return (
        <>
          <div
            style={{ backgroundImage: `url()` }}
            className="px-20 w-full h-32 mt-24 bg-[#F31C23] flex items-end justify-start"
          >
            <span className="py-5 mb-3 text-4xl font-bold tracking-wider text-black heading ">
              Contact
            </span>
          </div>
          <Contact />
        </>
      );
    case "about":
      return (
        <>
          <div
            style={{ backgroundImage: `url()` }}
            className="px-20 w-full h-32 mt-24 bg-[#F31C23] flex items-end justify-start"
          >
            <span className="py-5 mb-3 text-4xl font-bold tracking-wider text-black heading ">
              About
            </span>
          </div>
          <About />
        </>
      );

    default:
      return null;
  }
};
