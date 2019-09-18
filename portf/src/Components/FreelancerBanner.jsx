import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../../node_modules/animate.css";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class FreeLancerBanner extends Component {
  state = {};
  render() {
    return (
      <section class="section-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-9 d-flex align-items-center">
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <h2>
                  I'm <span>Available</span> For Freelancing
                </h2>
              </ScrollAnimation>
            </div>

            <div class="col-md-4 col-lg-3 d-flex align-items-center">
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <p class="mb-0">
                  <AwesomeButton type="secondary">
                    <a
                      href="#"
                      className="btn py-4 px-5"
                      style={{ color: "rgb(0, 0, 0)" }}
                    >
                      Hire me
                    </a>
                  </AwesomeButton>
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FreeLancerBanner;
