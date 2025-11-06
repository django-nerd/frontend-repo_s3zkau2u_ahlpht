import React from 'react';
import { Home, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-red-500 grid place-items-center text-white shadow">
              <Home size={18} />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-900">Swachify</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Cleaning Experts</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition">Services</a>
            <a href="#booking" className="text-slate-700 hover:text-blue-600 transition">How to Book</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition">Contact</a>
          </nav>

          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-red-500 px-4 py-2 text-white shadow hover:shadow-md transition">
            <Phone size={16} />
            <span className="hidden sm:inline">Get a Quote</span>
            <span className="sm:hidden">Quote</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
