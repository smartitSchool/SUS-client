import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Address from '../../Components/ForContactPage/Address/Address';
import BannerForContact from '../../Components/ForContactPage/BannerForContact/BannerForContact';
import PhoneEmail from '../../Components/ForContactPage/PhoneEmail/PhoneEmail';
import Header from '../../Components/Header/Header';
import UpdateNews from '../../Components/Updatenews/UpdateNews';
import './Contact.css'



const Contact = () => {
    return (
        <>
            <Header />
            <UpdateNews />
            <BannerForContact />
            <Container>
                <Row className='my-4'>
                    <Col xs={12} md={6}>
                        <PhoneEmail />
                    </Col>
                    <Col xs={12} md={6}>
                        <Address />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;