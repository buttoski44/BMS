

export const Carasoul = () => {
    return (
        <div style={{ backgroundImage:"url()", backgroundRepeat:"no-repeat",backgroundSize:"auto"}} className="w-full h-[calc(100vh-6rem)] mt-24 bg-[#f3f3f3] flex flex-col items-center relative -z-20">
            <div className="w-1/2 h-96 mt-12 bg-white "></div>
            <div className="mt-10 ">
            <button className="w-3 h-3 mx-1 bg-white rounded-[50%]"/>
            <button className="w-3 h-3 mx-1 bg-white rounded-[50%]"/>
            <button className="w-3 h-3 mx-1 bg-white rounded-[50%]"/>
            </div>
            <div className="w-20 h-20 bg-[#8ed6f3] absolute top-0 left-0 box-animation -z-10"/>
        </div>
    )
}