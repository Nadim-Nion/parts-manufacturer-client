import React from 'react';
import image from '../../../assets/image/myImage.png';
import { FaNodeJs, FaReact, FaStripeS } from 'react-icons/fa6';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { MdOutlineSecurity } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <>
            {/* Introduction */}
            <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6 my-7'>
                <div>
                    <h4 className='text-lg'>Learn more about the Developer</h4>
                    <h2 className='text-2xl font-bold my-4'>Hi, I am Nadim Mahmud Nion. <br /> I am a Front-End Developer (MERN Stack)</h2>
                    <p className='text-lg'>Email: nadimmahmud.webdev@gmail.com</p>
                    <p className='text-lg'>Education: Department of CSE, Daffodil International University <br /> (2018-2023)</p>
                </div>
                <div>
                    <img src={image} alt="" className='w-32 md:w-48 h-32 md:h-48 rounded-lg' />
                </div>
            </div>

            {/* Technologies */}
            <div className='my-28'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold my-4'>Technologies in which I am proficient</h2>
                    <p className='text-lg mb-4'>I am a passionate Junior Front-End Developer skilled in the MERN stack, dedicated to creating dynamic and responsive web applications. <br /> Eager to leverage my skills in a collaborative and innovative team environment.</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-4'>
                    <div className='flex justify-center items-center'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <FaReact className='text-5xl font-bold text-violet-700' />
                                </h2>
                                <h3 className='text-xl font-bold'>React</h3>
                                <p>World&#39;s most popular front-end java-script library</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <SiExpress className='text-5xl font-bold text-violet-700' />
                                </h2>
                                <h3 className='text-xl font-bold'>Express.js</h3>
                                <p>Back-end web application framework</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <FaNodeJs className='text-5xl font-bold text-violet-700' />
                                </h2>
                                <h3 className='text-xl font-bold'>Node.js</h3>
                                <p>JavaScript runtime environment </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <SiMongodb className='text-5xl font-bold text-violet-700' />
                                </h2>
                                <h3 className='text-xl font-bold'>MongoDB</h3>
                                <p>Back-end web application framework</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <MdOutlineSecurity className='text-5xl font-bold text-violet-700' />
                                </h2>
                                <h3 className='text-xl font-bold'>JWT</h3>
                                <p>Open standard used for securely transmitting information between parties</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <FaStripeS className='text-5xl font-bold text-violet-700' />
                                </h2>
                                <h3 className='text-xl font-bold'>Stripe</h3>
                                <p>American multinational financial services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Projects */}
            <div className='my-28'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold my-4'>My Latest Projects</h2>
                    <p className='text-lg mb-4'>I have built some projects using technologies like React.js, Express.js, MongoDB, Stripe API and JWT</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-4'>

                    {/* project 1 */}
                    <div className='flex justify-center items-center'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-4xl font-bold text-violet-700">BooksHive</h2>
                                <div className="divider divider-primary m-0"></div>
                                <p>An inventory management application</p>
                                <div className="card-actions justify-start mt-10">
                                    <Link to="https://warehouse-client-74323.web.app">
                                        <button className="btn btn-primary">Live Site</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* project 2 */}
                    <div className='flex justify-center items-center'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-4xl font-bold text-violet-700">Bistro Boss</h2>
                                <div className="divider divider-primary m-0"></div>
                                <p>An restaurant application</p>
                                <div className="card-actions justify-start mt-10">
                                    <Link to="https://bistro-boss-client-8d542.web.app">
                                        <button className="btn btn-primary">Live Site</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* project 3 */}
                    <div className='flex justify-center items-center'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-4xl font-bold text-violet-700">Car Doctor</h2>
                                <div className="divider divider-primary m-0"></div>
                                <p>A car service application</p>
                                <div className="card-actions justify-start mt-10">
                                    <Link to="https://car-doctor-client-99145.web.app">
                                        <button className="btn btn-primary">Live Site</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Subscription Newsletter */}
            <div className='my-28 flex justify-evenly items-center'>
                <div>
                    <h3 className='text-2xl font-bold my-4'>Get the latest news!</h3>
                    <p className='text-lg'>To learn about our latest offer subscribe to our newsletter.</p>
                </div>
                <div className="join">
                    <input className="input input-bordered join-item" placeholder="Enter Your Email" />
                    <button className="btn join-item rounded-r-full btn-primary">Subscribe</button>
                </div>
            </div>
        </>
    );
};

export default MyPortfolio;