import React from "react";

const Features = () => {
  return (
    <section
      className="feature-area py-16"
      style={{ backgroundColor: "#c6b069" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full text-center pb-10">
            <h1 className="text-3xl font-bold text-white pb-5">
              Some Features that Made us Unique
            </h1>
            <p className="text-white">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 md:w-1/2 p-4">
            <div className="single-feature bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:bg-black group">
              <a href="#" className="title flex items-center mb-4">
                <span className="lnr lnr-user text-2xl"></span>
                <h4 className="ml-4 text-xl font-semibold transition duration-300 group-hover:text-yellow-400">
                  Expert Technicians
                </h4>
              </a>
              <p className="text-gray-700 transition duration-300 group-hover:text-white">
                Our team of expert technicians is dedicated to pushing
                boundaries, exploring new possibilities, and creating spaces
                that inspire and delight.By leveraging advanced software and
                tools
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 p-4">
            <div className="single-feature bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:bg-black group">
              <a href="#" className="title flex items-center mb-4">
                <span className="lnr lnr-license text-2xl"></span>
                <h4 className="ml-4 text-xl font-semibold transition duration-300 group-hover:text-yellow-400">
                  Professional Service
                </h4>
              </a>
              <p className="text-gray-700 transition duration-300 group-hover:text-white">
                We provide personalized consultations to understand your vision
                and requirements. Our expert designers work closely with you to
                develop a tailored design plan that aligns with your aesthetic
                preferences and functional needs
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 p-4">
            <div className="single-feature bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:bg-black group">
              <a href="#" className="title flex items-center mb-4">
                <span className="lnr lnr-phone text-2xl"></span>
                <h4 className="ml-4 text-xl font-semibold transition duration-300 group-hover:text-yellow-400">
                  Great Support
                </h4>
              </a>
              <p className="text-gray-700 transition duration-300 group-hover:text-white">
                Each project is assigned a dedicated project manager who acts as
                your single point of contact. They coordinate all aspects of the
                project, keeping you informed and ensuring that everything runs
                smoothly
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 p-4">
            <div className="single-feature bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:bg-black group">
              <a href="#" className="title flex items-center mb-4">
                <span className="lnr lnr-rocket text-2xl"></span>
                <h4 className="ml-4 text-xl font-semibold transition duration-300 group-hover:text-yellow-400">
                  Technical Skills
                </h4>
              </a>
              <p className="text-gray-700 transition duration-300 group-hover:text-white">
                At Skep, we are committed to staying at the forefront of
                technological advancements in the interior design industry to
                ensure that we provide our clients with the best possible
                solutions for their spaces
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 p-4">
            <div className="single-feature bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:bg-black group">
              <a href="#" className="title flex items-center mb-4">
                <span className="lnr lnr-diamond text-2xl"></span>
                <h4 className="ml-4 text-xl font-semibold transition duration-300 group-hover:text-yellow-400">
                  Highly Recommended
                </h4>
              </a>
              <p className="text-gray-700 transition duration-300 group-hover:text-white">
                Skep Interiors works with well-established Building Management
                companies in United Arab Emirates namely Dubai Outlet Mall,
                Dubai Festival City Mall, Dubai Mall and Dubai Properties to
                provide skills exchange and innovative professional services to
                satisfy client’s requirements.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 p-4">
            <div className="single-feature bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:bg-black group">
              <a href="#" className="title flex items-center mb-4">
                <span className="lnr lnr-bubble text-2xl"></span>
                <h4 className="ml-4 text-xl font-semibold transition duration-300 group-hover:text-yellow-400">
                  Positive Reviews
                </h4>
              </a>
              <p className="text-gray-700 transition duration-300 group-hover:text-white">
                our client commended our exceptional customer support throughout
                the entire process. They praised our team for being attentive,
                responsive, and dedicated to ensuring their needs were met every
                step of the way
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
