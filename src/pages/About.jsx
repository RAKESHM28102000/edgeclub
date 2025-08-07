import React from 'react';

const About = () => (
  <section
    className="pt-24 px-4 sm:px-6 md:px-10 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"
    data-aos="fade-right"
  >
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Content Section */}
      <div className="w-full md:w-1/2" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">About EDGE Club</h2>
        <p className="text-lg mb-6">
          The Entrepreneurship Development and Growth Establishment (EDGE) Club at the Department of Management Studies, University of Madras, is a vibrant community nurturing future entrepreneurs through experience-based learning and collaboration.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-1">Our Vision</h3>
            <p>To empower students with an entrepreneurial mindset and equip them to turn ideas into impactful ventures.</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-1">Our Mission</h3>
            <p>Foster innovation, build leadership skills, and connect students with real-world opportunities in business and startups.</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-1">Faculty Engagement</h3>
            <p>We work hand-in-hand with professors to enrich learning through seminars, industry projects, and case studies.</p> 
          </div>

          {/* <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow"> */}
            {/* <h3 className="text-xl font-semibold mb-1">Community Building</h3> */}
            {/* <p>EDGE builds a bridge between students, alumni, and professionals, nurturing a thriving entrepreneurial ecosystem on campus.</p> */}
          {/* </div> */}
        </div>

        <div className="mt-6">
          <p className="text-md font-medium">
            From ideation to incubation, EDGE Club is your launchpad to innovation and leadership at the University of Madras.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2" data-aos="fade-left">
        <img
          src="./images/group-illustrator.jpg"
          alt="EDGE Club"
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  </section>
);

export default About;
