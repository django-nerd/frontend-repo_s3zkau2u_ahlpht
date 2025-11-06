import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingInfo from './components/BookingInfo';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <BookingInfo />
      <Contact />
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Swachify — Professional Cleaning Services</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#services" className="text-slate-600 hover:text-blue-600">Services</a>
            <span className="text-slate-300">•</span>
            <a href="#booking" className="text-slate-600 hover:text-blue-600">Booking</a>
            <span className="text-slate-300">•</span>
            <a href="#contact" className="text-slate-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
