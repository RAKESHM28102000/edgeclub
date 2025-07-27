import React from 'react';
import Slider from 'react-slick';
import { FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';
import students from '../data/studentData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StudentsCoursel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:600,
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 3 seconds
    pauseOnHover: true,  // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      className="pt-24 px-4 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"
      data-aos="fade-left"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Team</h2>

        <Slider {...settings}>
          {students.map((student, index) => (
            <div key={index} className="px-3">
              <div
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl 
transform transition duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-56 object-contain bg-white"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold mb-1">{student.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {student.specialization}
                  </p>
                  <div className="flex justify-center gap-4 text-lg text-blue-600 dark:text-blue-400">
                    <a
                      href={student.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="hover:text-blue-800 transition" />
                    </a>
                    <a
                      href={student.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="hover:text-pink-600 transition" />
                    </a>
                    <a
                      href={student.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGlobe className="hover:text-green-500 transition" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default StudentsCoursel;
