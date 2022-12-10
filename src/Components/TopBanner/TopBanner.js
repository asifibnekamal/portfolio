import React from 'react';
import cover from '../../Image/cover.jpeg'

const TopBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${cover})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Hello there</h1>
                        <h1 className="mb-5 text-3xl font-bold">I am Asif Ibne Kamal</h1>
                        <h1 className="mb-5 text-3xl font-bold">A Front-End Web Developer.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;