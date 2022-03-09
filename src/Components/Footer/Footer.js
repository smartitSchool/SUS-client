import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <Container className='py-4'>
                    <Row>
                        <Col xs={12} md={6}>
                            <h5 className='txt-color-d'>Address</h5>
                            <p className='txt-color-d'>C-23/6 Mozidpur, Savar, Dhaka-1340</p>
                            <p className='txt-color-d'>সি-২৩/৬ মজিদপুর, সাভার, ঢাকা-১৩৪০</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <h5 className='txt-color-d'>Contact</h5>
                            <p className='txt-color-d'><span className='fw-bold'>Phone: </span>+880 1720-120689</p>
                            <p className='txt-color-d'><span className='fw-bold'>Email: </span>example@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='cr-area'>
                All rights reserved SUS, &copy; || 2022
            </div>
        </footer>
    );
};

export default Footer;