import React from 'react';
import { CheckCircle2, CalendarClock, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Tell us what you need',
    desc: 'Share your space type, size, preferred date/time, and any add-ons. We confirm within minutes.',
  },
  {
    icon: CalendarClock,
    title: 'Pick a slot',
    desc: 'Choose a convenient window — weekdays, weekends, or after-hours for offices.',
  },
  {
    icon: CheckCircle2,
    title: 'We arrive prepared',
    desc: 'A vetted team shows up on time with eco-friendly supplies and a clear checklist.',
  },
];

const BookingInfo = () => {
  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Booking is simple</h2>
          <p className="mt-3 text-slate-600">We designed a fast, transparent process. No hidden fees — just clear steps from quote to clean.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-red-500 text-white grid place-items-center shadow">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#contact" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 transition">Request a Quote</a>
          <p className="text-sm text-slate-600">Or call us: +1 (555) 012-3456</p>
        </div>
      </div>
    </section>
  );
};

export default BookingInfo;
