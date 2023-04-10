import Pensile from "../../assets/pensile.png";
import Background from "../../assets/carasoule-back.svg";
export const Carasoul = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
      className="w-full h-[calc(100vh-6rem)] mt-24 bg-[#f3f3f3] flex justify-center overflow-hidden relative -z-10"
    >
      <div className="w-1/2 h-96 mt-12 bg-white shadow-2xl rounded-xl flex items-end justify-center ">
        <div className="p-3 m-2">
          <button className="w-3 h-3 mx-1 bg-[#e4e2e2] rounded-[50%]" />
          <button className="w-3 h-3 mx-1 bg-[#e4e2e2] rounded-[50%]" />
          <button className="w-3 h-3 mx-1 bg-[#e4e2e2] rounded-[50%]" />
        </div>
      </div>
      <img
        src={Pensile}
        alt="pensileImg"
        className="w-20 h-20  absolute top-0 left-0 box-animation -z-10"
      />
    </div>
  );
};
