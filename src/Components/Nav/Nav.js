import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Image/profile7.jpg'
import AIK from '../../File/ASIFIBNEKAMAL.pdf'

const Nav = () => {
    return (
        <div>
            <div className="navbar py-5 bg-base-200">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-3xl text-white">Asif Ibne Kamal</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <Link to='/' className='btn btn-primary mr-5'>Home</Link>
                    </div>
                    <div className="form-control">
                        <Link to='/' className='btn btn-primary mr-5'>Home</Link>
                    </div>
                    <div className="form-control">
                        <button className='btn btn-primary mr-5'><a href={AIK} download={AIK}>Download My Resume</a></button>
                    </div>
                    <div className="form-control">
                        <button className='btn btn-primary mr-5'><a href="https://form.jotform.com/223433927920457" target="_blank" rel="noopener noreferrer">Contact</a></button>
                    </div>
                    <div className="mr-5">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={image} alt='' />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;