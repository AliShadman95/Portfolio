import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../../node_modules/animate.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from "axios";

class Contact extends Component {
  state = {
    isLoading: false,
    name: "",
    email: "",
    subject: "",
    message: "",
    btnDisabled: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoading !== prevState.isLoading) {
      if (this.state.isLoading) {
        const { name, email, subject, message } = this.state;
        axios.post("https://portfolio-by-as.herokuapp.com", {
          name,
          email,
          subject,
          message
        });
      }
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitClick = e => {
    e.preventDefault();
    if (this.state.btnDisabled) {
      return;
    } else {
      // Send
      this.setState({ isLoading: true, btnDisabled: true });
    }
  };

  render() {
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
              <form onSubmit={this.onSubmitClick} class="site-form">
                <ScrollAnimation animateIn="fadeInUp" delay="100" animateOnce>
                  <h3 class="mb-5">Get In Touch</h3>
                </ScrollAnimation>
                <div class="form-group">
                  <ScrollAnimation animateIn="fadeInUp" delay="150" animateOnce>
                    <input
                      type="text"
                      name="name"
                      class="form-control px-3 py-4"
                      placeholder="Your Name"
                      onChange={this.handleChange}
                    />
                  </ScrollAnimation>
                </div>
                <div class="form-group">
                  <ScrollAnimation animateIn="fadeInUp" delay="200" animateOnce>
                    <input
                      type="email"
                      name="email"
                      class="form-control px-3 py-4"
                      placeholder="Your Email"
                      onChange={this.handleChange}
                    />
                  </ScrollAnimation>
                </div>
                <div class="form-group">
                  <ScrollAnimation animateIn="fadeInUp" delay="225" animateOnce>
                    <input
                      type="subject"
                      name="subject"
                      class="form-control px-3 py-4"
                      placeholder="Subject"
                      onChange={this.handleChange}
                    />
                  </ScrollAnimation>
                </div>

                <div class="form-group mb-5">
                  <ScrollAnimation animateIn="fadeInUp" delay="250" animateOnce>
                    <textarea
                      class="form-control px-3 py-4"
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder="Write a Message"
                      onChange={this.handleChange}
                    ></textarea>
                  </ScrollAnimation>
                </div>
                <div class="form-group">
                  <ScrollAnimation animateIn="fadeInUp" delay="300" animateOnce>
                    <AwesomeButton
                      type="primary"
                      disabled={this.state.btnDisabled}
                    >
                      <input
                        type="submit"
                        className="btn px-4 py-3"
                        value="Send Message"
                        disabled={this.state.btnDisabled}
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
  }
}

export default Contact;
