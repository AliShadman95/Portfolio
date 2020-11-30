import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga";

const language = process.env.REACT_APP_MAIN_LANGUAGE;

ReactGA.initialize(language === "it" ? "G-EFLDM2C8E6" : "G-GX3E36H3EY");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("ashd")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
navigator.serviceWorker.getRegistrations().then(function (registrations) {
  for (let registration of registrations) {
    registration.unregister();
  }
});
caches.keys().then((cacheNames) => {
  cacheNames.forEach((cacheName) => {
    caches.delete(cacheName);
  });
});
