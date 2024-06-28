import React from 'react';
import { Link } from 'react-router-dom';
import popularDish1 from '../assets/chicken-pizza.jpg';
import popularDish2 from '../assets/biryani.jpg';
import popularDish3 from '../assets/strawberry-ice-cream.jpg';
import restaurantInterior from '../assets/restaurant1.jpg';

const HomePage = () => {
  return (
    <div className="p-6">
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold">Welcome to MS Restaurant</h1>
        <p className="text-xl text-gray-700">Savor our tasty dishes, made to please your taste buds and satisfy your hunger.</p>
        <Link to="/menu" className="inline-block px-6 py-3 mt-6 text-lg font-semibold text-white bg-red-600 rounded-md hover:bg-red-700">Explore Our Menu</Link>
      </section>
      
      <section className="mb-12">
        <h2 className="mb-8 text-3xl font-semibold text-center">About Us</h2>
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
          <img 
            src={restaurantInterior} 
            alt="Restaurant Interior" 
            className="object-cover w-full h-auto mb-6 rounded-md max-h-80 md:w-1/2 md:mb-0" 
          />
          <p className="text-lg text-gray-700 md:w-1/2">
            Located in the calm environment of Mathugama, MS Restaurant offers delicious foods for both Sri Lankans and foreigners at reasonable prices. Our mission is to reach international standards in the restaurant industry. Come and enjoy a meal with your family and friends in one of our three dining sections, accommodating up to 50 people at a time.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-8 text-3xl font-semibold text-center">Popular Dishes</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="text-center">
            <img 
              src={popularDish1} 
              alt="Popular Dish 1" 
              className="object-cover w-full h-64 mb-4 rounded-md" 
            />
            <h3 className="font-serif text-xl font-semibold">Chicken Pizza</h3>
            <p className="font-semibold text-gray-700">Rs.1800</p>
          </div>
          <div className="text-center">
            <img 
              src={popularDish2} 
              alt="Popular Dish 2" 
              className="object-cover w-full h-64 mb-4 rounded-md" 
            />
            <h3 className="font-serif text-xl font-semibold">Biryani</h3>
            <p className="font-semibold text-gray-700">Rs.700</p>
          </div>
          <div className="text-center">
            <img 
              src={popularDish3} 
              alt="Popular Dish 3" 
              className="object-cover w-full h-64 mb-4 rounded-md" 
            />
            <h3 className="font-serif text-xl font-semibold">Strawberry Ice Cream</h3>
            <p className="font-semibold text-gray-700">Rs.450</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="mb-8 text-3xl font-semibold text-center">Make a Reservation</h2>
        <Link to="/contact" className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-md hover:bg-green-700">Book Your Table</Link>
      </section>
    </div>
  );
};

export default HomePage;