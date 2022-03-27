import React from "react";

function ContactAman() {
  return (
    <div>
      <div className="contact__him__text">
        Ask his journey to Method Financial from here
      </div>
      <div className="hiring__quality row gx-0 gy-5 align-items-center justify-content-center">
        <div className="quality__div col-lg-4 col-md-4 col-6 justify-content-around">
          <a href="mailto:amanc1248@gmail.com">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
              alt="gmail"
              height={"100px"}
            />
            <div style={{ color: "white" }}>Gmail</div>
          </a>
        </div>
        <div className="quality__div col-lg-4 col-md-4 col-6 justify-content-around">
          <a
            href="https://www.linkedin.com/in/aman-chaudhary-4a8725173/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png"
              alt="linkedin"
              height={"100px"}
            />
            <div style={{ color: "white" }}>Linkedin</div>
          </a>
        </div>
        <div className="quality__div col-lg-4 col-md-4 col-6 justify-content-around">
          <a
            href="//api.whatsapp.com/send?phone=+*+9779804355969*&text=%20*Hi*"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src="https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/3e/e3/39/3ee339d5-3fd6-bec1-3204-aaccbd43a52e/electron.png/1200x630bb.png"
              alt="whatsapp"
              height={"100px"}
            />
            <div style={{ color: "white" }}>whatsapp</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactAman;
