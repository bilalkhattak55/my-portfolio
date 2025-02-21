import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              wellcome to{" "}
              <span style={{ color: "#6c63ff" }}>Bilal khattak</span>{" "}
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              Hello, my name is Muhammad Bilal, and I am a web developer(MERN
              Stack).I am passionate about using technology to create innovative
              solutions and improve people's lives. Over the course of my
              career, I have honed my skills in HTML, CSS, JavaScript, Reactjs,
              nodejs, expressjs and MongoDB database, and have worked on a
              variety of projects, including my portfolio app, todo app, MERN
              Stack App,portfolio project and some others also. I am constantly
              seeking to learn and grow, and am excited to take on new
              challenges and opportunities. In my free time, I enjoy reading
              articles and playing cricket, and am always looking for ways to
              use my skills to make a positive impact on the world.
            </p>
            <div className="btn_div mt-4">
              <Button
                variant="danger"
                style={{
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                  backgroundColor: "#2f2d69",
                  marginRight: 24,
                }}
              >
                <a
                  style={{ color: "#fff", textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1cMhxdT6xtEUMsHlfrNxTH2vPOg55FbmY/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </Button>
              <NavLink to="./playlist">
                <Button
                  variant="danger"
                  style={{
                    letterSpacing: "1px",
                    border: "none",
                    borderRadius: 4,
                    backgroundColor: "#6c63ff",
                    marginRight: 24,
                  }}
                >
                  {" "}
                  Projects{" "}
                </Button>
              </NavLink>{" "}
            </div>
          </div>
          <div className="right_div">
            <img
              width="350px"
              height="400px"
              className="my-img"
              src="../images/5f30c2ed-4895-4d2a-935e-70da18311dc1 (2).jfi"
              alt="my-pic"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
