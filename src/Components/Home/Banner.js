import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from '../../images/Banner/Banner1.png'
import Banner2 from '../../images/Banner/Banner2.png'
import Banner3 from '../../images/Banner/Banner3.png'
import "./Style/Banner.css"
const Banner = () => {
  return (
    <div className="banner1">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-80"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 variant="dark">First help</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-80"
            src={Banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second sevices</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-80"
            src={Banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>We are vary carefull </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
