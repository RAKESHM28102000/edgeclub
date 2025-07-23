import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Students from './pages/Students';
import Entrepreneur from './pages/Entrepreneur';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NotFound from './pages/NotFound';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white overflow-hidden dark:bg-gray-900 min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/students" element={<Students />} />
          <Route path="/entrepreneur" element={<Entrepreneur />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          <Route path="/*" element={<NotFound/>} /> {/* Catch-all route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
