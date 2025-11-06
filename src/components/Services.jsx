import React from 'react';
import { Home, Building2, Store, Car } from 'lucide-react';

const services = [
  {
    id: 'home',
    Icon: Home,
    title: 'Home Cleaning',
    desc: 'Deep and regular cleaning for apartments and villas — kitchens, bathrooms, bedrooms, and more.',
    bullets: ['Eco-friendly supplies', 'Experienced professionals', 'Flexible scheduling'],
  },
  {
    id: 'office',
    Icon: Building2,
    title: 'Office Cleaning',
    desc: 'Daily and weekly plans for workspaces, conference rooms, and common areas with minimal disruption.',
    bullets: ['After-hours options', 'Desk + device-safe', 'Restroom sanitization'],
  },
  {
    id: 'shop',
    Icon: Store,
    title: 'Retail & Shop Cleaning',
    desc: 'Front-of-house sparkle and backroom hygiene to keep your store looking premium.',
    bullets: ['Glass & display care', 'Floor polishing', 'Waste management'],
  },
  {
    id: 'car',
    Icon: Car,
    title: 'Car Wash Programs',
    desc: 'On-site exterior wash and interior detailing with membership-friendly plans.',
    bullets: ['Steam & vacuum', 'Ceramic-safe', 'Add-on: odor removal'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Professional Services</h2>
          <p className="mt-3 text-slate-600">Choose focused packages tailored for homes, offices, shops, and car care. Every service is delivered with a quality-first mindset.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ id, Icon, title, desc, bullets }) => (
            <div key={id} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-red-500 text-white grid place-items-center shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <a href={`#details-${id}`} className="mt-4 inline-block text-blue-600 font-semibold hover:text-red-500 transition">View details</a>
            </div>
          ))}
        </div>

        {/* Details sections */}
        <div className="mt-16 space-y-10">
          {services.map(({ id, title }) => (
            <div key={id} id={`details-${id}`} className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <h4 className="text-lg font-semibold text-slate-900">{title} — What’s included</h4>
              <p className="mt-2 text-slate-700 text-sm">A comprehensive checklist covering dusting, vacuuming, mopping, sanitization, and finishing touches. We customize per site after a short assessment.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
