import React from 'react'
import img1 from '../icons_assets/greek salad.jpg';
import img2 from '../icons_assets/lemon dessert.jpg';
import img3 from '../icons_assets/restaurant chef B.jpg';
import img4 from '../icons_assets/restauranfood.jpg';

const Products = () => {
  return (
    <>
      <div>
        <h1>Products</h1>
        <div className='products'>
          <img src={img1} alt="salad" />
          <img src={img2} alt="dessert" />
          <img src={img3} alt="chef" />
          <img src={img4} alt="resturent food" />
        </div>
      </div>
    </>
  )
}

export default Products