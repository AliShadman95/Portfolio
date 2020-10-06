import React, { Dispatch } from "react";

interface Props {
  setSelectedSkin: Dispatch<React.SetStateAction<string>>;
  selectedSkin: string;
}

function Menu({ setSelectedSkin, selectedSkin }: Props): JSX.Element {
  return (
    <nav
      className="navbar is-fullwidth color-background"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          href="/"
          data-url="/"
          className="link navbar-item link-animate nav-logo-text color-background"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="home"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="svg svg-inline--fa fa-home fa-w-18"
          >
            <path
              fill="currentColor"
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              className=""
            ></path>
          </svg>
          Portfolio
        </a>

        <div className="offline navbar-item is-hidden-desktop">
          <picture>
            <source srcSet="/img/icons/menu/planemode.webp" type="image/webp" />
            <img
              src="/img/icons/menu/planemode.png"
              className="png"
              alt="Sei Offline."
              title="Sei Offline."
            />
          </picture>
        </div>
        <a
          role="button"
          id="navbar-burger"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          href="#menu"
        >
          <div id="menu-icon-wrapper" className="menu-icon-wrapper">
            <svg width="1000px" height="1000px">
              <path
                aria-hidden="true"
                className="path1"
                d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
              ></path>
              <path
                aria-hidden="true"
                className="path2"
                d="M 300 500 L 700 500"
              ></path>
              <path
                aria-hidden="true"
                className="path3"
                d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
              ></path>
            </svg>
            <button
              id="menu-icon-trigger"
              className="menu-icon-trigger"
            ></button>
          </div>
        </a>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable color-text color-background">
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
          </div>

          <div className="navbar-item has-dropdown is-hoverable color-text color-background">
            <a
              className="navbar-link link-animate color-text color-background"
              href="#menu"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="palette"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg svg-inline--fa fa-palette fa-w-16"
              >
                <path
                  fill="currentColor"
                  d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                  className=""
                ></path>
              </svg>
              Temi
            </a>

            <div className="navbar-dropdown is-theme-navbar">
              <a
                id="set-skin-default"
                className="navbar-item link-animate"
                href="#menu"
                onClick={(): void => {
                  if (selectedSkin !== "default") {
                    setSelectedSkin("default");
                    localStorage.setItem("TYPE_OF_THEME", "default");
                  }
                }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="sun"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg svg-inline--fa fa-sun fa-w-16"
                >
                  <path
                    fill="currentColor"
                    d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                    className=""
                  ></path>
                </svg>
                Classico
              </a>
              <a
                id="set-skin-nightmode"
                className="navbar-item link-animate"
                href="#menu"
                onClick={(): void => {
                  if (selectedSkin !== "nightmode") {
                    setSelectedSkin("nightmode");
                    localStorage.setItem("TYPE_OF_THEME", "nightmode");
                  }
                }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="moon"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg svg-inline--fa fa-moon fa-w-16"
                >
                  <path
                    fill="currentColor"
                    d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                    className=""
                  ></path>
                </svg>
                Notturno
              </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable color-text color-background">
            <a
              className="navbar-link link-animate color-text color-background"
              href="#menu"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="life-ring"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg svg-inline--fa fa-life-ring fa-w-16"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm173.696 119.559l-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.396 218.396 0 0 1 45.255 45.255zM256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96zM127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.372 218.372 0 0 1 45.255-45.255zM82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.396 218.396 0 0 1-45.255-45.255zm302.137 45.255l-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.403 218.403 0 0 1-45.255 45.255z"
                  className=""
                ></path>
              </svg>
              Aiuto
            </a>

            <div className="navbar-dropdown is-theme-navbar">
              <a
                href="/cookie"
                data-url="/cookie"
                className="link navbar-item link-animate"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cookie-bite"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg svg-inline--fa fa-cookie-bite fa-w-16"
                >
                  <path
                    fill="currentColor"
                    d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                    className=""
                  ></path>
                </svg>
                Cookie Policy
              </a>
              <a
                href="/privacy"
                data-url="/privacy"
                className="link navbar-item link-animate"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user-secret"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg svg-inline--fa fa-user-secret fa-w-14"
                >
                  <path
                    fill="currentColor"
                    d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"
                    className=""
                  ></path>
                </svg>
                Privacy Policy
              </a>

              <a
                href="mailto:alishadman955@gmail.com"
                className="navbar-item link-animate"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg svg-inline--fa fa-envelope fa-w-16"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    className=""
                  ></path>
                </svg>
                Supporto
              </a>
              {/*     <a
                href="//localhost:3003/?refresh=pwa"
                data-url="/refresh"
                className="link navbar-item link-animate"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="info-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg svg-inline--fa fa-info-circle fa-w-16"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                    className=""
                  ></path>
                </svg>
                v0.5.0
              </a> */}
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable color-text color-background">
            <a
              className="navbar-link link-animate color-text color-background lang-fix-height"
              href="#menu"
            >
              <picture>
                <source
                  srcSet="/img/icons/menu/italian.webp"
                  type="image/webp"
                />
                <img
                  src="/img/icons/menu/italian.png"
                  className="png"
                  alt="it-logo"
                />
              </picture>
              <span className="is-hidden-desktop">Lingue</span>
            </a>

            <div className="navbar-dropdown is-theme-navbar">
              <a
                href="https://en.ashd.dev"
                rel="nofollow external noopener noreferrer"
                className="navbar-item link-animate"
              >
                <picture>
                  <source
                    srcSet="/img/icons/menu/english.webp"
                    type="image/webp"
                  />
                  <img
                    src="/img/icons/menu/english.png"
                    className="png"
                    alt="English"
                  />
                </picture>
                English
              </a>
              <a
                href="https://ashd.dev"
                rel="nofollow external noopener noreferrer"
                className="navbar-item link-animate"
              >
                <picture>
                  <source
                    srcSet="/img/icons/menu/italian.webp"
                    type="image/webp"
                  />
                  <img
                    src="/img/icons/menu/italian.png"
                    className="png"
                    alt="Italiano"
                  />
                </picture>
                Italiano
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="offline is-hidden-touch">
              <picture>
                <source
                  srcSet="/img/icons/menu/planemode.webp"
                  type="image/webp"
                />
                <img
                  src="/img/icons/menu/planemode.png"
                  className="png"
                  alt="Sei Offline."
                  title="Sei Offline."
                />
              </picture>
            </div>
            <div className="buttons">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
