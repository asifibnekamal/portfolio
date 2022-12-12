import React from 'react';
import img1 from '../../Image/project11.png'
import img2 from '../../Image/project12.png'
import img3 from '../../Image/project13.png'

const MobileBazar = () => {
    return (
        <div>
            <div className='text-center py-11'>
                <h1 className="text-5xl font-bold">Mobile Bazar</h1>
                <h3>1.Admin control, seller routes, buyers route</h3>
                <h3>2.Advertise options for products</h3>
                <h3>3.Digitial online payment system</h3>
                <h3>4.Used tailwind, react, react router dom for frontend</h3>
                <h3>5.Used mongodb, node.js for backend</h3>
                <h3>6.Firebase login system</h3>
            </div>
            <div className="card-actions justify-center">
                <button className="btn btn-primary w-1/2 bg-violet-900"><a href="https://mobile-resale-dfa9a.web.app/" target="_blank" rel="noopener noreferrer">View Site</a></button>
                <button className="btn btn-primary w-1/2 bg-violet-900"><a href="https://github.com/ShuvoAsif/mobile-resale-clint" target="_blank" rel="noopener noreferrer">View Site</a></button>
            </div>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={img1} className="max-w-sm" alt='' />
                    </div>
                    <div>
                        <img src={img2} className="max-w-sm" alt='' />
                    </div>
                    <div>
                        <img src={img3} className="max-w-sm" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileBazar;