
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-brand-dark">Contact Speed Safety Nets</h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto italic">Direct line for inquiries: 07971670941. Our engineering team is ready for site surveys across Mumbai and Pan-India.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div className="w-16 h-16 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Direct Call</h3>
          <p className="text-gray-500 font-bold">07971670941</p>
          <p className="text-gray-500 text-sm mt-1">24/7 Support for Projects</p>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Email Inquiry</h3>
          <p className="text-gray-500">sales@speedsafetynet.net.in</p>
          <p className="text-gray-500">speedsafetynets@gmail.com</p>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Office Location</h3>
          <p className="text-gray-500 font-medium">Speed Safety Nets</p>
          <p className="text-gray-500 text-sm">Mumbai, Maharashtra, India</p>
        </div>
      </div>

      <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl h-[400px] border-4 border-white">
         <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x10344b1c78477a3d!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title="Mumbai Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
