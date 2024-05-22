import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ser from "../../assets/Images/about.jpg";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    // Animate the content when the component is mounted
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  const animateContent = () => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    });
  };

  const animateImage = () => {
    controls.start({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    });
  };

  const resetAnimation = () => {
    controls.start({
      x: -20,
      opacity: 0,
    });
  };

  return (
    <section id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
            ref={ref}
          >
            {inView && (
              <motion.img
                alt=""
                src={ser}
                className="absolute inset-0 h-full w-full object-contain transition duration-300 ease-in-out transform hover:scale-105"
                initial={{ opacity: 0, x: -20 }}
                animate={controls}
                onMouseEnter={animateImage}
                onMouseLeave={resetAnimation}
              />
            )}
          </div>

          <motion.div
            className="lg:py-24"
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            onMouseEnter={animateContent}
            onMouseLeave={resetAnimation}
          >
            <h2 className="text-3xl text-gray-400 font-bold sm:text-4xl">
              About
            </h2>
            <p className="mt-4 text-gray-500">
              Our multi discipline team with more than 10 years of experience
              combines eye-catching interior design, intelligent space planning,
              leading-edge technology and a flawless finish to create uplifting,
              inspirational interiors to change your working environment and
              improve your business. Our expert designers and project team
              always cherish a dream of giving the best products and services
              with professional grit & resilience. Delighting clients is what
              drives us. We believe in creating Innovation and Integrity for
              future generations & delivering The Best That Exists.Our approach
              is holistic, ensuring every element of your workspace is
              considered. From the initial concept to the final touches, our
              team meticulously plans and executes each project with an
              unwavering commitment to quality and excellence.Our approach is
              holistic, ensuring every element of your workspace is considered.
              From the initial concept to the final touches, our team
              meticulously plans and executes each project with an unwavering
              commitment to quality and excellence
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
