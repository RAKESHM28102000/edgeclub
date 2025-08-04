import React from 'react';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';

const Entrepreneur = () => (
  <section className="pt-24 px-4 min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white" data-aos="flip-left">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">EDGE Entrepreneurs</h2>
      <p className="text-lg text-center mb-8">EDGE Club celebrates student entrepreneurs who are leading innovative ventures. These startups reflect a passion for impact, creativity, and business growth fostered by the EDGE environment.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10" data-aos="fade-up" data-aos-delay="200">
        {/* Rakesh's Startup */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center" data-aos="zoom-in" data-aos-delay="100">
          <img src="/images/rakesh.jpeg" alt="Rakesh M" className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-blue-600 dark:border-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Rakesh M</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Founder, InspireLoop Technologies</p>
          <p className="text-sm">Blending digital innovation with rural empowerment by building websites, graphics, and training youth in IT, AI, and digital tools for the future.</p>
          <div className="flex justify-center gap-4 mt-4 text-xl text-blue-600 dark:text-blue-300">
            <a href="https://linkedin.com/in/rakesh-m-b67121217" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-800 transition" /></a>
            <a href="https://inspireloop.onrender.com" target="_blank" rel="noopener noreferrer"><FaGlobe className="hover:text-green-600 transition" /></a>
          </div>
        </div>

        {/* Student Startup 1 */}
        {/* <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center" data-aos="zoom-in" data-aos-delay="200"> */}
          {/* {/* <img src="/images/aanandhi.jpg" alt="Aanandhi S" className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-pink-500 dark:border-pink-400" /> */}
          {/* <h3 className="text-xl font-semibold mb-2">Aanandhi S</h3> */}
          {/* <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Founder, SweetNest Bakes</p> */}
          {/* {/* <p className="text-sm">Home-based baking startup crafting customized cakes and desserts for celebrations with a focus on quality and creativity.</p> */} 
        {/* </div> */}

        {/* Student Startup 2 */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center" data-aos="zoom-in" data-aos-delay="300">
          <img src="/images/image-1.jpeg" alt="Arun K" className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-500 dark:border-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Kevin Thomas</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Founder, Kevin Consulting</p>
          <p className="text-sm">Business consultancy helping local startups and students with business plans, marketing strategies, and mentoring support.</p>
           <div className="flex justify-center gap-4 mt-4 text-xl text-blue-600 dark:text-blue-300">
   <a href="https://linkedin.com/in/rakesh-m-b67121217" target="_blank" rel="noopener 
noreferrer"><FaLinkedin className="hover:text-blue-800 transition" /></a>
   <a href="https://inspireloop.onrender.com" target="_blank" rel="noopener noreferrer"><FaGlobe 
className="hover:text-green-600 transition" /></a>
 </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="300">
          <h4 className="text-lg font-bold mb-2">Latest EDGE Achievement</h4>
          <p>EDGE Startups were showcased at the Tamil Nadu Startup Expo 2025, receiving appreciation from industry leaders and incubators.</p>
        </div>

        <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="400">
          <h4 className="text-lg font-bold mb-2">Support & Schemes</h4>
          <ul className="list-disc list-inside text-sm">
            <li><a href="https://msmeonline.tn.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:underline">Tamil Nadu MSME Portal</a></li>
            <li><a href="https://startupindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:underline">Startup India</a></li>
            <li><a href="https://www.startuptn.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:underline">Startup Tamil Nadu</a></li>
            <li><a href="https://www.niti.gov.in/aim" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:underline">Atal Innovation Mission</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center" data-aos="fade-up" data-aos-delay="500">
        <p className="text-md">Be the next changemaker. Explore entrepreneurial opportunities with EDGE Club and beyond!</p>
      </div>
    </div>
  </section>
);

export default Entrepreneur;