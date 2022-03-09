import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../../w-image/logo.jpg'
import './Upper.css'

const Upper = () => {
    return (
        <Container>
            <Row className='my-2 d-flex align-items-center'>
                <Col xs={4} md={4}>
                    <Image src={logo} className='upper-logo' fluid={true} />
                </Col>
                <Col xs={8} md={8}>
                    <h2 className='txt-color-a'>সামাজিক উন্নয়ন সংস্থা(SUS) </h2>
                    <h4 className='txt-color-b'>Social Development Organisazation</h4>
                </Col>
            </Row>
        </Container>
    );
};

export default Upper;