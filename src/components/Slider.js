import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide1 from "../images/new4.jpg"
import slide2 from "../images/new2.jpg"
import slide3 from "../images/img8.jpg"

const slider = () => {
    return (
        <Carousel>
            <Carousel.Item >
                <img
                    className="d-block img-fluid"
                    style={{width:1220, height:300}}
                    src={slide1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item  >
                <img
                    className="d-block img-fluid"
                    style={{width:1220, height:300}}
                    src={slide2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item > 
                <img
                    className="d-block img-fluid"
                    style={{width:1220, height:300}}
                    src={slide3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default slider