import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
      <div className='container mb3 about_container'>
        <div className='container main_container d-flex justify-content-around flex-wrap'>

          <div className="left_container mt-5 " style={{width:500}}>
            <h2>Meet Bilal khattak</h2>
            <p style={{color:'#666', letterSpacing:".5px", marginTop:2, lineHeight:2}}>Hello, my name is Muhammad Bilal Khattak, and I am a MERN Stack developer. I have been learning MERN Stack for the past 2 years, during which time I have attended several institutes to develop my skills. However, it was not until I joined IEC (Institute of Emerging Careers) that I was able to complete my course and gain a comprehensive understanding of the MERN Stack. I am a very hardworking individual who believes in the value of continuous learning. I am always seeking new challenges and opportunities to further develop my skills and expand my knowledge. In my free time, I enjoy exploring new technologies and experimenting with different coding projects</p>
            <a target="_blank" href="https://drive.google.com/file/d/1yp3o5IhcZUkGCc_ucjNR3EFpSnbiPgXn/view?usp=sharing">IEC certification</a>

            <p>I also completed a course on Udemy by Dr. Angela Yu, which further strengthened my skills.</p>
            <a target="_blank" href="https://drive.google.com/file/d/18Q-2K2e-51Y0IEwd9mwKxKODct5z15lS/view?usp=sharing">Udemy course</a>
          </div>

          <div className='right_container mt-3'>
              <img src='../images/5f30c2ed-4895-4d2a-935e-70da18311dc (2).jfif' alt="my-pic" />
          </div>
        </div>

      </div>
    </>
  )
}

export default About
