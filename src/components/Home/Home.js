import React from 'react';
import Header from '../Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import './Home.css'

const Home = () => {
    return (
        <div className="home-section">
            <Header />
            <HomeBanner />
        </div>
    );
};

export default Home;