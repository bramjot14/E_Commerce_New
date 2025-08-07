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
    </Carousel>
    </div>
  )
}

export default Hero;