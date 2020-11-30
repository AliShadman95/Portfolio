import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Menu from "./components/navbar/Menu";
import "./css/full.min.css";
import "./css/skeleton.scss";

import Particles from "react-tsparticles";
import particlesDefaultParams from "./json/particles.json";
import particlesNightParams from "./json/particles-night.json";
import Cookie from "./components/cookie/Cookie";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Helmet } from "react-helmet";
import Privacy from "./components/privacy/Privacy";
import ReactGA from "react-ga";

const language = process.env.REACT_APP_MAIN_LANGUAGE;

ReactGA.initialize(language === "it" ? "G-QHP917TNH2" : "G-NH364S79TQ");

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
