import React from "react";
import "./Category.css";
import Image from "next/image";
import icon1 from "@/assets/icon1.png"
import icon2 from "@/assets/icon2.png"
import icon3 from "@/assets/icon3.png"
import icon4 from "@/assets/icon4.png"

const Category = () => {
  return (
    <section className="category">
      <div className="container">
        <h2 className="category__title">Choose A Catagory</h2>
        <ul className="category__list">
          <li className="category__item">
            <Image src={icon1} alt="icon" width={48} height={48} />
            <div>
              <h3 className="category__item-title">Business</h3>
              <p className="category__item-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </li>
          <li className="category__item start__item">
            <div className="category__item-icon">
              <Image src={icon2} alt="icon" width={23} height={23} />
            </div>
            <div>
              <h3 className="category__item-title">Startup</h3>
              <p className="category__item-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </li>
          <li className="category__item">
            <Image src={icon3} alt="icon" width={48} height={48} />
            <div>
              <h3 className="category__item-title">Economy</h3>
              <p className="category__item-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </li>
          <li className="category__item">
            <Image src={icon4} alt="icon" width={48} height={48} />
            <div>
              <h3 className="category__item-title">Technology</h3>
              <p className="category__item-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Category;
