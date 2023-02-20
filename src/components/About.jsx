import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
      <div className='container mb3 about_container'>
        <div className='container main_container d-flex justify-content-around flex-wrap'>

          <div className="left_container mt-5 " style={{width:500}}>
            <h2>Meet Bilal khattak</h2>
            <p style={{color:'#666', letterSpacing:".5px", marginTop:2, lineHeight:2}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis perspiciatis commodi nobis cupiditate at assumenda culpa tempore! Cum aut corrupti fugit deserunt ea accusamus soluta omnis nulla nemo officiis? Dolor, fugit! Tempora veniam accusantium error harum unde aliquam molestias libero.</p>
          </div>

          <div className='right_container mt-3'>
              <img src='../images/5f30c2ed-4895-4d2a-935e-70da18311dc1 (2).jfif' alt="my-pic" />
          </div>
        </div>

      </div>
    </>
  )
}

export default About
