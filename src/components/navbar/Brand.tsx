import React from "react";

interface Props {}
function Brand(props: Props) {
  return (
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
          <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
        </div>
      </a>
    </div>
  );
}

export default Brand;
