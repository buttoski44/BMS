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
        <AnimatePresence mode="wait">
          <Events key="event" />
        </AnimatePresence>
      );

    case "achiev":
      return (
        <AnimatePresence mode="wait">
          <Achievements key="achive" />
        </AnimatePresence>
      );

    case "contact":
      return (
        <AnimatePresence mode="wait">
          <Contact key="contact" />
        </AnimatePresence>
      );

    case "about":
      return (
        <AnimatePresence mode="wait">
          <About key="about" />
        </AnimatePresence>
      );

    default:
      return null;
  }
};
