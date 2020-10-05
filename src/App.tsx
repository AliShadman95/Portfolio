import React from "react";
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";

import Particles from "react-tsparticles";
import particlesDefaultParams from "./json/particles.json";
import particlesNightParams from "./json/particles-night.json";

function App() {
  return (
    <React.Fragment>
      <Particles id="tsparticles" options={particlesDefaultParams} />
      <Menu />
      <Homepage />
    </React.Fragment>
  );
}

export default App;
