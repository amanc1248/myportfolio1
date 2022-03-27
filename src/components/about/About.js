import React from "react";
import "../../styles/about/About.css";
function About() {
  return (
    <div>
      <section className="aboutMe__section">
        <div className="about__me__div">
          <img
            className="my__image"
            src="https://res.cloudinary.com/proudposhak-com/image/upload/v1646888696/me-modified_boven8.png"
            alt="myimage"
            height="120"
          />
          <br />
          <br />
          <span className="white__text working__at__text">Working as a</span>
          <br />
          <br />
          <span className="white__text future__role">
            Future Founding Software Engineer
          </span>
          <br />
          <span className="white__text">at</span>
          <span className="company__name">Method Financial</span>
        </div>
        <div className="bottom__link__div">
          <h5 className="link__text bottom__link">Know Why?</h5>
        </div>
      </section>
      <div class="the__divider"></div>
    </div>
  );
}

export default About;
