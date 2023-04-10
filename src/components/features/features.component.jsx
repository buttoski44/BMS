import Texture from "../../assets/texture.svg";

export const Features = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Texture})` }}
      className="w-full h-40 my-40 flex items-center justify-center gap-36 bg-[#f3f3f3]"
    >
      <div className="w-1/5 h-4/6 bg-[#fff] shadow-md rounded-sm" />
      <div className="w-1/5 h-4/6 bg-[#fff] shadow-md rounded-sm" />
      <div className="w-1/5 h-4/6 bg-[#fff] shadow-md rounded-sm" />
    </div>
  );
};
