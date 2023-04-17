import { GoogleMap } from "../../components/google-map/google-map.component";
import { motion } from "framer-motion";
export const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }}
    animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <div
        style={{ backgroundImage: `url()` }}
        className="flex items-end justify-start w-full h-32 px-20 mt-24"
      >
        <span className="py-5 mb-3 text-4xl font-bold tracking-wider text-red-300 heading ">
          Contact
        </span>
      </div>
      <div
        style={{ backgroundImage: `url()` }}
        className="mt-5 mx-40 p-5 bg-[#f3f3f3]"
      >
        <div className="flex justify-center my-5">
          <div className="flex flex-col w-1/2 pl-40">
            <div className="text-lg font-medium tracking-wider">
              Email:
              <br />
              <p className="mb-5 text-base font-normal tracking-normal">
                BMS1976@gmail.com
              </p>
            </div>
            <div className="text-lg font-medium tracking-wider">
              Tele No.
              <br />
              <p className="mb-5 text-base font-normal tracking-normal">
                +2145-50987
              </p>
            </div>
            <br />
            <br />
            <div className="text-lg font-medium tracking-wider">
              Address:
              <br />
              <p className="mb-5 text-base font-normal tracking-normal">
                Plot NO.110. ,Near Colagate company,
                <br /> bajananagar, Aurangabad.
              </p>
            </div>
          </div>
          <GoogleMap />
        </div>
      </div>
    </motion.section>
  );
};
