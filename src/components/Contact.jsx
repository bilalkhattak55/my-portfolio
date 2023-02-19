import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  
  const [inputValue, setInputValue] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    message: ''
  })
  console.log(inputValue)

  const getValue = (e) => {
    const { name, value } = e.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value
      }
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    const {fname, lname, email, mobile, message} = inputValue;
    if(fname == ""){
          toast.error("fname is required")
    }else if(lname == "") {
      toast.error("lname is required")
    }else if(email == "") {
       toast.error("email is required")
    } else if(!email.includes("@")){
      toast.error("invalid email")
    }else if(mobile == ""){
         toast.error("mobile number is required")
    } else {
      const res = await fetch("http://localhost:6005/register", {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body:JSON.stringify({
          fname, lname, email, mobile, message
        })
      });
      const data = res.json();
      console.log(data)
    }
  }

 
  return (
    <>
      
            <div className="container mb-3 contact">
              <h2>Contact Us</h2>
              <div className="container mt-2">
                <Form className='row mt-2' >
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' name='fname' onChange={getValue} />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' name='lname' onChange={getValue} />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' name='email' onChange={getValue} />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type='text' name='mobile' onChange={getValue} />
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={4} name='message' onChange={getValue} />
                  </Form.Group>

                  <div className='d-flex justify-content-center'>
                    <Button className='col-lg-6' variant="primary" type="submit" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </div>
                </Form>
                <ToastContainer />

              </div>
            </div>
         

    </>
  )
}

export default Contact
