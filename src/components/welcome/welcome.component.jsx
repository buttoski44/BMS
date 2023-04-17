import "./welcome.styles.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Welcome = ({ setOk }) => {
  const onClickHandler = (e) => {
    e.preventDefault();
    setOk(false);
  };
  return (
    <div
      style={style}
      className="absolute inset-0 flex flex-col items-center justify-center w-full h-screen backdrop-blur backdrop-brightness-105"
      onClick={onClickHandler}
    >
      <Logo className="w-40 h-40 p-2 m-2" />
    </div>
  );
};
