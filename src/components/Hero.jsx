import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability - does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-red-500 bg-clip-text text-transparent">Spotless spaces, stress-free days.</span>
          </h1>
          <p className="mt-4 text-slate-700 text-lg md:text-xl">
            Swachify brings professional cleaning for homes, offices, shops, and cars. Reliable teams, flexible schedules, and transparent pricing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 transition">Explore Services</a>
            <a href="#booking" className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-slate-800 font-semibold hover:border-blue-500 hover:text-blue-600 transition bg-white/70 backdrop-blur">How Booking Works</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
