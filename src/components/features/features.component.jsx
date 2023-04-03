import Pattern from "../../assets/pattern.svg";

export const Features = () => {
    return(
        <div style={{ backgroundImage: `url(${Pattern})`}} className="w-full h-20 my-10 flex items-center justify-center gap-36 bg-[#f3f3f3]" >
            <div className="w-1/5 h-4/6 bg-[#fff] rounded-sm"/>
            <div className="w-1/5 h-4/6 bg-[#fff] rounded-sm"/>
            <div className="w-1/5 h-4/6 bg-[#fff] rounded-sm"/>
        </div>
    )
}