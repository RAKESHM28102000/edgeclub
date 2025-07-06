import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import students from '../data/studentData';

const Students = () => (
  <section className="pt-24 px-4 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white" data-aos="fade-left">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Our Student Leaders</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
            data-aos="zoom-in" data-aos-delay={index * 100}
          >
            <img src={student.image} alt={student.name} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold mb-1">{student.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{student.specialization}</p>
              <div className="flex justify-center gap-4 text-lg text-blue-600 dark:text-blue-400">
                <a href={student.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-blue-800 transition" />
                </a>
                <a href={student.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-pink-600 transition" />
                </a>
                <a href={student.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="hover:text-green-500 transition" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Students;
