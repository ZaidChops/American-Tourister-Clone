import React from "react";
import slider1 from "../assets/slider1.WEBP";
import slider2 from "../assets/slider2.WEBP";
import slider3 from "../assets/slider3.WEBP";
import slider4 from "../assets/slider4.WEBP";
import slider5 from "../assets/slider5.WEBP";
import slider6 from "../assets/slider6.WEBP";

const HeroSection = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        // style={{zIndex:"80",position:"sticky"}}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider6} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HeroSection;
