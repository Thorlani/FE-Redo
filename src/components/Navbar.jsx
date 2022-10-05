import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";
import useAnalyticsEventTracker from "./useAnalytics";

const Navbar = () => {
  const gaEventTracker = useAnalyticsEventTracker("Location");

  const [isToggle, setIsToggle] = useState(false);

  const showMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <div className="w-full px-[8%] p-[2%] flex justify-between items-center">
        <Link to={"/"} onClick={gaEventTracker("Home")}>
          <img
            src={Logo}
            alt="belovedthorlani"
            width={"50px"}
            height={"50px"}
            className="rounded-[50%]"
          />
        </Link>
        <ul className="hidden lg:flex w-[70%] justify-between">
          <li id="home" className="cursor-pointer text-center">
            <Link to={"/"} onClick={gaEventTracker("Home")}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer text-center">
            <Link to={"/contract"} onClick={gaEventTracker("Contract")}>
              Contract PQ
            </Link>
          </li>
          <li className="cursor-pointer text-center">
            <Link to={"/legal"} onClick={gaEventTracker("Legal system")}>
              Legal system PQ
            </Link>
          </li>
          <li className="cursor-pointer text-center">
            <Link to={"/constitutional"} onClick={gaEventTracker("Cons law")}>
              Constitutional law PQ
            </Link>
          </li>
          <li className="cursor-pointer text-center">
            <Link to={"/about"} onClick={gaEventTracker("About")}>
              About Us
            </Link>
          </li>
        </ul>
        <ul
          className={`${
            isToggle ? "flex" : "hidden"
          } fixed overflow-hidden z-[60] top-0 left-0 w-[100vw] h-[100vh] bg-black flex-col items-center justify-center lg:hidden`}
        >
          <li
            onClick={showMenu}
            className="cursor-pointer text-center text-[white] absolute top-[100px]"
          >
            <Link to={"/"} onClick={gaEventTracker("Home")}>
              Home
            </Link>
          </li>
          <li
            onClick={showMenu}
            className="cursor-pointer text-center text-[white] absolute top-[180px]"
          >
            <Link to={"/contract"} onClick={gaEventTracker("Contract")}>
              Contract PQ
            </Link>
          </li>
          <li
            onClick={showMenu}
            className="cursor-pointer text-center text-[white] absolute top-[260px]"
          >
            <Link to={"/legal"} onClick={gaEventTracker("Legal system")}>
              Legal system PQ
            </Link>
          </li>
          <li
            onClick={showMenu}
            className="cursor-pointer text-center text-[white] absolute top-[340px]"
          >
            <Link to={"/constitutional"} onClick={gaEventTracker("Cons law")}>
              Constitutional law PQ
            </Link>
          </li>
          <li
            onClick={showMenu}
            className="cursor-pointer text-center text-[white] absolute top-[420px]"
          >
            <Link to={"/about"} onClick={gaEventTracker("About")}>
              About Us
            </Link>
          </li>
        </ul>
        <button
          onClick={showMenu}
          className={`${
            isToggle && "fixed z-[60] right-[8%] md:top-[6%]"
          } lg:hidden`}
        >
          <div
            className={`w-[21px] h-[2px] ${
              isToggle
                ? "bg-[white] ease-in duration-300 -rotate-45 transition-transform translate-y-[1px] translate-x-[1px]"
                : "bg-[black]"
            }`}
          ></div>
          <div
            className={`${
              isToggle ? "hidden" : "flex"
            } w-[21px] h-[2px] bg-[black] my-1`}
          ></div>
          <div
            className={`w-[21px] h-[2px] ${
              isToggle
                ? "bg-[white] ease-in duration-300 rotate-45 transition-transform -translate-y-[0.5px] translate-x-[1px]"
                : "bg-[black]"
            }`}
          ></div>
        </button>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
    </>
  );
};

export default Navbar;
