"use client"
import Image from 'next/image'
import React from 'react'
import './Products.css'

const Products = ({data}) => {
    let productsItem = data?.products?.slice(0, 3).map((el) => (
      <div key={el.id} className='product__item'>
        <Image alt={el.title} src={el.images[0]} width={405} height={318} />
        <div>
          <p className="product__avtor">
            by <span>{el.brand}</span> | {el.reviews[0].reviewerName}
          </p>
          <h2 className="product__title">{el.title}</h2>
          <p className='product__description'>{el.description}</p>
        </div>
      </div>
    ));
  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Popular Blogs</h2>
        <div className="products__list">{productsItem}</div>
      </div>
    </section>
  );
}

export default Products;
