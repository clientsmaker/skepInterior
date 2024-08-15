import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from '../assets/Images/logo white.png'; // Update the path accordingly

const Footer = () => {
  return (
    <div className="bg-slate-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div>
      <img src={logo} alt="Company Logo" className="h-24 w-24 mb-4" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 border-b-2 border-gray-600 py-8 ">
        <div className="flex flex-col items-start md:items-start">
          
          <p className="text-sm text-white max-w-xs md:max-w-md">
            Our multidiscipline team with more than 10 years of experience combines eye-catching interior design,
            intelligent space planning, leading-edge technology, and a flawless finish to create uplifting, inspirational interiors to
            change your working environment and improve your business. Our expert designers and project team always
            cherish a dream of giving the best products and services with professional grit & resilience. Delighting clients is
            what drives us. We believe in creating Innovation and Integrity for future generations & delivering The Best That
            Exists.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-center lg:items-start lg:px-16">
          <h6 className="font-mono uppercase ">Navigation</h6>
          <ul className="mt-2 space-y-2 lg:px-2">
            <li className="text-white ">Team</li>
            <li className="text-white">Projects</li>
            <li className="text-white">Services</li>
            <li className="text-white">News</li>
            <li className="text-white">Contact</li>
          </ul>
        </div>
        <div className="flex flex-col items-start md:items-end lg:items-start">
          <h6 className="font-mono uppercase pt-2">Follow Us</h6>
          <ul className="mt-2 space-y-4 text-sm text-white lg:px-2">
            <li className="flex items-center hover:text-white">
              <FaInstagram className="mr-2 text-2xl" />
              <a href="https://www.instagram.com/skep_interiors_uae_/" target="_blank" rel="noopener noreferrer">skep_interiors_uae_</a>
            </li>
            <li className="flex items-center hover:text-white">
              <FaFacebook className="mr-2 text-2xl" />
              <a href="https://m.facebook.com/profile.php?id=61557046674427" target="_blank" rel="noopener noreferrer">skep_interiors_uae_</a>
            </li>
            <li className="flex items-center hover:text-white">
              <FaLinkedin className="mr-2 text-2xl" />
              <a href="https://www.linkedin.com/company/skep-interiors/" target="_blank" rel="noopener noreferrer">skep_interiors_uae_</a>
            </li>
            <li className="flex items-center hover:text-white">
              <FaYoutube className="mr-2 text-2xl" />
              <a href="https://www.youtube.com/@skepinteriors8011" target="_blank" rel="noopener noreferrer">skep_interiors_uae_</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center text-gray-500 py-4">
        <p>© 2021 Skep Interiors. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
