import Pensile from "../../assets/writing-tool.png";
import SchoolBag from "../../assets/school-bag.png";
import Crayons from "../../assets/crayons.png";
import Supplies from "../../assets/supplies.png";
import Background from "../../assets/bg-pattern.jpg";

export const Carasoul = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "contain",
      }}
      className="w-full h-[calc(100vh-6rem)] mt-24 bg-[#00ADEF] flex justify-center items-center  overflow-hidden relative -z-20"
    >
      <div className="w-[683px] h-96 mt-12 bg-white shadow-2xl rounded-xl flex items-end justify-center">
        <div className="p-3 m-2">
          <button className="w-3 h-3 mx-1 bg-[#00ADEF] rounded-[50%]" />
          <button className="w-3 h-3 mx-1 bg-[#00ADEF] rounded-[50%]" />
          <button className="w-3 h-3 mx-1 bg-[#00ADEF] rounded-[50%]" />
        </div>
      </div>
      <img
        src={Pensile}
        alt="pensileImg"
        className="w-28 h-28  absolute top-0 left-0 pensile-animation -z-10"
      />
      <img
        src={Pensile}
        alt="pensileImg"
        className="w-28 h-28  absolute top-0 left-0 pensile2-animation -z-10"
      />
      <img
        src={SchoolBag}
        alt="SchoolBagImg"
        className="w-28 h-28  absolute top-0 left-0 bag-animation -z-10"
      />
      <img
        src={Crayons}
        alt="CrayonsImg"
        className="w-28 h-28  absolute top-0 left-0 caryons-animation -z-10"
      />

      <img
        src={Crayons}
        alt="CrayonsImg"
        className="w-28 h-28  absolute top-0 left-0 caryons2-animation -z-10"
      />

      <img
        src={Supplies}
        alt="SuppliesImg"
        className="w-28 h-28  absolute top-0 left-0 supplies-animation -z-10"
      />
    </div>
  );
};
