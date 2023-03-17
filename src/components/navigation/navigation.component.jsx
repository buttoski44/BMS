import { ReactComponent as Logo} from "../../assets/logo.svg";

export const Navigation = () => {
    return (
        <div className='flex items-center justify-between fixed w-full h-24 backdrop-blur-xl'>
            <div className="w-16 h-16 mx-10 my-4 flex justify-center items-center bg-[#fcfcfc] rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.1] hover:shadow-2xl">
                <Logo className="w-12 h-12 "/>
            </div>
            <ul className="flex mx-10 my-4">
                <li className="px-4 py-4 transition-all delay-75 duration-300 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl focus:bg-[#fcfcfc]">Events</li>
                <li className="px-4 py-4 transition-all delay-75 duration-300 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl">Achievement</li>
                <li className="px-4 py-4 transition-all delay-75 duration-300 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl">Contact</li>
                <li className="px-4 py-4 transition-all delay-75 duration-300 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl">About</li>
            </ul>
        </div>
    )
}