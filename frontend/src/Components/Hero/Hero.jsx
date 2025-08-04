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
            <Col md>
              <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptate eius similique sapiente, eveniet incidunt neque saepe dolorum modi, optio illo aut architecto totam tempore voluptas cupiditate dolorem, culpa iste.
              </p>
              <Button variant="primary">More here</Button>
            </Col>
            <Col md>
              <img
                className="image d-block img-fluid"
                src="../Assets/hero_image.png" 
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...
            </p>
            <Button variant="primary">More here</Button>
          </Col>
          <Col md>
            <img
              className="image d-block img-fluid"
              src="../Assets/hero_image.png" 
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...
            </p>
            <Button variant="primary">More here</Button>
          </Col>
          <Col md>
            <img
              className="image d-block img-fluid"
              src="../Assets/hero_image.png" 
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

