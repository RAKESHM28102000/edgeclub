import React from 'react';

const Events = () => (
  <section className="pt-24 px-4 min-h-screen bg-gray-50 dark:bg-gray-800 text-black dark:text-white" data-aos="zoom-in">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">EDGE Club Events</h2>
      <p className="text-lg text-center mb-10">EDGE Club conducts a series of vibrant and practical events throughout the academic year to ignite innovation and entrepreneurial energy among students at the University of Madras.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-semibold mb-2">Venturo</h3>
          <p>24-hour Podcast and innovation challenges to solve real-world problems and develop MVPs.</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-semibold mb-2">Idea Pitching Contests</h3>
          <p>Students pitch business ideas to a panel of judges including investors and faculty mentors.</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-semibold mb-2">Startup Bootcamps</h3>
          <p>Intensive multi-day training programs on entrepreneurship, marketing, and product building.</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl font-semibold mb-2">Guest Lectures</h3>
          <p>Talks by successful entrepreneurs, venture capitalists, and industry experts to inspire and educate.</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-xl font-semibold mb-2">Innovation Days</h3>
          <p>A showcase of creative projects and prototypes developed by students from various departments.</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-xl font-semibold mb-2">National Entrepreneurship Week</h3>
          <p>Week-long celebration with competitions, exhibitions, and workshops promoting entrepreneurship culture.</p>
        </div>
      </div>

      <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="700">
        <p className="text-md">Join our events to network, learn, and bring your entrepreneurial ideas to life at EDGE Club!</p>
      </div>
    </div>
  </section>
);

export default Events;
