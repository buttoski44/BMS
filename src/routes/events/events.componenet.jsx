import { Event } from "../../components/event/event.component";
import { motion } from "framer-motion";
export const Events = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="flex items-end justify-start w-full h-32 px-20 mt-24">
        <span className="py-3 mb-3 text-3xl font-bold tracking-wider text-red-300 heading ">
          Events
        </span>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-20 p-16">
        <Event events={true} />
        <Event events={true} />
        <Event events={true} />
        <Event events={true} />
        <Event events={true} />
        <Event events={true} />
      </div>
    </motion.section>
  );
};
