import React from "react";

const Hero = () => {
  return (
    <section
      className="section-home"
      id="site-hero"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row intro-text align-items-center justify-content-center">
          <div class="col-md-10 text-center">
            <h1 class="site-heading site-animate fadeInUp site-animated">
              Howdy, I'm <strong>Ali Shadman</strong>
            </h1>
            <p class="lead site-subheading mb-4 site-animate fadeInUp site-animated">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
              vestibulum ex. Fusce a ex mauris. Sed interdum mattis nibh.
              Quisque ut augue velit. Donec commodo libero ac felis mattis, ut
              lobortis nibh facilisis. Aliquam erat volutpat. Sed congue ornare
              nunc at mollis. Quisque mauris nulla, dapibus nec nisi sit amet,
              finibus ultricies ipsum.
            </p>
            <p>
              <a
                href="#section-about"
                class="smoothscroll btn btn-primary px-4 py-3"
              >
                More On Me
              </a>
            </p>
          </div>
        </div>
      </div>

      <video id="videoBG" poster="" autoplay muted loop>
        <source
          src="../Media/Particle_Wave_4K_Motion_Background_Loop.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default Hero;
