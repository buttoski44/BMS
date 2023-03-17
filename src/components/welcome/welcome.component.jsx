import { ReactComponent as Logo} from "../../assets/logo.svg";
import "./welcome.styles.css";

export const Welcome = ({setOk}) => {
    
    const onClickHandler = (e) => {
        e.preventDefault();
        setOk(false);
    }
    return (
        <div className="absolute inset-0 h-screen w-full flex flex-col justify-center items-center backdrop-blur backdrop-brightness-105">
            <Logo className="m-2 p-2 w-40 h-40"/>
            <button className="px-2.5 py-2 rounded-md m-2 bg-[#c5c4c4]" onClick={onClickHandler}>Procced!</button>
        </div>
    )
}