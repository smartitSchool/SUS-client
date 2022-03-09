import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import UpdateNews from '../../Components/Updatenews/UpdateNews';

const Gallery = () => {
    return (
        <>
            <Header />
            <UpdateNews />
            <Slider />
            <Container>
                We are working
            </Container>
            <Footer />
        </>
    );
};

export default Gallery;