import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container" id="landing-page">
            <div className="hero-banner">
                <img src="/images/hero.jpg" alt=""/>
                <div className="hero-content">
                    <h1>Are you a foodie?</h1>
                    <p>Well, you've come to the right place!</p>
                    <p>We provide to you the top notch meals at top speed!</p>
                    <p>Check out now!</p>
                    <button className="hero-menu">Our menu</button>
                    <button className="hero-reservation">Book a table</button>
                </div>
            </div>
        </div>
    );
}

export default Home;