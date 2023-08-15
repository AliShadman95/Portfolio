import React from "react";
import Image from "next/image";
import Link from "next/link";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  isBurgerOpen: Boolean;
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}
function Brand({ isBurgerOpen, setIsBurgerOpen }: Props) {
  return (
    <div className="items-stretch flex shrink-0 min-h-[3.25rem]">
      <Link
        href="/"
        data-url="/"
        className='relative link text-[1.1rem]
          visited:bg-color-secondary-black hover:bg-color-secondary-black focus:bg-color-secondary-black
          color-white items-center flex grow-0 shrink-0 leading-normal px-3 py-2
          before:content-[""] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-primary-blue
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300'
      >
        <FontAwesomeIcon
          icon={faHome}
          className="w-[26px] max-w-[24px] h-[26px] float-left mr-2 color-primary-blue"
          color="#46aef7"
        />
        Portfolio
      </Link>

      <a
        role="button"
        id="navbar-burger"
        className={`relative lg:hidden w-full h-full  transition-[0.1s] left-0 top-0 text-[#4a4a4a]
         hover:cursor-pointer block h-[3.25rem] relative w-[3.25rem] ml-auto no-underline hover:bg-transparent ${
           isBurgerOpen ? "is-active" : ""
         }`}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
        href="#menu"
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
      >
        <div
          id="menu-icon-wrapper"
          className="relative w-full h-full  transition-[0.1s] left-0 top-0 align-center flex items-center justify-center cursor-pointer"
        >
          <FontAwesomeIcon icon={faBars} className="" color="white" size="xl" />
        </div>
      </a>
    </div>
  );
}

export default Brand;
