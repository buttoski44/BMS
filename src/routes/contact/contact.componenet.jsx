import { GoogleMap } from "../../components/google-map/google-map.component";

export const Contact = () => {
  return (
    <div
      style={{ backgroundImage: `url()` }}
      className="mt-5 mx-20 p-5 bg-[#f3f3f3]"
    >
      <div className="flex justify-center my-5">
        <div className="flex flex-col w-1/2 pl-40">
          <div className="text-lg font-medium tracking-wider">
            Email:
            <br />
            <p className="text-base mb-5 font-normal tracking-normal">
              BMS1976@gmail.com
            </p>
          </div>
          <div className="text-lg font-medium tracking-wider">
            Tele No.
            <br />
            <p className="text-base mb-5 font-normal tracking-normal">
              +2145-50987
            </p>
          </div>
          <br />
          <br />
          <div className="text-lg font-medium tracking-wider">
            Address:
            <br />
            <p className="text-base mb-5 font-normal tracking-normal">
              Plot NO.110. ,Near Colagate company,
              <br /> bajananagar, Aurangabad.
            </p>
          </div>
        </div>
        <GoogleMap />
      </div>
    </div>
  );
};
