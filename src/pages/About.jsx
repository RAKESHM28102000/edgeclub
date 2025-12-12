import React from 'react';

const About = () => (
  <section className="pt-24 px-4 sm:px-6 md:px-10 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white" data-aos="fade-right">
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
          src="./images/edgeall.jpg"
          alt="EDGE Club"
          className="w-full h-auto rounded-xl shadow-sm hover:shadow-2xl shadow-amber-50 hover:shadow-white object-cover"
        />
      </div>
    </div>

    {/* Staff Section */}
    <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8" data-aos="fade-up">
      {/* Staff Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src="./images/manjula.png"
          alt="Dr. P.S. Manjula"
          className="rounded-xl shadow-lg w-64 h-64 object-cover border-4 border-yellow-400"
        />
      </div>

      {/* Staff Details */}
      <div className="w-full md:w-2/3 space-y-4 ">
        <h3 className="text-2xl font-bold">Dr. P.S. Manjula, M.Sc (Maths), MBA, Ph.D., NET, SET</h3>
        <p className="text-lg font-semibold">Assistant Professor</p>
        <p className="text-md text-gray-700 dark:text-gray-300">
          Dr. P.S. Manjula is Assistant Professor in the Department of Management Studies, University of Madras.She has graduated in SET (Management), NET (Management), B.Ed (Education), Post Graduate Diploma (Computer Applications), B.Sc (Mathematics), M.Sc (Mathematics), MBA (Marketing & Systems), Doctorate of Philosophy (Management).
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-sm lg:m-6 ">
          <div>
            <h4 className="font-semibold">Contact Me</h4>
            <p>Phone: 044-25399682</p>
            <p>Mobile: +91 98411 25598</p>
            <p>Email: manjula@unom.ac.in</p>
            <p>Alt Email: write2profmanjula@gmail.com</p>
          </div>

          <div>
            <h4 className="font-semibold">Reach Me At</h4>
            <p>Department of Management Studies</p>
            <p>University of Madras</p>
            <p>Chepauk Campus, Chennai - 600 005, Tamil Nadu</p>
          </div>
        </div>

        {/* <div className="grid sm:grid-cols-3 gap-4 text-sm mt-4"> */}
          {/* <div> */}
            {/* <h4 className="font-semibold">Other Positions</h4> */}
            {/* <p>7 Achievements</p> */}
            {/* <p>3 Memberships</p> */}
            {/* <p>0 Awards / Honors</p> */}
          {/* </div> */}
          {/* <div> */}
            {/* <h4 className="font-semibold">Publications</h4> */}
            {/* <p>56 Publications</p> */}
            {/* <p>106 Seminars / Conferences</p> */}
            {/* <p>2 Projects</p> */}
          {/* </div> */}
          {/* <div> */}
            {/* <h4 className="font-semibold">Research</h4> */}
            {/* <p>4 Research Scholars</p> */}
            {/* <p>0 Invited Talks</p> */}
            {/* <p>0 Patents</p> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  </section>
);

export default About;
