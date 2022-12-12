import React from 'react';
import img1 from '../../Image/project31.png'
import img2 from '../../Image/project32.png'
import img3 from '../../Image/project33.png'

const Course = () => {
    return (
        <div>
            <div className='text-center py-11'>
                <h1 className="text-5xl font-bold">Course</h1>
                <h3>1.you can take quiz</h3>
                <h3>2.easy to navigate</h3>
                <h3>3.signup system</h3>
                <h3>4.react-router-dom</h3>
                <h3>5.react-bootstrap</h3>
            </div>
            <div className="card-actions justify-center">
                <button className="btn btn-primary w-1/2 bg-violet-900"><a href="https://course-academy-73981.web.app/" target="_blank" rel="noopener noreferrer">View Site</a></button>
                <button className="btn btn-primary w-1/2 bg-violet-900"><a href="https://github.com/ShuvoAsif/course-academy-client" target="_blank" rel="noopener noreferrer">View Site</a></button>
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

export default Course;