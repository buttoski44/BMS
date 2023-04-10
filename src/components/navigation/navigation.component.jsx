import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link, NavLink, Outlet } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <div className=" fixed top-0 left-0 flex items-center justify-between w-full h-24 backdrop-blur-xl z-10 border-solid border-[#e4e2e2] border-[1px]">
        <div className=" flex justify-center items-center ">
          <Link
            to="/"
            className="w-16 h-16 ml-10 my-4 flex justify-center items-center bg-[#fcfcfc] rounded-lg shadow-xl"
          >
            <Logo className="w-12 h-12 " />
          </Link>
          <span className="ml-4 p-2 text-3xl font-semibold">
            Bhagwan Mahavir School
          </span>
        </div>
        <div className="flex mx-10 my-4">
          <NavLink
            to="/events"
            className="mx-2 px-4 py-4 border-b-[1px] border-[#e4e2e2] border-solid transition-[box-shadow,background-color,border-radius,border-style] delay-75 duration-300 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none focus:bg-[#fcfcfc]"
          >
            Events
          </NavLink>
          <NavLink
            to="/achiev"
            className="mx-2 px-4 py-4 border-b-[1px] border-[#e4e2e2] border-solid transition-[box-shadow,background-color,border-radius,border-style] delay-75 duration-300 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none focus:bg-[#fcfcfc]"
          >
            Achievement
          </NavLink>
          <NavLink
            to="/contact"
            className="mx-2 px-4 py-4 border-b-[1px] border-[#e4e2e2] border-solid transition-[box-shadow,background-color,border-radius,border-style] delay-75 duration-300 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none focus:bg-[#fcfcfc]"
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="mx-2 px-4 py-4 border-b-[1px] border-[#e4e2e2] border-solid transition-[box-shadow,background-color,border-radius,border-style] delay-75 duration-300 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none focus:bg-[#fcfcfc]"
          >
            About
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};
