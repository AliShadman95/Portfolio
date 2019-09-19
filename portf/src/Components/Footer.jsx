import React, { Component } from "react";

import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row mb-3">
          <div class="col-md-12 text-center">
            <p>
              <AwesomeButtonSocial type="facebook">
                <a href="#" class="social-item">
                  <span class="icon-facebook2"></span>
                </a>
              </AwesomeButtonSocial>
              <AwesomeButtonSocial type="twitter">
                <a href="#" class="social-item">
                  <span class="icon-twitter"></span>
                </a>
              </AwesomeButtonSocial>
              <AwesomeButtonSocial type="instagram">
                <a href="#" class="social-item">
                  <span class="icon-instagram2"></span>
                </a>
              </AwesomeButtonSocial>
              <AwesomeButtonSocial type="linkedin">
                <a href="#" class="social-item">
                  <span class="icon-linkedin2"></span>
                </a>
              </AwesomeButtonSocial>
              <AwesomeButtonSocial type="github">
                <a href="#" class="social-item">
                  <span class="icon-vimeo"></span>
                </a>
              </AwesomeButtonSocial>
            </p>
          </div>
        </div>
        <div class="row">
          <p class="col-12 text-center">
            Copyright ©
            <script
              type="text/javascript"
              async=""
              src="https://www.google-analytics.com/analytics.js"
            ></script>
            2019 All rights reserved | This template is made with &hearts; by
            Ali Shadman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
