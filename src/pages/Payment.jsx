import React from 'react';
import { FaGooglePay, FaPhoneAlt, FaRupeeSign, FaQrcode } from 'react-icons/fa';

const Payment = () => (
  <section
    className="pt-24 px-4 sm:px-6 md:px-10 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"
    data-aos="fade-up"
  >
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      
      {/* Payment Details Section */}
      <div className="w-full md:w-1/2 space-y-6" data-aos="fade-right">
        <h2 className="text-4xl font-bold mb-4">Make a Payment</h2>
        <p className="text-lg mb-4">
          Support EDGE Club initiatives by making a payment through UPI or Google Pay.  
          All transactions are secure and transparent.
        </p>

        {/* Contact & UPI Details */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow space-y-3">
          <div className="flex items-center gap-3">
            <FaGooglePay className="text-blue-600 text-2xl" />
            <p className="font-medium">UPI Number :<span className="text-blue-700 dark:text-blue-300">6382550801</span></p>
          </div>
           <div className="flex items-center gap-3">
            <FaRupeeSign className="text-yellow-500 text-lg" />
            <p className="font-medium">UPI ID : <span className="text-yellow-600 dark:text-yellow-400">mpk.prawin.kumar@oksbi</span></p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-600 text-lg" />
            <p className="font-medium">Account Number : <span className="text-green-700 dark:text-green-300">43862577454</span></p>
          </div>
           <div className="flex items-center gap-3">
           <FaPhoneAlt className="text-green-600 text-lg" />
           <p className="font-medium">IFSC :<span className="text-green-700 dark:text-green-300">SBIN0002234</span></p>
         </div>
         
        </div>

        {/* Payment Status */}
        {/* <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg shadow space-y-2"> */}
          {/* <p className="font-medium text-lg">Startup Donation :<span className="text-red-500">₹12,00,00,000</span></p> */}
          {/* <p className="font-medium text-lg">College Spending for Club Growth :<span className="text-green-600">₹80,00,000</span></p> */}
        {/* </div> */}

        {/* Pay Button */}
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow transition duration-300 transform hover:scale-105"
        >
          Kindly Pay !
        </button>
      </div>

      {/* QR Code Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center" data-aos="fade-left">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center">
          <FaQrcode className="text-6xl text-blue-700 dark:text-blue-400 mb-4" />
          <img
            src="/images/qr-code-pk.jpeg"
            alt="QR Code"
            className="w-48 h-48 lg:w-[400px] lg:h-[600px] object-contain rounded-lg border-4 border-blue-600 dark:border-blue-400"
          />
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Scan to pay via UPI</p>
        </div>
      </div>

    </div>
  </section>
);

export default Payment;
