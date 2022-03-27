import React from "react";
import { Link } from "react-router-dom";
function WhyHire() {
  return (
    <div>
      <section className="why__hired__section">
        <div className="">
          <div className="why__hired__text__div">
            <div className="why__hired__text">
              Method Financial Hired Aman Becauase
            </div>
          </div>
          <div className="hiring__quality row gx-0 gy-5 align-items-center justify-content-center">
            <div className="quality__div col-lg-4 col-md-4 col-6 justify-content-around">
              <div>
                <div className="quality">Nice Guy</div>
                <div className="know__text">Know How?</div>
              </div>
            </div>

            <div className="quality__div col-lg-4 col-md-4 col-6 justify-content-around">
              <Link to="/projects">
                {" "}
                <div>
                  <div className="quality">Skills</div>
                  <div className="know__text">Know How?</div>
                </div>
              </Link>{" "}
            </div>

            <div className="quality__div col-lg-4 col-md-4 col-6 justify-content-around">
              <div>
                <div className="quality">Dedication</div>
                <div className="know__text">Know How?</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom__link__div">
          <p className="made__project__checkout__text">
            Aman also created something which might help Method Financial in
            some way.
            <span className="checkout__text"> Check Out Here...</span>
          </p>
        </div>
      </section>
      <div class="the__divider"></div>
    </div>
  );
}

export default WhyHire;
