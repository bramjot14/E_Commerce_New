import React from 'react';
import './Hero.css';
import { Carousel, Button, Row, Col, Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='hero text-center p-5'> 
      <Carousel>
      <Carousel.Item>
        <Container>
          <Row className="align-items-center py-2">
          <Col md className="text-md-start">
              <p>
                Exclusive Deal 40% off!
              </p>
              <h1>Power Meets Elegance- <br /> Apple Macbook Pro is Here <br /> for you!</h1>
              <Button className='hero-btn' variant="primary">Order Now</Button>
          </Col>
          <Col md>
              <img
                className="image d-block img-fluid"
                src="../Assets/macbook.png" 
                alt="First slide"
              />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
      <Container>
        <Row className="align-items-center py-2">
          <Col md className="text-md-start">
               <p>
                Hurry up only few lefts!
              </p>
              <h1>Next-Level Gaming Starts<br />Here- Discover PlayStation<br />5 Today!</h1>
              <Button className='hero-btn' variant="primary">Shop Now</Button>
          </Col>
          <Col md>
            <img
              className="image d-block img-fluid"
              src="../Assets/ps5.png" 
              id='img2'
              alt="First slide"
            />
          </Col>
        </Row>
      </Container>
    </Carousel.Item>

      <Carousel.Item>
      <Container>
        <Row className="align-items-center py-2">
        <Col md className="text-md-start">
          <p>
                Limited Time Offer 30% off!
              </p>
              <h1>JBL Headphones –<br /> Pure Sound, Perfect Fit,<br /> Ready for You!</h1>
              <Button className='hero-btn' variant="primary">Buy Now</Button>
          </Col>
          <Col md>
            <img
              className="image d-block img-fluid"
              src="../Assets/headphones.png" 
              alt="First slide"
            />
          </Col>
        </Row>
      </Container>
    </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Hero;