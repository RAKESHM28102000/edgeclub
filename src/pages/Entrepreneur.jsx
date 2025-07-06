import React from 'react';

const Entrepreneur = () => (
  <section className="pt-24 px-4 min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white" data-aos="flip-left">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">EDGE Entrepreneurs</h2>
      <p className="text-lg text-center mb-8">EDGE Club proudly showcases alumni who’ve become successful entrepreneurs in technology, retail, services, and social innovation. Their journeys inspire current students to build, lead, and innovate fearlessly.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Gopal Srinivasan</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Chairman, TVS Capital Funds</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Ravi Kiran</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Co-founder, Venture Intelligence</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Kumar Vembu</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Founder, GoFrugal Technologies</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="300">
          <h4 className="text-lg font-bold mb-2">Latest EDGE Achievement</h4>
          <p>Our alumnus <strong>Divya R</strong> launched her sustainable fashion brand “GreenStitch” and received ₹5L in seed funding from the Tamil Nadu Innovation Initiative 2025.</p>
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
