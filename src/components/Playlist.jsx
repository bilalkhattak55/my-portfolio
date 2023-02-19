import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from './data';
import Spinner from 'react-bootstrap/Spinner';
import Carousel from 'react-bootstrap/Carousel';


const Playlist = () => {

  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false)
    }, 1000);
  }, [])

  return (
    <>
      {
        spin
          ?
          <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }} >
            <Spinner animation="border" variant="danger" /> &nbsp; &nbsp;Loading...
          </div>
          :
          <>
            <div className="container">
              <div className="text-center mt-2">
                <div className="card_div">
                  <div className="row d-flex justify-content-around align-items-center">

                    {
                      projectData.map((elem, index) => {
                        return (
                          <>
                            <Card key={index} style={{ width: '20rem', height: 'auto', marginTop: 30 }}>

                              <Carousel>
                                <Carousel.Item>
                                  <img
                                  style={{width:"20rem", height:"14rem", marginTop:10, borderTopLeftRadius:5, borderTopRightRadius:5}}
                                    className="d-block w-100"
                                    src={elem.imgsrcOne}
                                    alt="First slide"
                                  />
                                 
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img
                                  style={{width:"20rem", height:"14rem", marginTop:10, borderTopLeftRadius:5, borderTopRightRadius:5}}
                                    className="d-block w-100"
                                    src={elem.imgsrcTwo}
                                    alt="Second slide"
                                  />

                                  
                                </Carousel.Item>
                                <Carousel.Item>
                                  <img
                                  style={{width:"20rem", height:"14rem", marginTop:10, borderTopLeftRadius:5, borderTopRightRadius:5}}
                                    className="d-block w-100"
                                    src={elem.imgsrcThree}
                                    alt="Third slide"
                                  />

                                  
                                    
                                </Carousel.Item>
                              </Carousel>
                              {/* <Card.Img style={{ width: '20rem', marginLeft: -13 }} variant="top" src={elem.imgsrc} /> */}
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the
                                  bulk of the card's content.
                                </Card.Text>
                                <Button variant="danger">
                                  <a style={{ color: 'white', textDecoration: 'none', }} href={elem.demo} target='_blank'>Live Demo</a>
                                </Button>
                              </Card.Body>
                            </Card>
                          </>
                        )
                      })
                    }

                  </div>
                </div>
              </div>
            </div>
          </>

      }

    </>
  )
}

export default Playlist;
