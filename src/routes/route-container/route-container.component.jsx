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
      return <Contact />;

    case "about":
      return (
        <>
          <About />
        </>
      );

    default:
      return null;
  }
};
