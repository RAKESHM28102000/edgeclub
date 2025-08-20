import React, { useEffect } from "react";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Entrepreneur data in array
const entrepreneurs = [
        {
        id: 1,
        name: "Kevin Thomas Panicker",
        image: "/images/image-1.jpeg",
        title: "Founder, M&K Partners",
        description:
        "Boutique Advisory for Leaders and Organisations navigating Mission-Critical Decisions in Defence, Energy, Finance,Technology & Sustainability; where stakes are global, timelines are unforgiving and precision is non-negotiable.",
        linkedin: "https://linkedin.com/in/kevinpanicker", // sample
        website: "#",
        borderColor: "border-indigo-500 dark:border-indigo-400",
      },
  {
    id: 2,
    name: "Rakesh M",
    image: "/images/rakesh.jpeg",
    title: "Founder, InspireLoop Technologies",
    description:
      "Blending digital innovation with rural empowerment by building websites, graphics, and training youth in IT, AI, and digital tools for the future.",
    linkedin: "https://linkedin.com/in/rakesh-m-b67121217",
    website: "https://inspireloop.onrender.com",
    borderColor: "border-blue-600 dark:border-blue-400",
  },
  // {
    // id: 3,
    // name: "Aanandhi S",
    // image: "/images/aanandhi.jpg",
    // title: "Founder, SweetNest Bakes",
    // description:
      // "Home-based baking startup crafting customized cakes and desserts for celebrations with a focus on quality and creativity.",
    // linkedin: "https://linkedin.com/in/aanandhi-s", // sample
    // website: "#",
    // borderColor: "border-pink-500 dark:border-pink-400",
  // },
];

const Entrepreneur = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="pt-24 px-4 min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      data-aos="flip-left"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">
          EDGE Entrepreneurs
        </h2>
        <p className="text-lg text-center mb-8">
          EDGE Club celebrates student entrepreneurs who are leading innovative
          ventures. These startups reflect a passion for impact, creativity, and
          business growth fostered by the EDGE environment.
        </p>

        {/* Entrepreneur Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {entrepreneurs.map((person, index) => (
            <div
              key={person.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
              data-aos="zoom-in"
              data-aos-delay={100 * (index + 1)}
            >
              <img
                src={person.image}
                alt={person.name}
                className={`w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 ${person.borderColor}`}
              />
              <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {person.title}
              </p>
              <p className="text-sm">{person.description}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-4 text-xl text-blue-600 dark:text-blue-300">
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="hover:text-blue-800 transition" />
                  </a>
                )}
                {person.website && (
                  <a
                    href={person.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="hover:text-green-600 transition" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div
            className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg shadow-md"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h4 className="text-lg font-bold mb-2">Latest EDGE Achievement</h4>
            <p>
              EDGE Startups were showcased at the Tamil Nadu Startup Expo 2025,
              receiving appreciation from industry leaders and incubators.
            </p>
          </div>

          <div
            className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg shadow-md"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h4 className="text-lg font-bold mb-2">Support & Schemes</h4>
            <ul className="list-disc list-inside text-sm">
              <li>
                <a
                  href="https://msmeonline.tn.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-300 hover:underline"
                >
                  Tamil Nadu MSME Portal
                </a>
              </li>
              <li>
                <a
                  href="https://startupindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-300 hover:underline"
                >
                  Startup India
                </a>
              </li>
              <li>
                <a
                  href="https://www.startuptn.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-300 hover:underline"
                >
                  Startup Tamil Nadu
                </a>
              </li>
              <li>
                <a
                  href="https://www.niti.gov.in/aim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-300 hover:underline"
                >
                  Atal Innovation Mission
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="500">
          <p className="text-md">
            Be the next changemaker. Explore entrepreneurial opportunities with
            EDGE Club and beyond!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneur;
