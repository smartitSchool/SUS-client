import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import logo from '../../../w-image/logo.jpg'
import './About.css'

const About = () => {
    return (
        <Row className='my-4 d-flex align-items-center'>
            <Col xs={12} md={4}>
                <Image className='logo-on-about-component' src={logo} fluid={true} alt='SUS logo' />
            </Col>
            <Col xs={12} md={8}>
                <h4 className='text-center fw-bold'>আমাদের লক্ষ্য ও উদ্দেশ্য:</h4>
                <p className='text-justify'>
                    আমরা সমাজের সচেতন নাগরিকগন ২০১৩ সালের ১লা জানুয়ারী ক্ষুদ্র পরিসরে সামাজিক
                    উন্নয়ন সংস্থা নামে একটি সংগঠন প্রতিষ্ঠা করতে সক্ষম হই। বিভিন্ন প্রতিকূলতার মধ্য দিয়ে উক্ত
                    সংগঠনটি সাফল্যের সাথে কাজ করে যাচ্ছে। বিভিন্ন উপজেলা এবং জেলা ভিত্তিক শাখা এবং সদস্য
                    বৃদ্ধির মাধ্যমে সামাজিক উন্নয়নমূলক কাজ ধারাবাহিক ভাবে চালিয়ে যাওয়াই আমাদের মূল লক্ষ্য
                    এবং উদ্যেশ্য।
                </p>
            </Col>
        </Row>
    );
};

export default About;