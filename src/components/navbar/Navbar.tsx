/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faPuzzlePiece,
  faPalette,
  faChevronDown,
  faLifeRing,
  faCookieBite,
  faEnvelope,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

import menuJson from "./menu.json";
import menuJsonEN from "./menu-en.json";
import Brand from "./Brand";
import NavItem from "./NavItem";

const language = process.env.REACT_APP_MAIN_LANGUAGE;

function Navbar(): JSX.Element {
  const [content, setContent] = useState<any>(menuJson);
  const [isBurgerOpen, setIsBurgerOpen] = useState<Boolean>(false);
  const [activeNavItem, setActiveNavItem] = useState<Number>(-1);
  const { theme, setTheme } = useTheme();

  useEffect((): void => {
    if (language === "en") {
      setContent(menuJsonEN);
    }
  }, []);

  return (
    <nav
      className="border-b-solid border-b border-b-primary-blue relative z-30 bg-secondary-black lg:min-h-[3.25rem] lg:items-stretch lg:flex"
      role="navigation"
      aria-label="main navigation"
    >
      <Brand isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />

      <div
        id="navbar"
        className={`lg:grow lg:shrink-0 lg:items-stretch px-0 py-2 lg:py-0 lg:flex ${
          isBurgerOpen ? "block" : "hidden"
        }`}
      >
        <div className="lg:flex lg:justify-start lg:mr-auto lg:items-stretch shrink-0 min-h-[3.25rem]">
          {/*  <div
            className={`navbar-item has-dropdown color-text color-background ${
              activeNavItem === 0 ? "is-active" : null
            }`}
            onMouseEnter={() => {
              setActiveNavItem(0);
            }}
            onMouseLeave={() => {
              setActiveNavItem(-1);
            }}
          >
            <a
              className="navbar-link link-animate color-text color-background"
              href="#menu"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="puzzle-piece"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg svg-inline--fa fa-puzzle-piece fa-w-18"
              >
                <path
                  fill="currentColor"
                  d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"
                  className=""
                ></path>
              </svg>
              Software
            </a>

            <div className="navbar-dropdown is-theme-navbar">
              <a
                href="https://letschaaat.netlify.app/"
                rel="nofollow external noopener noreferrer"
                target="_new"
                className="navbar-item link-animate"
              >
                <picture>
                  <source
                    srcSet="/img/icons/menu/letschat-logo.webp"
                    type="image/webp"
                  />
                  <img
                    src="/img/icons/menu/letschat-logo.png"
                    className="png"
                    alt="Let's Chat!"
                  />
                </picture>
                Let's Chat!
              </a>
              <a
                href="https://banksim.netlify.app/"
                rel="nofollow external noopener noreferrer"
                target="_new"
                className="navbar-item link-animate"
              >
                <picture>
                  <source
                    srcSet="/img/icons/menu/banksim_logo.webp"
                    type="image/webp"
                  />
                  <img
                    src="/img/icons/menu/banksim_logo.png"
                    className="png"
                    alt=""
                  />
                </picture>
                Banksim
              </a>
            </div>
          </div> */}
          <div
            className="grow-0 shrink-0 lg:flex p-0 items-stretch text-[1.1rem] lg:items-center
           block leading-normal relative "
            onMouseEnter={() => {
              setActiveNavItem(1);
            }}
            onMouseLeave={() => {
              setActiveNavItem(-1);
            }}
          >
            <NavItem className="h-full">
              <FontAwesomeIcon
                icon={faPalette}
                className="w-[26px] max-w-[24px] h-[26px] float-left mr-2"
                color="#8E44AD"
                size="xl"
              />
              Temi
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-[20px] max-w-[20px] h-[20px] float-left ml-2"
                color="#46aef7"
              />
            </NavItem>

            <div
              className={`bg-black color-black text-sm py-2
           lg:shadow-[0_8px_8px_rgba(10,10,10,0.1)] ${
             activeNavItem !== 1 ? "lg:hidden" : ""
           }  lg:text-sm lg:min-w-full lg:absolute lg:z-20 cursor-pointer 
            lg:rounded-br-md lg:rounded-bl-md lg:left-0 lg:top-full`}
            >
              <NavItem
                onClick={(): void => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
              >
                <FontAwesomeIcon
                  icon={faSun}
                  className="w-[26px] max-w-[24px] h-[26px] float-left mr-2"
                  color="#F1C40E"
                  size="xl"
                />
                Classico
              </NavItem>

              <NavItem
                onClick={(): void => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
              >
                <FontAwesomeIcon
                  icon={faMoon}
                  className="w-[26px] max-w-[24px] h-[26px] float-left mr-2"
                  color="#2C3D4F"
                  size="xl"
                />
                Scuro
              </NavItem>
            </div>
          </div>
          <div
            className="grow-0 shrink-0 lg:flex p-0 items-stretch text-[1.1rem] lg:items-center
           block leading-normal relative "
            onMouseEnter={() => {
              setActiveNavItem(2);
            }}
            onMouseLeave={() => {
              setActiveNavItem(-1);
            }}
          >
            <NavItem className="h-full">
              <FontAwesomeIcon
                icon={faLifeRing}
                className="w-[26px] max-w-[24px] h-[26px] float-left mr-2"
                color="#F7591B"
                size="xl"
              />
              Aiuto
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-[20px] max-w-[20px] h-[20px] float-left ml-2"
                color="#46aef7"
              />
            </NavItem>

            <div
              className={`bg-black color-black text-sm py-2
           lg:shadow-[0_8px_8px_rgba(10,10,10,0.1)] ${
             activeNavItem !== 2 ? "lg:hidden" : ""
           }  lg:text-sm lg:min-w-full lg:absolute lg:z-20 cursor-pointer 
            lg:rounded-br-md lg:rounded-bl-md lg:left-0 lg:top-full`}
            >
              <NavItem isLink href="/cookie">
                <FontAwesomeIcon
                  icon={faCookieBite}
                  className="w-[26px] max-w-[24px] h-[26px] float-left mr-2"
                  color="#51352D"
                  size="xl"
                />
                Cookie
              </NavItem>

              <NavItem isLink href="/privacy">
                <FontAwesomeIcon
                  icon={faUserSecret}
                  className="w-[26px] max-w-[24px] h-[26px] float-left mr-2"
                  color="#333333"
                  size="xl"
                />
                Privacy
              </NavItem>

              <NavItem isLink href="mailto:alishadman955@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-[26px] max-w-[24px] h-[26px] float-left mr-2"
                  color="#DC4A40"
                  size="xl"
                />
                Supporto
              </NavItem>
            </div>
          </div>
          <div
            className="grow-0 shrink-0 lg:flex p-0 items-stretch text-[1.1rem] lg:items-center
           block leading-normal relative "
            onMouseEnter={() => {
              setActiveNavItem(3);
            }}
            onMouseLeave={() => {
              setActiveNavItem(-1);
            }}
          >
            <NavItem className="h-full">
              <Image
                src="/img/icons/menu/italian.png"
                alt="italian-flag"
                width={24}
                height={24}
                className="mr-2"
              />
              Lingua
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-[20px] max-w-[20px] h-[20px] float-left ml-2"
                color="#46aef7"
              />
            </NavItem>

            <div
              className={`bg-black color-black text-sm py-2
           lg:shadow-[0_8px_8px_rgba(10,10,10,0.1)] ${
             activeNavItem !== 3 ? "lg:hidden" : ""
           }  lg:text-sm lg:min-w-full lg:absolute lg:z-20 cursor-pointer 
            lg:rounded-br-md lg:rounded-bl-md lg:left-0 lg:top-full`}
            >
              <NavItem isLink href="https://en.alishd.dev">
                <Image
                  src="/img/icons/menu/english.png"
                  alt="italian-flag"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                English
              </NavItem>

              <NavItem isLink href="https://alishd.dev">
                <Image
                  src="/img/icons/menu/italian.png"
                  alt="italian-flag"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Italiano
              </NavItem>
            </div>
          </div>
        </div>
      </div>

      {/*  <div className="buttons">
              <a
                href="https://cv.ashd.dev"
                rel="nofollow external noopener noreferrer"
                target="_new"
                className="button is-gray is-github"
              >
                <picture>
                  <source srcSet="/img/icons/menu/cv.webp" type="image/webp" />
                  <img
                    src="/img/icons/menu/cv.png"
                    className="png"
                    alt="Curriculum Vitae"
                  />
                </picture>
                Curriculum Vitae
              </a>
            </div> */}
      {/*   </div>
        </div>
      </div> */}
    </nav>
  );
}

export default Navbar;
