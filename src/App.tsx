import React, { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Menu from "./components/navbar/Menu";
import "./css/full.min.css";
import "./css/skeleton.scss";

import Particles from "react-tsparticles";
import particlesDefaultParams from "./json/particles.json";
import particlesNightParams from "./json/particles-night.json";

import { Helmet } from "react-helmet";

function App(): JSX.Element {
  const [selectedSkin, setSelectedSkin] = useState<string>(
    localStorage.getItem("TYPE_OF_THEME")!
  );

  /*   useEffect((): void => {
    selectedSkin === "default"
      ? require("./css/skin-default.scss")
      : require("./css/skin-nightmode.scss");

    console.log(selectedSkin);
  }, [selectedSkin]); */

  return (
    <React.Fragment>
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
      <Homepage />
    </React.Fragment>
  );
}

export default App;
