import React from 'react'
import './Posts.css'
import Image from 'next/image'

const Posts = () => {
  return (
    <section className="posts">
      <div className="container">
        <ul className="posts__list">
          <li className="post__item">
            <Image
              src={
                "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
              }
              alt="image"
              width={447}
              height={312}
            />
            <div className="post__item-cont">
              <h5>Business</h5>
              <h2>Top 6 free website mockup tools 2022</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec.
              </p>
            </div>
          </li>
          <li className="post__item">
            <Image
              src={
                "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
              }
              alt="image"
              width={447}
              height={312}
            />
            <div className="post__item-cont">
              <h5>Business</h5>
              <h2>Step-by-step guide to choosing great font pairs</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec.
              </p>
            </div>
          </li>
          <li className="post__item">
            <Image
              src={
                "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
              }
              alt="image"
              width={447}
              height={312}
            />
            <div className="post__item-cont">
              <h5>Business</h5>
              <h2>Ten free foogle fonts that you should use</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec.
              </p>
            </div>
          </li>
          <li className="post__item">
            <Image
              src={
                "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
              }
              alt="image"
              width={447}
              height={312}
            />
            <div className="post__item-cont">
              <h5>Business</h5>
              <h2>What did I learn from doing 50+ design sprints?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Posts
