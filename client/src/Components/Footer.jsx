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
              <AwesomeButtonSocial
                type="twitter"
                url="https://twitter.com/AliShadman13"
              ></AwesomeButtonSocial>
              <AwesomeButtonSocial
                type="instagram"
                url="https://www.instagram.com/alishadman95"
              ></AwesomeButtonSocial>
              <AwesomeButtonSocial
                type="linkedin"
                url="https://www.linkedin.com/in/ali-shadman-60aba1193/"
              ></AwesomeButtonSocial>
              <AwesomeButtonSocial
                type="github"
                url="https://github.com/AliShadman95"
              ></AwesomeButtonSocial>
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
