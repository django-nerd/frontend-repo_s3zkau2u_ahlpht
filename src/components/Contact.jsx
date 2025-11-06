import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Contact us</h2>
            <p className="mt-3 text-slate-600">Questions, quotes, or partnership ideas? We would love to hear from you.</p>

            <div className="mt-6 space-y-3 text-slate-700 text-sm">
              <p className="flex items-center gap-2"><Phone size={16} className="text-blue-600"/> +1 (555) 012-3456</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-blue-600"/> hello@swachify.com</p>
              <p className="flex items-center gap-2"><MapPin size={16} className="text-blue-600"/> Service Areas: Downtown, Midtown, North & East Zones</p>
              <div className="mt-4">
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-200">
                  <iframe
                    title="service-area-map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=72.80%2C18.90%2C72.95%2C19.05&layer=mapnik"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="https://facebook.com" target="_blank" className="text-slate-600 hover:text-blue-600 font-medium" rel="noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" className="text-slate-600 hover:text-blue-600 font-medium" rel="noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" className="text-slate-600 hover:text-blue-600 font-medium" rel="noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" className="text-slate-600 hover:text-blue-600 font-medium" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="lg:pl-8">
            <form onSubmit={submit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input required type="tel" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="+1 555 012 3456" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Service Needed</label>
                  <select className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                    <option>Home Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Retail & Shop Cleaning</option>
                    <option>Car Wash / Detailing</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Tell us about your space and preferred date..."></textarea>
                </div>
              </div>
              <button type="submit" className="mt-6 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-red-500 px-5 py-3 text-white font-semibold shadow hover:shadow-md transition">Send message</button>
              {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
