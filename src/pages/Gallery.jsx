import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "images/events/ven8.jpeg",
  "images/events/ven7.jpeg",
  "images/events/ven6.jpeg",
  "images/events/ven5.jpeg",
  "images/events/ven4.jpeg",
  "images/events/ven3.jpeg",
  "images/events/ven2.jpeg",
  "images/events/ven1.jpeg",
  // you can add more images here
];

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10" data-aos="fade-down">
        Edge Club Gallery
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl shadow-lg ${
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
    </div>
  );
}
