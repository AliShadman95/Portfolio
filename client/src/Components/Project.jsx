import React from "react";
import Media from "react-media";
import { AwesomeButtonSocial, AwesomeButton } from "react-awesome-button";

const BigProject = ({ img, title, text, shortText, gitLink, url }) => {
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px)"
      }}
    >
      {matches => (
        <React.Fragment>
          <div style={matches.small ? { height: "50vh" } : { width: "50vw" }}>
            <div class="card" style={{ borderColor: "#0075f6" }}>
              <img class="card-img-top" src={img} alt="Card" />

              <div class="card-body">
                <h4 class="card-title">
                  <a
                    href="https://letschaaat.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0075f6" }}
                  >
                    {title}
                  </a>
                </h4>
                <p class="card-text">{matches.small ? shortText : text}</p>
                <AwesomeButtonSocial
                  type="github"
                  url={gitLink}
                ></AwesomeButtonSocial>
                {matches.medium && (
                  <AwesomeButton
                    type="primary"
                    href={url}
                    target="_blank"
                    size="small"
                    className="mb-2"
                  >
                    Go!
                  </AwesomeButton>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </Media>
  );
};

export default BigProject;
