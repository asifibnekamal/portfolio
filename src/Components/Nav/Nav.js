import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Image/profile7.jpg'

const Nav = () => {
    return (
        <div>
            <div className="navbar py-5 bg-secondary">
                <div className="flex-1">
                    <Link to='/home' className="btn btn-ghost normal-case text-3xl text-white">Asif Ibne Kamal</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <button className='btn btn-primary mr-5'> <Link to='/home'>Home</Link></button>
                    </div>
                    <div className="form-control">
                        <button className='btn btn-primary mr-5'> <Link to='/resume'>Resume</Link></button>
                    </div>
                    <div className="form-control">
                        <button className='btn btn-primary mr-5'><a href="https://form.jotform.com/223433927920457" target="_blank" rel="noopener noreferrer">Contact</a></button>
                    </div>
                    <div className="dropdown dropdown-end mr-5">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={image} alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;