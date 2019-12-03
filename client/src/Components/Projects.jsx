import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeholderProjectImage from "../Media/work-in-progress-457150.png";
import ScrollAnimation from "react-animate-on-scroll";
import "../../node_modules/animate.css";
import chatScreen from "../Media/chatscreen.png";
import "react-awesome-button/dist/styles.css";
import Project from "./Project";

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Projects = () => {
  return (
    <section class="site-section" id="section-portfolio">
      <div class="container">
        <div class="row">
          <div class="section-heading text-center col-md-12">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <h2>
                My <strong>Projects</strong>
              </h2>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12  text-center d-flex justify-content-center">
            <ScrollAnimation animateIn="fadeInUp" delay="100" animateOnce>
              <Slider {...settings} style={{ width: "50vw" }}>
                <div>
                  <Project
                    img={chatScreen}
                    title="Let's Chat!"
                    text="A Web Chat made with React, Redux, Material UI, Node JS, MongoDB and
            Socket Io. It allows users to pick up an avatar, change rooms and
            search for specific messages."
                    shortText="A simple webchat"
                    gitLink="https://github.com/AliShadman95/cyf-chat-react"
                    url="https://letschaaat.netlify.com"
                  />
                </div>
                <div>
                  <img
                    src={placeholderProjectImage}
                    alt="ImgPlaceholder"
                    className="carousel-img"
                  />
                </div>
                <div>
                  <img
                    src={placeholderProjectImage}
                    alt="ImgPlaceholder"
                    className="carousel-img"
                  />
                </div>
              </Slider>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
