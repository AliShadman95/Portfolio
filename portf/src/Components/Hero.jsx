import React from "react";
import VideoPosterBG from "../Media/poster.jpg";
import VideoBG from "../Media/Particle_Wave_4K_Motion_Background_Loop.mp4";
import ScrollAnimation from "react-animate-on-scroll";
import "../../node_modules/animate.css";

const Hero = () => {
  return (
    <section
      className="site-hero"
      id="section-home"
      data-stellar-background-ratio="0.5"
    >
      <video id="videoBG" poster={VideoPosterBG} autoPlay muted loop>
        <source src={VideoBG} type="video/mp4" />
      </video>
      <div className="container">
        <div className="row intro-text align-items-center justify-content-center">
          <div className="col-md-10 text-center">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <h1 className="site-heading site-animate fadeInUp site-animated">
                Howdy, I'm <strong>Ali Shadman</strong>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay="100" animateOnce>
              <p className="lead site-subheading mb-4 site-animate fadeInUp site-animated">
                A Rome-based Web developer & Programmer. I make Web Application
                usually with React or ASP.NET.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay="200" animateOnce>
              <p>
                <a
                  href="#section-about"
                  className="smoothscroll btn btn-primary px-4 py-3"
                >
                  More On Me
                </a>
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Hero;
