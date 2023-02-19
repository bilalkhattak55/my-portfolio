import React from 'react';
import './Footer.css'

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <>
      <div className='footer mt-5'>
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className='first mt-5'>
            <h4>
              Bilal khattak
            </h4>
            <p>
              &#169; {year} Bilal khattak all rights reserved
            </p>
            <p className='d-flex'>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook mx-3"></i>
            </p>
          </div>

          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum, neque quidem quae nemo omnis alias maxime autem unde velit suscipit iure.</p>
            <p>mbilalkhk@gmail.com</p>
            <p>+923142683060</p>
          </div>

          <div className="third mt-5">
             <h4>About</h4>
             <p>Resume</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer
