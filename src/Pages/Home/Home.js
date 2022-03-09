import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import About from '../../Components/Home/About/About';
import Activities from '../../Components/Home/Activities/Activities';
import FounderSpeech from '../../Components/Home/FounderSpech/FounderSpeech';
import SecraterySpeech from '../../Components/Home/SecraterySpeech/SecraterySpeech';
import Slider from '../../Components/Slider/Slider';
import UpdateNews from '../../Components/Updatenews/UpdateNews';

const Home = () => {
    return (
        <>
            <Header />
            <UpdateNews />
            <Slider />
            <Container>
                <About />
                <hr />
                <FounderSpeech />
                <hr />
                <SecraterySpeech />
                <hr />
                <Activities />
            </Container>
            <Footer />
        </>
    );
};

export default Home;