import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../../node_modules/animate.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Contact = () => {
  return (
    <section class="site-section bg-light" id="section-contact">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5">
            <div class="section-heading text-center">
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <h2>
                  Wanna <strong>Start Work</strong> With Me?
                </h2>
              </ScrollAnimation>
            </div>
          </div>
          <div class="col-md-7 mb-5 mb-md-0">
            <form action="" class="site-form">
              <ScrollAnimation animateIn="fadeInUp" delay="100" animateOnce>
                <h3 class="mb-5">Get In Touch</h3>
              </ScrollAnimation>
              <div class="form-group">
                <ScrollAnimation animateIn="fadeInUp" delay="150" animateOnce>
                  <input
                    type="text"
                    class="form-control px-3 py-4"
                    placeholder="Your Name"
                  />
                </ScrollAnimation>
              </div>
              <div class="form-group">
                <ScrollAnimation animateIn="fadeInUp" delay="200" animateOnce>
                  <input
                    type="email"
                    class="form-control px-3 py-4"
                    placeholder="Your Email"
                  />
                </ScrollAnimation>
              </div>
              <div class="form-group">
                <ScrollAnimation animateIn="fadeInUp" delay="250" animateOnce>
                  <input
                    type="email"
                    class="form-control px-3 py-4"
                    placeholder="Your Phone"
                  />
                </ScrollAnimation>
              </div>
              <div class="form-group mb-5">
                <ScrollAnimation animateIn="fadeInUp" delay="300" animateOnce>
                  <textarea
                    class="form-control px-3 py-4"
                    cols="30"
                    rows="10"
                    placeholder="Write a Message"
                  ></textarea>
                </ScrollAnimation>
              </div>
              <div class="form-group">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  offset="200"
                  delay="325"
                  animateOnce
                >
                  <AwesomeButton type="primary">
                    <input
                      type="submit"
                      class="btn px-4 py-3"
                      value="Send Message"
                    />
                  </AwesomeButton>
                </ScrollAnimation>
              </div>
            </form>
          </div>
          <div class="col-md-5 pl-md-5">
            <ScrollAnimation animateIn="fadeInUp" delay="100" animateOnce>
              <h3 class="mb-5">My Contact Details</h3>
            </ScrollAnimation>
            <ul class="site-contact-details">
              <ScrollAnimation animateIn="fadeInUp" delay="150" animateOnce>
                <li>
                  <span class="text-uppercase">Email</span>
                  AliShadman955@gmail.com
                </li>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay="200" animateOnce>
                <li>
                  <span class="text-uppercase">Phone</span>
                  +39 388 378 5808
                </li>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay="250" animateOnce>
                <li>
                  <span class="text-uppercase">Address</span>
                  Rome, RM <br></br>
                  CAP 00172 <br></br>
                  Viale Alessandrino, 218
                </li>
              </ScrollAnimation>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
