import React from 'react';
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';
import deliveryImage from '../assets/delivery.jpg';
import tableImage1 from '../assets/restauranttable.jpg';
import deliveryImage2 from '../assets/delivery2.jpg';
import deliveryImage3 from '../assets/delivery3.jpg'

const ContactUs = () => {
  return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold text-center">Contact Us</h1>
      
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Address</h2>
        <p className="flex items-center text-lg text-gray-900">
          <FaHome className="mr-2" /> GreenPark, Matugama
        </p>
        <p className="text-lg text-gray-700">Sri Lanka</p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Contact Number</h2>
        <p className="flex items-center text-lg text-gray-900">
          <FaPhone className="mr-2" /> 0712113781
        </p>
        <p className="text-lg text-gray-700">Open 8AM to 10PM</p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Email</h2>
        <p className="flex items-center text-lg text-gray-900">
          <FaEnvelope className="mr-2" /> msrestaurant19info@gmail.com
        </p>
        <p className="text-lg text-gray-700">Email us your query</p>
      </section>
      
      <section className="flex flex-col items-start p-6 mb-8 rounded-lg shadow-md md:flex-row bg-gray-50">
        <div className="h-full md:w-1/2 md:pr-6">
          <h2 className="mb-4 text-3xl font-semibold text-green-700">Book Your Table</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-800">Customer Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-800">Customer Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-800">Customer Phone Number</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-800">Message</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" rows="4"></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="px-6 py-3 font-semibold text-white transition duration-200 bg-green-600 rounded-md hover:bg-green-700">Submit</button>
            </div>
          </form>
        </div>
        <div className="flex items-center h-full mt-6 md:w-1/2 md:mt-0">
          <img src={tableImage1} alt="table" className="object-cover w-full h-full mx-auto rounded-md" />
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-semibold">Delivery Service</h2>
        <p className="mb-4 font-serif text-lg text-gray-700">
          If you are living within 5 km of Matugama town, we can arrange your delivery.
        </p>
        <div className="flex flex-col justify-center gap-6 md:flex-row">
          <img src={deliveryImage} alt="Delivery" className="object-cover w-full h-64 mx-auto rounded-md shadow-md" />
          <img src={deliveryImage2} alt="Delivery" className="object-cover w-full h-64 mx-auto rounded-md shadow-md" />
          <img src={deliveryImage3} alt="Delivery" className="object-cover w-full h-64 mx-auto rounded-md shadow-md" />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

