import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeholderProjectImage from "../Media/work-in-progress-457150.png";

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
            <h2>
              My <strong>Projects</strong>
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              <div>
                <img
                  src={placeholderProjectImage}
                  className="carousel-img"
                  alt="ImgPlaceholder"
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
              <div>
                <img
                  src={placeholderProjectImage}
                  alt="ImgPlaceholder"
                  className="carousel-img"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
