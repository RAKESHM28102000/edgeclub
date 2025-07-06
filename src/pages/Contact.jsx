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
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-2">EDGE Club, Department of Management Studies</p>
        <p className="mb-2">University of Madras, Chepauk, Chennai - 600005</p>
        <p className="mb-6">Email: edgeclub@unom.ac.in | Phone: +91-44-2539-9422</p>

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
    </section>
  );
};

export default Contact;
