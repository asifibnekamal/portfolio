import React from 'react';
import img1 from '../../Image/project21.png'
import img2 from '../../Image/project22.png'
import img3 from '../../Image/project23.png'

const Consultant = () => {
    return (
        <div>
            <div className='text-center py-11'>
                <h1 className="text-5xl font-bold">Consultant</h1>
                <h3>1.easy to navigate</h3>
                <h3>2.used jwt and firebase for security</h3>
                <h3>3.use daisy ui for better use</h3>
                <h3>4.this is a single pase website</h3>
                <h3>5.used react, react router dom etc</h3>
            </div>
            <div className="card-actions justify-center">
                <button className="btn btn-primary w-1/2 bg-violet-900"><a href="https://pro-visa-consultant.web.app/" target="_blank" rel="noopener noreferrer">VIEW SITE</a></button>
                <button className="btn btn-primary w-1/2 bg-violet-900"><a href="https://github.com/ShuvoAsif/pro-visa-consultant-clint" target="_blank" rel="noopener noreferrer">GITHUB LINK</a></button>
            </div>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse pb-0">
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

export default Consultant;