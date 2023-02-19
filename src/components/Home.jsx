import React from 'react';
import "./Home.css";
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>wellcome to <span style={{color:"#6c63ff"}}>Bilal khattak</span> </h2>
            <p style={{color:"#666",letterSpacing:".5px", marginTop:2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reiciendis illo quis explicabo odio facere distinctio sint molestiae voluptatum, quia, ex dolores deleniti sunt.</p>
            <div className="btn_div mt-4">
            <Button variant="danger" style={{letterSpacing:"1px", border:'none', borderRadius:4, backgroundColor:"#2f2d69", marginRight:24  }} disabled>Hire me</Button>
            <Button variant="danger" style={{letterSpacing:"1px", border:'none', borderRadius:4, backgroundColor:"#6c63ff", marginRight:24  }} disabled>Projects</Button>
            </div>
          </div>
          <div className="right_div">
              <img width='300px' height='300px' className='my-img' src="../images/5f30c2ed-4895-4d2a-935e-70da18311dc1 (2).jfif" alt="my-pic" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
