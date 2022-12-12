import React from 'react';
import img from '../../Image/profile7.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Asif Ibne Kamal</h1>
                        <p className="py-6">My name is Asif. I am a web developer. I am 23 years old and still a student. Enthusiastic front-end web developer with 8 months of experience in web development .Obtained Complete Web Development Course Certification from Programming Hero. Looking to deliver excellent web development skills in React, Node.js, MongoDB, tailwind and bootstrap and I am trying to learn other programming languages, step by step. I am a responsible, creative, open-minded, friendly and ambitious web developer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;