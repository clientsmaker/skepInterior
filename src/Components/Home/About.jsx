import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import backgroundImage from "../../assets/Images/homcard6.jpg";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.8)", // Adjust brightness of background image
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="relative mx-auto px-4 py-16 sm:px-6 lg:px-8 text-gray-500 max-w-screen-lg">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ y: 20, opacity: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            We're innovating the way
            <br />
            companies reinvent their
            <br />
            office spaces for the
            <br />
            remote workforce.
          </h2>
          <p className="text-xs sm:text-sm lg:text-base mt-4">
            A N A S&nbsp; I Q B A L&nbsp; &nbsp; C E O
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
