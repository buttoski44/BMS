import "./welcome.styles.css";
import { ReactComponent as Logo} from "../../assets/logo.svg";
import { useSpring, animated } from '@react-spring/web';


export const Welcome = ({setOk}) => {
    const style = useSpring({
        from : {opacity: 1},
        to: {opacity: 0},
        delay: 500,
        config: {duration: 1000}
    })

    const onClickHandler = (e) => {
        e.preventDefault();
        setOk(false);
    }
    return (
        <animated.div style={style} className="absolute inset-0 h-screen w-full flex flex-col justify-center items-center backdrop-blur backdrop-brightness-105" onClick={onClickHandler}>
            <Logo className="m-2 p-2 w-40 h-40"/>
        </animated.div>
    )
}