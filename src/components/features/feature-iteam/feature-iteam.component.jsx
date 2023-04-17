import Pensile from "../../../assets/pencile.png";
export const FeatureItem = ({ hover, trans }) => {
  return (
    <div className="">
      <div
        className={`w-full py-1 px-4 my-5 lg:my-20 h-28 flex justify-center gap-16 items-center bg-white border-4 border-solid border-blue-100 rounded-[30px] lg:${
          hover && trans
        } shadow-xl`}
      >
        <div
          style={{
            backgroundImage: `url(${Pensile})`,
            backgroundSize: "cover",
          }}
          className="w-20 h-20"
        />
        <div className="flex flex-col items-center justify-between">
          <span className="text-2xl font-bold text-blue-500">28</span>
          <span className="text-2xl font-bold text-blue-400">STAFF</span>
        </div>
      </div>
    </div>
  );
};
