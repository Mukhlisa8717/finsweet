import React from 'react'
import './Business.css'
import { SlArrowRight } from "react-icons/sl";

const Business = () => {
  return (
    <section className="business">
      <div className="container">
        <div className="business__content">
          <h2 className="business__title">Business</h2>
          <p className="business__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="business__subtitle">
            <p>Blog</p>
            <span>
              <SlArrowRight size={12}/>
            </span>
            <p>Business</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Business
