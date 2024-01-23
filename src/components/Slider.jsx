import React from "react";
import "../styles/slider.css";
import balloons from "../assets/balloons.WEBP";
import flybag from "../assets/flybag.WEBP";
import travelbuddy from "../assets/travelbuddy.WEBP";
import brandtoday from "../assets/brandtoday.webp";
import twogirls from "../assets/twogirls.WEBP";
import water from "../assets/water.WEBP";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import warranty from "../assets/warranty.WEBP";
import delivery from "../assets/delivery.svg";
import trusted from "../assets/trusted.png";
import originalstore from "../assets/originalstore.svg";

const Slider = () => {
  return (
    <>
      <div className="slider-section">
        <img src={balloons} alt="" />
        <img src={flybag} alt="" />
        <img src={travelbuddy} alt="" />
        <img src={twogirls} alt="" />
        <img src={water} alt="" />
      </div>

      {/* <div className="social">
        <div className="stay-social">
            <h1>Stay Social!</h1>
            <h2>#AMERICANTOURISTER</h2>
            <div id='color-line'></div>
        </div>

        <div className="follow">
            <span><h4>Follow us on:</h4>
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            </span>
        </div>
     </div> */}

      <div class="stay-social">
        <h1>Stay Social</h1>
        <span>
          <h2 class="heading brandName">#AMERICANTOURISTER</h2>
          <ul>
            <li>Follow us on:</li>
            <li>
              <img src="src/assets/instagram.png" alt="" />
            </li>
            <li>
              <img src="src/assets/facebook.png" alt="" />
            </li>
          </ul>
        </span>
      </div>

      {/* <div class="autoSlider">
          <div class="boxes">
            <div class="box-wrapper">          
              <div class="box"><img src="src/assets/img-1.webp" alt=""/></div>
              <div class="box"><img src="src/assets/img-2.webp" alt=""/></div>
              <div class="box"><img src="src/assets/img-3.webp" alt=""/></div>
              <div class="box"><img src="src/assets/img-4.jpeg" alt=""/></div>
              <div class="box"><img src="src/assets/img-5.jpeg" alt=""/></div>
              <div class="box"><img src="src/assets/img-6.jpeg" alt=""/></div>
              <div class="box"><img src="src/assets/img-7.jpeg" alt=""/></div>
              <div class="box"><img src="src/assets/img-8.jpeg" alt=""/></div>
              <div class="box"><img src="src/assets/img-9.jpeg" alt=""/></div>
              <div class="box"><img src="src/assets/img-10.jpeg" alt=""/></div>
              <div class="box"><img src="src/assets/img-11.jpeg" alt=""/></div>
              <div class="box"><img src="src/assets/img-12.jpeg" alt=""/></div>
              <div class="box"><img src="src/assets/img-13.jpeg" alt=""/></div>
              <div class="box"><img src="src/assets/img-14.jpeg" alt=""/></div>                           
           </div>
          </div>
        </div> */}

      <div className="orange-slider">
        <div className="first-orange">
          <div className="warranty">
            <img id="warranty-img" src={warranty} alt="" />
            <h5>International Warranty</h5>
            <p>
              American Tourister is a trusted global brand offering high-quality
              travel products like luggage, backpacks, and accessories. With a
              presence in 120+ countries, it's a go-to for millions of
              travelers.
            </p>
          </div>

          <div className="fast-delivery">
            <img id="delivery-img" src={delivery} alt="" />
            <h5>Fast Delivery</h5>
            <p>
              We deliver online orders to most of India within 5-7 working days
              via efficient courier services.
            </p>
          </div>
        </div>

        <div className="second-orange">
          <div className="trusted">
            <img id="trusted-img" src={trusted} alt="" />
            <h5>Trusted Globally Since 1933</h5>
            <p>
              American Tourister innovates with award-winning luggage produced
              with world-class quality standards.
            </p>
          </div>

          <div className="store">
            <img id="store-img" src={originalstore} alt="" />
            <h5>Full Original Store</h5>
            <p>
              One-stop shop for exploring the complete American Tourister
              collection online.
            </p>
          </div>
        </div>
      </div>

      <div className="brand-today">
        <img src={brandtoday} alt="" />
      </div>

      <div class="enquiry">
        <h2>Get the latest news from American Tourister.</h2>
        <input type="text" placeholder="*Your email address" /> <br />
        <button class="btn-com enquiry-btn">Submit</button>
      </div>

      {/* <div className="footer-form">
        <h3>Get the latest news from American Tourister.</h3>
        <form>
          <input type="text" placeholder="*Your email address" />
        </form>
        <button>Submit</button>
      </div> */}
    </>
  );
};

export default Slider;
