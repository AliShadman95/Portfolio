import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeholderProjectImage from "../Media/workprog.png";
import bankSimImg from "../Media/banksimimg.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "../../node_modules/animate.css";
import chatScreen from "../Media/chatscreen.png";
import "react-awesome-button/dist/styles.css";
import Project from "./Project";

var settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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
                    text="A Web Chat made with React, Redux, Material UI, Node JS, MongoDB and  Socket Io. It allows users to chat, pick up an avatar, change rooms and search for specific messages."
                    shortText="A simple webchat"
                    gitLink="https://github.com/AliShadman95/cyf-chat-react"
                    url="https://letschaaat.netlify.com"
                  />
                </div>
                <div>
                  <Project
                    img={bankSimImg}
                    title="BankSim!"
                    text="A bank simulator made with React, Redux, Material UI, Node JS, PostgreSQL where you can create users, banks, accounts and deposit, withdraw, transfer money and more!"
                    shortText="A bank simulator"
                    gitLink="https://github.com/AliShadman95/BankSim"
                    url="https://banksim.netlify.com/"
                  />
                </div>
                {/* <div>
                   <Project
                    img={placeholderProjectImage}
                    title="Work in progress!"
                    text="Work in progress!"
                    shortText="Work in progress!"
                    gitLink="https://google.com"
                    url="https://google.com"
                  />
                </div>
                <div>
                  <Project
                    img={placeholderProjectImage}
                    title="Work in progress!"
                    text="Work in progress!"
                    shortText="Work in progress!"
                    gitLink="https://google.com"
                    url="https://google.com"
                  />
                </div> */}
              </Slider>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
