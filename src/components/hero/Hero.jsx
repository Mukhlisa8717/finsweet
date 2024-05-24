import React from "react";
import "./Hero.css"
import { AiOutlineRight } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__info">
          <p className="hero__subtitle">
            Posted on <strong>startup</strong>
          </p>
          <h1 className="hero__title">
            Step-by-step guide <br /> to choosing great <br /> font pairs
          </h1>
          <p>
            By <span className="author">James West</span> | May 23, 2022
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum <br /> dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat <br /> non proident.
          </p>
          <button className="hero__btn">
            <span>Read More</span> <AiOutlineRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
