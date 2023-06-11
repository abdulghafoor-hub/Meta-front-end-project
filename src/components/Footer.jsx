import React from 'react'
import logo from '../icons_assets/Littlelemon.png'
const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h3>Little Lemon</h3>
          <p>Description Goes Here</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;