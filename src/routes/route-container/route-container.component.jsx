import { Achievements } from "../achievements/achievements.componenet";
import { Contact } from "../contact/contact.componenet";
import { About } from "../about/about.componenet";
import { useParams } from "react-router-dom";
import { Events } from "../events/events.componenet";
import { AnimatePresence } from "framer-motion";
export const RouteContainer = () => {
  const { nav } = useParams();

  switch (nav) {
    case "events":
      return (
        <AnimatePresence>
          <Events />
        </AnimatePresence>
      );

    case "achiev":
      return <Achievements />;

    case "contact":
      return <Contact />;

    case "about":
      return <About />;

    default:
      return null;
  }
};
