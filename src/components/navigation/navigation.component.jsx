import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import HamburgerIcon from "../../assets/hamburger.png";
export const Navigation = () => {
  return (
    <>
      <div className=" fixed top-0 left-0 flex items-center justify-between w-full h-20 sm:h-24 bg-white z-10 border-solid border-[#e4e2e2] border-b-[1px]">
        <div className="flex items-center justify-center ">
          <Link
            to="/"
            className="w-[64px] h-[64px] ml-10 my-4 flex justify-center items-center bg-[#fcfcfc] rounded-lg shadow-xl "
          >
            <Logo className="w-[48px] h-[48px] " />
          </Link>
          <span className="ml-4 p-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] via-[#00A650] to-[#F31C23] font-bold hidden xl:block ">
            Bhagwan Mahavir School
          </span>
        </div>
        <div className="flex mx-10 my-4">
          <NavLink
            to="/events"
            className="mx-2 px-4 py-4 text-lg text-[#8b8b8b] font-medium transition-[box-shadow,background-color,border-radius,border-style] delay-75 duration-275 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none focus:bg-[#fcfcfc] hidden sm:block "
          >
            Events
          </NavLink>
          <NavLink
            to="/achiev"
            className="mx-2 px-4 py-4 text-lg text-[#8b8b8b] font-medium transition-[box-shadow,background-color,border-radius,border-style] delay-75 duration-275 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none focus:bg-[#fcfcfc] hidden sm:block"
          >
            Achievement
          </NavLink>
          <NavLink
            to="/contact"
            className="mx-2 px-4 py-4 text-lg text-[#8b8b8b] font-medium transition-[box-shadow,background-color,border-radius,border-style] delay-75 duration-275 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none focus:bg-[#fcfcfc] hidden sm:block"
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="mx-2 px-4 py-4 text-lg text-[#8b8b8b] font-medium transition-[box-shadow,background-color,border-radius,border-style] delay-75 duration-275 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none focus:bg-[#fcfcfc] hidden sm:block"
          >
            About
          </NavLink>
          <div
            style={{
              backgroundImage: `url(${HamburgerIcon})`,
              backgroundSize: "contain",
            }}
            className="w-8 h-8 p-4 sm:hidden"
          ></div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
