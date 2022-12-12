import React from 'react';
import { Link } from 'react-router-dom';
import cover1 from '../../Image/projectcover1.png'
import cover2 from '../../Image/projectcover2.png'
import cover3 from '../../Image/projectcover3.png'

const Card = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-sky-100 text-center pt-5'>My Projects</h1>
            <div className='grid my-9 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5'>
                <div className="card w-96 bg-blue-900 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Mobile Bazar</h2>
                        <p>It's a mobile resale website where people can buy and sale used website</p>
                    </div>
                    <figure><img src={cover1} alt="" /></figure>
                    <div className="card-actions justify-center">
                        <Link to='/mobilebazar' className="btn btn-primary w-full bg-violet-900">View Details</Link>
                    </div>
                </div>
                <div className="card w-96 bg-blue-900 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Visa Consultant</h2>
                        <p>It's a visa consultant website.</p>
                    </div>
                    <figure><img src={cover2} alt="" /></figure>
                    <div className="card-actions justify-center">
                        <Link to='/consultant' className="btn btn-primary w-full bg-violet-900">View Details</Link>
                    </div>
                </div>
                <div className="card w-96 bg-blue-900 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Course Academy</h2>
                        <p>It's a e-learning website and people can learn coueses and take quiz.</p>
                    </div>
                    <figure><img src={cover3} alt="" /></figure>
                    <div className="card-actions justify-center">
                        <Link className="btn btn-primary w-full bg-violet-900" to='/course'>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;