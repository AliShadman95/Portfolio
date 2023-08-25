import React from "react";
import Image from "next/image";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "./NavItem";

interface Props {
  isBurgerOpen: Boolean;
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

function MenuBurger({ isBurgerOpen, setIsBurgerOpen }: Props) {
  return (
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
  );
}

function Brand({ isBurgerOpen, setIsBurgerOpen }: Props) {
  return (
    <div className="items-stretch flex shrink-0 min-h-[3.25rem]">
      <NavItem isLink href="/">
        <FontAwesomeIcon
          icon={faHome}
          className="w-[26px] max-w-[24px] h-[26px] float-left mr-2 color-primary-blue"
          color="#46aef7"
        />
        Portfolio
      </NavItem>

      <MenuBurger
        isBurgerOpen={isBurgerOpen}
        setIsBurgerOpen={setIsBurgerOpen}
      />
    </div>
  );
}

export default Brand;
