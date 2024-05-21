import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ser from '../../assets/Images/about.jpg';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    // Animate the content when the component is mounted
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 }
      });
    }
  }, [controls, inView]);

  const animateContent = () => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    });
  };

  const animateImage = () => {
    controls.start({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    });
  };

  const resetAnimation = () => {
    controls.start({
      x: -20,
      opacity: 0
    });
  };

  return (
    <section id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full" ref={ref}>
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
            <h2 className="text-3xl text-gray-400 font-bold sm:text-4xl">About</h2>
            <p className="mt-4 text-gray-300">
              At TheClientsMaker.com, we understand the power of compelling content in capturing the attention of your audience and driving meaningful engagement. Our dedicated team of content creators is here to help you craft content that resonates with your target audience and achieves your business goals.<br/>
              Tailored Content Solutions: We believe in creating content that is customized to meet the unique needs and objectives of your business. Whether you need blog posts, articles, social media content, or more, we've got you covered
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;
