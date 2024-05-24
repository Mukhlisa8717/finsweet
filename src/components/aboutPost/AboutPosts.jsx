import React from 'react'
import './AboutPosts.css'
import Image from 'next/image'

const AboutPosts = () => {
  return (
    <section className="about-posts">
      <div className="container posts__list">
        <div className="about-post__item">
          <div className="about-post__content">
            <h3>Our team of creatives</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <Image
            src={
              "https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="image"
            width={624}
            height={480}
          />
        </div>
        <div className="about-post__item">
          <Image
            src={
              "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="image"
            width={624}
            height={480}
          />
          <div className="about-post__content">
            <h3>Why we started this Blog</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPosts
