import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                    slidesToScroll: 2, // Adjusted for consistency
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1, // Adjusted for consistency
                },
            },
        ],
    };

    return (
        <div className="flex flex-wrap items-start justify-center">
            <div className="w-full md:w-1/3 p-4 mt-20"> {/* Adjusted width for smaller devices */}
                <h1 className='text-4xl font-semibold'>Skep Interiors <br />
                 Offer you <span className='text-violet-800'>{content[currentIndex]}</span>
                </h1>
            </div>
            <div className="w-full h-full md:w-2/3 p-4"> {/* Adjusted width for smaller devices */}
            <Slider {...settings}>
        {/* <div className="w-full sm:w-1/2 md:w-1/3 lg:w-80 bg-gray-200 mx-2 rounded-md my-4 overflow-hidden hover:bg-gray-300 "> */}
        {/* <div className="p-4">
          <Link to="/serv">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-lg hover:shadow-sky-400">
              <img
                alt=""
                src={ser}
                className="absolute inset-0 h-full w-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  {/* <h2 className="mt-0.5 text-lg text-white">
                    Digital Marketing
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Unlock your business's digital potential with
                    TheClientsMaker.com. We specialize in crafting tailored
                    digital strategies to elevate your brand and drive results.
                    From captivating website design to engaging content
                    creation, we offer a comprehensive suite of digital
                    marketing services. Let us help you thrive in the online
                    landscape.
                  </p>
                </div>
              </div>
            </article>
          </Link> */}
        {/* </div>  */}
        <div className="p-4 group block">
          <Link to="/content">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser1}
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />
              <img
                alt=""
                src={ser2}
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
             

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">
                    Content Creation
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Empower your brand with expert content creation from
                    TheClientsMaker.com. Our team specializes in crafting
                    compelling content tailored to your audience. From blog
                    posts to social media campaigns, we offer a range of
                    services to enhance your online presence. Let us create
                    content that engages and inspires your audience.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/service">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser2}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">
                    Interior Designing
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Transform your space with our expert interior design
                    services at TheClientsMaker.com. From conceptualization to
                    execution, we specialize in creating stunning interiors
                    tailored to your style and needs. Let us bring your vision
                    to life and elevate your space to new heights of beauty and
                    functionality.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/service">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser3}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">
                    Graphic Designing
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Elevate your brand with captivating graphic design from
                    TheClientsMaker.com. Our team specializes in creating
                    visually stunning graphics that leave a lasting impression.
                    From logos to marketing materials, we offer a range of
                    services to help your brand stand out. Let us bring your
                    ideas to life with creativity and precision.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/service">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser4}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">SEO</h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Boost your online visibility with expert SEO services from
                    TheClientsMaker.com. We specialize in optimizing your
                    website to rank higher on search engines and attract more
                    organic traffic. From keyword research to on-page
                    optimization, we offer a comprehensive approach to improving
                    your search engine rankings. Let us help your business reach
                    its full potential online.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/service">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser5}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">SEO</h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Boost your online visibility with expert SEO services from
                    TheClientsMaker.com. We specialize in optimizing your
                    website to rank higher on search engines and attract more
                    organic traffic. From keyword research to on-page
                    optimization, we offer a comprehensive approach to improving
                    your search engine rankings. Let us help your business reach
                    its full potential online.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/service">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser4}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">SEO</h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Boost your online visibility with expert SEO services from
                    TheClientsMaker.com. We specialize in optimizing your
                    website to rank higher on search engines and attract more
                    organic traffic. From keyword research to on-page
                    optimization, we offer a comprehensive approach to improving
                    your search engine rankings. Let us help your business reach
                    its full potential online.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/service">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser4}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">SEO</h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Boost your online visibility with expert SEO services from
                    TheClientsMaker.com. We specialize in optimizing your
                    website to rank higher on search engines and attract more
                    organic traffic. From keyword research to on-page
                    optimization, we offer a comprehensive approach to improving
                    your search engine rankings. Let us help your business reach
                    its full potential online.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        {/* Add more image divs as needed */}

        {/* </div> */}
      </Slider>
            </div>
        </div>
    );
}

export default Section1;
