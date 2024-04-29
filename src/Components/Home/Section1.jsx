import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ser1 from '../../assets/Images/proj1.jpg';
import ser2 from '../../assets/Images/proj2.jpg';
import ser3 from '../../assets/Images/proj3.jpg';
import ser4 from '../../assets/Images/proj4.jpg';
import ser5 from '../../assets/Images/proj5.jpg';
import ser6 from '../../assets/Images/proj6.jpg';

const Section1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const content = ["Good", "Design", "Reliable", "Product"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % content.length);
        }, 3000); // Change this to match the desired interval

        return () => clearInterval(interval);
    }, [content.length]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjusted for consistency
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="flex flex-wrap items-start justify-center">
            <div className="w-full md:w-1/4 p-4 mt-20">
                <h1 className='text-3xl font-semibold'>Skep Interiors <br />
                 Offer you <span className='text-violet-800'>{content[currentIndex]}</span>
                </h1>
            </div>
            <div className="w-full md:w-3/4 p-4">
                <Slider {...settings}>
                    {[
                        { image: ser1, title: "Content Creation", description: "Empower your brand with expert content creation from TheClientsMaker.com..." },
                        { image: ser2, title: "Web Development", description: "Transform your space with our expert interior design services at TheClientsMaker.com..." },
                        { image: ser3, title: "WhatsApp API", description: "Elevate your brand with captivating graphic design from TheClientsMaker.com..." },
                        { image: ser4, title: "SEO", description: "Boost your online visibility with expert SEO services from TheClientsMaker.com..." },
                        { image: ser5, title: "Google Ad", description: "At TheClientsMaker.com, we specialize in crafting powerful Google Ads campaigns..." },
                        { image: ser6, title: "Meta Ad", description: "At TheClientsMaker.com, we specialize in creating impactful Meta Ads that drive results..." },
                    ].map((slide, index) => (
                        <div key={index} className="p-4">
                            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-sky-400">
                                <img
                                    alt=""
                                    src={slide.image}
                                    className="absolute inset-0 h-64 w-96 object-cover"
                                />
                                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                                  
                                </div>
                            </article>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Section1;
