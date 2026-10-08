import React from 'react';
import { MapPin, Clock, Phone, Navigation, Wifi, Car, Smartphone, Check, ExternalLink } from 'lucide-react';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-village-blue text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Convenient Rice Village Location
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Visit Us or Drop Off Today
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Located right in the heart of Rice Village on Rice Boulevard, with easy dedicated parking directly in front of our entrance.
          </p>
        </div>

        {/* Two-Column Grid: Left Hours & Details, Right Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Store Details & Schedule */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-clean p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Address & Phone */}
              <div className="space-y-3 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-village-navy text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-village-sky" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">Village Cleaners</h3>
                    <p className="text-sm text-slate-600 mt-0.5">2366 Rice Boulevard, Suite D</p>
                    <p className="text-sm text-slate-600">Houston, TX 77005 (Rice Village)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-village-blue flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Telephone</div>
                    <a
                      href="tel:7132778770"
                      className="font-display font-bold text-slate-900 text-base hover:text-village-blue transition"
                    >
                      (713) 277-8770
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-village-navy">
                  <Clock className="w-4 h-4 text-village-blue" />
                  <span>Operating Schedule</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-slate-50">
                    <span className="font-semibold text-slate-700">Monday – Thursday</span>
                    <span className="font-bold text-slate-900 text-right">8:00 AM – 1:00 PM<br/><span className="text-[11px] text-slate-500 font-normal">2:00 PM – 5:00 PM</span></span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-slate-50">
                    <span className="font-semibold text-slate-700">Friday</span>
                    <span className="font-bold text-slate-900 text-right">8:00 AM – 1:00 PM<br/><span className="text-[11px] text-slate-500 font-normal">2:00 PM – 4:00 PM</span></span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-slate-50">
                    <span className="font-semibold text-slate-700">Saturday</span>
                    <span className="font-bold text-slate-900">8:00 AM – 2:00 PM</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-red-50/60 text-red-800">
                    <span className="font-semibold">Sunday</span>
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Facility Amenities */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Facility Amenities</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-village-blue" />
                    <span>Free Front Parking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-village-blue" />
                    <span>Dexter Pay Mobile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-village-blue" />
                    <span>Free High-Speed Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-village-blue" />
                    <span>Attendant On-Duty</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction Deep-Link Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Village+Cleaners+2366+Rice+Boulevard+Houston+TX+77005"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-2xl bg-village-navy hover:bg-village-navyLight text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-village-sky" />
              <span>Get Driving Directions in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Right Column: Google Maps Live View & Storefront Photo */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Real Storefront Photo Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-clean h-52 sm:h-64 group bg-slate-900">
              <img
                src="/images/storefront.jpg"
                alt="Village Cleaners Storefront Rice Village"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-village-sky">Rice Village Storefront</div>
                  <h4 className="font-display font-bold text-lg">2366 Rice Blvd, Suite D</h4>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
                  Dedicated Customer Parking
                </div>
              </div>
            </div>

            {/* Interactive Embedded Google Map */}
            <div className="flex-1 min-h-[300px] rounded-3xl overflow-hidden border border-slate-200 shadow-clean relative bg-slate-100">
              <iframe
                title="Village Cleaners Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.066645347249!2d-95.4168997!3d29.7178287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0675cc139b1%3A0x7c9e9b2bf8933735!2sVillage%20Cleaners!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
