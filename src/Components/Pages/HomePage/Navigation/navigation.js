import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./nav.css"

const Navigation = () => {
  return (
    <div className='position-stikcy nvb'>

      <Navbar bg="dark " expand="lg">
        <Container fluid>
          <Navbar.Brand className='text-white' href="#">
            <img
              alt=""
              src="https://simmifoundation.org/home/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            SIMMI FOUNDATION
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='text-white nvbe' href="#action1">Home</Nav.Link>
              <Nav.Link className='text-white nvbe' href="#action1">About</Nav.Link>
              <Nav.Link className='text-white nvbe' href="#action2">Donate</Nav.Link>
              <Nav.Link className='text-white nvbe' href="#action2">Blog</Nav.Link>
              <Nav.Link className='text-white nvbe' href="#action2">Gallery</Nav.Link>
              <Nav.Link className='text-white nvbe' href="#action2">Volunteer</Nav.Link>
              <Nav.Link className='text-white nvbe' href="#action2">Events</Nav.Link>
              <Nav.Link className='text-white nvbe' href="#action2">Careers</Nav.Link>
              <Nav.Link className='text-white nvbe' href="#action2">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <marquee className="mrq" behavior="" direction="left" scrollamount="8">Smart India Multi Management Institute!   स्मार्ट इंडिया बहुद्देश्यीय प्रबन्धन संस्थान!   Registration number : 085953/2020   Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148
</marquee>
    </div>
  );
}


export default Navigation;