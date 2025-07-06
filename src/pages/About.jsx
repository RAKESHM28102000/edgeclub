import React from 'react';

const About = () => (
  <section className="pt-24 px-4 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white" data-aos="fade-right">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">About EDGE Club</h2>
      <p className="text-lg mb-6 text-center">The Entrepreneurship Development and Growth Establishment (EDGE) Club at the Department of Management Studies, University of Madras, is a vibrant community nurturing future entrepreneurs through experience-based learning and collaboration.</p>

      <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p>To empower students with an entrepreneurial mindset and equip them to turn ideas into impactful ventures.</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p>Foster innovation, build leadership skills, and connect students with real-world opportunities in business and startups.</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Faculty Engagement</h3>
          <p>We work hand-in-hand with professors to enrich learning through seminars, industry projects, and case studies.</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Community Building</h3>
          <p>EDGE builds a bridge between students, alumni, and professionals, nurturing a thriving entrepreneurial ecosystem on campus.</p>
        </div>
      </div>

      <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
        <p className="text-md">From ideation to incubation, EDGE Club is your launchpad to innovation and leadership at the University of Madras.</p>
      </div>
    </div>
  </section>
);

export default About;
