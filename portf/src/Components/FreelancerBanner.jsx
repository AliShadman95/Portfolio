import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../../node_modules/animate.css";

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
                  <a
                    href="#"
                    class="btn btn-white py-4 px-5"
                    style={{ backgroundColor: "#fff" }}
                  >
                    Hire me
                  </a>
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
