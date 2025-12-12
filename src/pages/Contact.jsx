import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:edgeclub@unom.ac.in?subject=Contact from ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`;
  };

  return (
    <section className="pt-24 px-4 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Form Section */}
        <div className="md:pr-8" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-2">EDGE Club, Department of Management Studies</p>
          <p className="mb-2">University of Madras, Chepauk, Chennai - 600005</p>
          <p className="mb-6">Email: edge-unom@protonmail.com | Phone: +91-44-2539-9422</p>

          <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div data-aos="fade-left">
          <h3 className="text-2xl font-bold mb-4">Our Location</h3>
          <div className="h-80 w-full rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153079.78063582143!2d80.16084503906251!3d12.988444983872414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5268a1bb501c95%3A0xcdf621c5606c77de!2sUniversity%20of%20Madras!5e1!3m2!1sen!2sin!4v1765515444184!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="University of Madras Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
