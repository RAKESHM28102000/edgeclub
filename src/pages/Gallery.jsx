import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoClose } from "react-icons/io5"; // Close Icon

const images = [
  "images/edgeall.jpg",
  "/images/edge-name-13.png",
  "images/events/ven8.jpeg",
  "images/events/ven7.jpeg",
  "images/events/ven6.jpeg",
  "images/events/ven5.jpeg",
  "images/events/ven3.jpeg",
  "images/events/ven2.jpeg",
  "images/events/ven1.jpeg",
  "images/teamlunch/ecl-1.jpeg",
  "images/teamlunch/ecl-2.jpeg",
  "images/teamlunch/ecl-3.jpeg",
  "images/teamlunch/ecl-4.jpeg",
  "images/teamlunch/ecl-5.jpeg",
  "images/teamlunch/ecl-6.jpeg",
  "images/teamlunch/ecl-7.jpeg",
  "images/teamlunch/ecl-8.jpeg",
  "images/teamlunch/ecl-9.jpeg",
  "images/teamlunch/ecl-11.jpeg",
  "images/teamlunch/ecl-13.jpeg",
  "images/teamlunch/ecl-14.jpeg",
  "images/teamlunch/ecl-16.jpeg",
  "images/teamlunch/ecl-17.jpeg",
  "images/teamlunch/ecl-18.jpeg",
  "images/teamlunch/ecl-19.jpeg",
  "images/teamlunch/ecl-20.jpeg",
  "images/teamlunch/ecl-21.jpeg",
  "images/teamlunch/l2.jpeg",
  "images/teamlunch/l3.jpeg",
  "images/teamlunch/l4.jpeg",
  "images/teamlunch/l5.jpeg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10" data-aos="fade-down">
        Edge Club Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(src)}
            className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer ${
              index % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
            data-aos="zoom-in"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Image Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md flex items-center justify-center z-50 p-4">
          
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-4xl hover:text-red-400 transition"
            onClick={() => setSelectedImage(null)}
          >
            <IoClose />
          </button>

          {/* Fullscreen Image */}
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain rounded-lg animate-[fadeIn_.3s_ease]"
          />
        </div>
      )}
    </div>
  );
}
