import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import banner1 from '../../w-image/banner-1.jpg'
import banner2 from '../../w-image/banner-2.jpg'
import banner3 from '../../w-image/banner-3.jpg'


const Slider = () => {
    return (
        <div >
            <Carousel
                interval={3000}
                fade={true}
                indicators={false}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;