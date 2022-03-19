import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import { CarouselItem } from 'react-bootstrap'
import Shoo from './sho4.jpg'
import Logo from '../../../img/3.png'
import './caroul.css';

const Caroul = () => {
  return (
    <div className='caroul'>
       <Carousel className="carousel"  >
  <Carousel.Item>
    <img
          style={{height:"400px",objectFit:"contain"}}

      className="d-block w-100"
      src={Shoo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height:"80hv"}}
      className="d-block w-100"
      src={Logo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
          style={{height:"80hv"}}

      
      className="d-block w-100"
      src={Logo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Caroul