import React from 'react';
import img1 from '../../assets/Images/proj1.jpg';
import img2 from '../../assets/Images/proj2.jpg';
import img3 from '../../assets/Images/proj3.jpg';
import img4 from '../../assets/Images/proj4.jpg';

const articles = [
  {
    title: "New Furniture Designs",
    category: "F U R N I T U R E",
    date: "4.5.21",
    image: img1,
  },
  {
    title: "Trending Office Designs",
    category: "F L O O R  P L A N S",
    date: "4.5.21",
    image: img2,
  },
  {
    title: "Unique Plant Placements for Interiors",
    category: "O R G A N I Z A T I O N",
    date: "4.5.21",
    image: img3,
  },
  {
    title: "Unique Plant Placements for Interiors",
    category: "O R G A N I Z A T I O N",
    date: "4.5.21",
    image: img4,
  },
];

const categories = [
  "Furniture",
  "Remote Spaces",
  "Office Tech",
  "Floor Plans",
  "Organization",
  "Interior Design",
];

const DesignComponent = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white m-5 lg:m-10 ">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4 lg:mt-20 ">
        <h2 className="text-sm font-thin mb-4">P O P U L A R C A T E G O R I E S</h2>
        <ul className="space-y-5">
          {categories.map((category, index) => (
            <li key={index} className="text-slate-400 hover:text-gray-900">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">What's new?</h1>
          <button className="bg-black text-white text-xs font-thin px-10 py-1 rounded-full">VIEW ALL <br /> PRODUCTS</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:mt-10">
          {articles.map((article, index) => (
            <div key={index} className="bg-white   overflow-hidden lg:even:mt-10 lg:odd:mb-10">
              <img src={article.image} alt={article.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <div className='flex justify-between lg:mt-16'>
                <p className="text-gray-500 text-xs">{article.category}</p>
                <p className="text-gray-500 text-xs text-end"> {article.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignComponent;
