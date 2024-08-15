import React, { useState } from "react";
import img1 from '../../assets/Images/ser1a.jpg';
import img2 from '../../assets/Images/ser2a.jpg';
import img3 from '../../assets/Images/ser3a.jpg';

const reviews = [
  {
    name: "Paul Starr",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    location: "BUSINESS BAY, DUBAI",
    review: "Skep truly exceeded our expectations with their interior design expertise. Their team brought a fresh perspective to our space, creating a harmonious blend of functionality and style that perfectly suited our needs. We were impressed by their attention to detail and ability to transform our vision into reality.",
    spaceImage: img1
  },
  {
    name: "Sarah Johnson",
    image: "https://plus.unsplash.com/premium_photo-1688350839154-1a131bccd78a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    location: "BUSINESS BAY, DUBAI",
    review: "Working with Skep was a delightful experience from start to finish. Their professional approach, creative solutions, and impeccable customer service set them apart in the world of interior design. We were thrilled with the final result and would highly recommend Skep to anyone looking for top-notch design services.",
    spaceImage: img2
  },
  {
    name: "Michael Lee",
    image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    location: "BUSINESS BAY, DUBAI",
    review: " The entire process with Skep was smooth and enjoyable. Their team is knowledgeable and responsive, and they have a keen eye for design. They listened to our needs and delivered a stunning result that we couldn't be happier with. Highly recommended!",
    spaceImage: img3
  }
];

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl ">
        
        <div className="flex flex-col lg:flex-row  space-y-8  ">
          
        {/* Buttons for large screens */}
<div className="hidden lg:flex flex-col items-center justify-between w-2 h-1/6 lg:w-8 space-y-3 p-10 ">
  <button
    onClick={handleNext}
    className="transform -rotate-90 origin-center text-2xl mt-6 px-4 py-2 text-white  lg:h-40"
    style={{ minWidth: '200px' }}
  >
    N e x t
  </button>

  {/* Previous button */}
  <button
    onClick={handlePrevious}
    className="transform -rotate-90 origin-center text-2xl px-4 py-2 border-cyan-50 text-white rounded lg:h-40"
    style={{ minWidth: '200px' }}
  >
    P r e v i o u s
  </button>
</div>


          {/* Space Image */}
          <div className="w-full lg:w-1/4 lg:h-full flex items-center justify-center">
            <img
              src={reviews[currentReview].spaceImage}
              alt="Space"
              className=" shadow-lg lg:h-fit w-auto lg:w-full lg:-mt-8"
            />
          </div>

          {/* Client Info */}
          <div className="py-12 px-16 flex flex-col items-center lg:items-start  space-y-4 lg:space-y-10 lg:pl-28 ">
          <p className="text-2xl font-medium text-white">
              {reviews[currentReview].name}
            </p>
            <img
              alt={reviews[currentReview].name}
              src={reviews[currentReview].image}
              className="w-32 h-32 rounded-full object-cover"
            />
            
            <p className="text-xs text-gray-400 font-thin">
              {reviews[currentReview].location}
            </p>
          </div>

          {/* Review Text */}
          <div className="w-full lg:w-1/2 lg:pr-20 lg:pt-10 lg:pl-3 ">
            <blockquote className="rounded-lg p-6 shadow-sm sm:p-8 bg-red-400">
              <p className="text-white text-lg lg:text-2xl lg:">
                " {reviews[currentReview].review} "
              </p>
            </blockquote>
          </div>

        </div>

        {/* Buttons for small screens */}
        <div className="flex lg:hidden justify-center space-x-4 mt-8">
          <button
            onClick={handlePrevious}
            className="text-xl px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="text-xl px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
