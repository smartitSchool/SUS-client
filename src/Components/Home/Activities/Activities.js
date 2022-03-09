import React from 'react';
import { Image } from 'react-bootstrap';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Activities.css'

const Activities = () => {
    return (
        <div className='my-4'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="activities-container">
                        <Image src='https://schools.risd.org/cms/lib/TX01818237/Centricity/Shared/Voly/Volunteer-helping-students.jpg' fluid={true} />
                        <h5 className='txt-color-a'>Activities</h5>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="activities-container">
                        <Image src='https://schools.risd.org/cms/lib/TX01818237/Centricity/Shared/Voly/Volunteer-helping-students.jpg' fluid={true} />
                        <h5 className='txt-color-a'>Activities</h5>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="activities-container">
                        <Image src='https://schools.risd.org/cms/lib/TX01818237/Centricity/Shared/Voly/Volunteer-helping-students.jpg' fluid={true} />
                        <h5 className='txt-color-a'>Activities</h5>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="activities-container">
                        <Image src='https://schools.risd.org/cms/lib/TX01818237/Centricity/Shared/Voly/Volunteer-helping-students.jpg' fluid={true} />
                        <h5 className='txt-color-a'>Activities</h5>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="activities-container">
                        <Image src='https://schools.risd.org/cms/lib/TX01818237/Centricity/Shared/Voly/Volunteer-helping-students.jpg' fluid={true} />
                        <h5 className='txt-color-a'>Activities</h5>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Activities;