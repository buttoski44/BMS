import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=""
    >
      <div
        style={{ backgroundImage: `url()` }}
        className="flex items-end justify-start w-full h-32 px-20 mt-24"
      >
        <span className="py-5 mb-3 text-4xl font-bold tracking-wider text-red-300 heading ">
          About
        </span>
      </div>
    </motion.section>
  );
};
