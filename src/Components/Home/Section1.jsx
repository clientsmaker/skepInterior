import React from 'react';
import { Link } from 'react-router-dom';
import ser1 from '../../assets/Images/proj1.jpg';
import ser2 from '../../assets/Images/proj2.jpg';
import ser3 from '../../assets/Images/proj3.jpg';
import ser4 from '../../assets/Images/proj4.jpg';
import ser5 from '../../assets/Images/proj6.jpg';
import ser6 from '../../assets/Images/proj6.jpg';

const Section1 = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {/* First Row */}
            <div className="w-full sm:w-1/2 md:w-1/4">
                <Link to="/content">
                    <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
                        <img
                            alt=""
                            src={ser1}
                            className="w-full h-auto object-cover"
                        />
                        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <h2 className="mt-0.5 text-lg text-white font-semibold">Content Creation</h2>
                            </div>
                        </div>
                    </article>
                </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
                <Link to="/service">
                    <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
                        <img
                            alt=""
                            src={ser2}
                            className="w-full h-auto object-cover"
                        />
                        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <h2 className="mt-0.5 text-lg text-white font-semibold">Interior Designing</h2>
                            </div>
                        </div>
                    </article>
                </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
                <Link to="/service">
                    <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
                        <img
                            alt=""
                            src={ser3}
                            className="w-full h-auto object-cover"
                        />
                        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <h2 className="mt-0.5 text-lg text-white font-semibold">Graphic Designing</h2>
                            </div>
                        </div>
                    </article>
                </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
                <Link to="/service">
                    <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
                        <img
                            alt=""
                            src={ser4}
                            className="w-full h-auto object-cover"
                        />
                        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <h2 className="mt-0.5 text-lg text-white font-semibold">SEO</h2>
                            </div>
                        </div>
                    </article>
                </Link>
            </div>

            {/* Second Row */}
            <div className="w-full sm:w-1/2 md:w-1/4">
                <Link to="/service">
                    <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
                        <img
                            alt=""
                            src={ser5}
                            className="w-full h-auto object-cover"
                        />
                        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <h2 className="mt-0.5 text-lg text-white font-semibold">SEO</h2>
                            </div>
                        </div>
                    </article>
                </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
                <Link to="/service">
                    <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
                        <img
                            alt=""
                            src={ser6}
                            className="w-full h-auto object-cover"
                        />
                        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <h2 className="mt-0.5 text-lg text-white font-semibold">SEO</h2>
                            </div>
                        </div>
                    </article>
                </Link>
            </div>
        </div>
    );
}

export default Section1;
