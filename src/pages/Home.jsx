// pages/Home.jsx

import React from "react";
import Events from "./Events";
import Students from "./Students";
import Entrepreneur from "./Entrepreneur";
import Contact from "./Contact";
import About from "./About";
import StudentsCoursel from "./StudentsCoursel";
const Home = () => {
  return (
    <>
      <section
        className="pt-24 px-4 min-h-screen bg-cover bg-center bg-no-repeat text-black dark:text-white flex justify-center items-center"
        style={{ backgroundImage: 'url(/images/The_Senate_House,_Madras.jpg)' }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="backdrop-brightness-100 dark:backdrop-brightness-50 backdrop-blur-sm bg-white/60 dark:bg-gray-900/60 p-6 rounded-lg max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight"
            data-aos="zoom-in" data-aos-duration="1000"
          >
            Welcome to EDGE Club
          </h2>
          <p
            className="text-lg sm:text-xl mb-6"
            data-aos="fade-in" data-aos-delay="200"
          >
            Empowering future entrepreneurs at the University of Madras through workshops, mentorship, and real-world startup experiences.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {[
              {
                title: 'Startup Workshops',
                desc: 'Interactive sessions led by industry experts to equip students with tools for building and pitching startups.',
                delay: 100,
              },
              {
                title: 'Mentorship Programs',
                desc: 'Connect students with alumni and entrepreneurs for personalized guidance and business insight.',
                delay: 200,
              },
              {
                title: 'Innovation Challenges',
                desc: 'Encourage problem-solving and innovative thinking through competitions and team projects.',
                delay: 300,
              },
              {
                title: 'Faculty Involvement',
                desc: 'EDGE collaborates closely with faculty to integrate entrepreneurial thinking into academic learning.',
                delay: 400,
              },
              {
                title: 'Networking Events',
                desc: 'Platform for students and professors to connect with startup founders and professionals.',
                delay: 500,
              },
              {
                title: 'Student Startups',
                desc: 'Showcasing ventures by students and encouraging others to follow the path of entrepreneurship.',
                delay: 600,
              }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
                data-aos="fade-up"
                data-aos-delay={card.delay}
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsections for rest of the pages */}
      <About />
      <Events />
      <Entrepreneur />
      <StudentsCoursel/>
      <Contact />
    </>
  );
};

export default Home;
