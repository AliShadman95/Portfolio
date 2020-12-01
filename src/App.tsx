import React, { useState, useEffect } from "react";
import loadable from "@loadable/component";

import "./css/full.min.css";
import "./css/skeleton.scss";

import Particles from "react-tsparticles";
import particlesDefaultParams from "./json/particles.json";
import particlesNightParams from "./json/particles-night.json";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
const Homepage = loadable(() => import("./components/Homepage"));
const Menu = loadable(() => import("./components/navbar/Menu"));
const Cookie = loadable(() => import("./components/cookie/Cookie"));
const Privacy = loadable(() => import("./components/privacy/Privacy"));

const language = process.env.REACT_APP_MAIN_LANGUAGE;

ReactGA.initialize(language === "it" ? "UA-184166616-1" : "UA-184166616-2");

function App(): JSX.Element {
  const [selectedSkin, setSelectedSkin] = useState<string>(
    localStorage.getItem("TYPE_OF_THEME")!
  );

  useEffect(() => {
    // This line will trigger on a route change
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <React.Fragment>
      <Router>
        <Helmet>
          <link
            rel="preload"
            as="style"
            type="text/css"
            href={
              selectedSkin === "default"
                ? "./css/skin-default.css"
                : "./css/skin-nightmode.css"
            }
          />
          <link
            rel="stylesheet"
            type="text/css"
            href={
              selectedSkin === "default"
                ? "./css/skin-default.css"
                : "./css/skin-nightmode.css"
            }
          />
        </Helmet>
        <Particles
          id="particles-js"
          options={
            selectedSkin === "default"
              ? particlesDefaultParams
              : particlesNightParams
          }
        />
        <Menu setSelectedSkin={setSelectedSkin} selectedSkin={selectedSkin} />
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/cookie">
          <Cookie />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
