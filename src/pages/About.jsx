import React from 'react';

import restaurantImage1 from '../assets/restaurant1.jpg';
import restaurantImage2 from '../assets/restaurant2.jpg';
import familyImage from '../assets/family.jpg';
import coffeeImage from '../assets/coffee.jpg';
import friendimage from '../assets/friends.jpg';
import restaurantImage3 from '../assets/restaurant3.jpg'

const AboutPage = () => {
  return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold text-center">About Us</h1>
      
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>

          <div className="p-6 font-serif bg-white rounded-lg shadow-md">
            
            <p className="mb-4 text-xl text-gray-800">Welcome to MS Restaurant!</p>
            <p className="mb-4 text-lg text-gray-700">
            I'm Malaka Shehan, the founder. Since I was young, I dreamed of starting a restaurant.
            </p>
            <p className="mb-4 text-lg text-gray-700">
            Located in Mathugama, We offer delicious food to both Sri Lankans and foreigners at reasonable prices.
            </p>
            <p className="mb-4 text-lg text-gray-700">
            Our goal is to open branches in Kalutara and Aluthgama in the near future. We strive to reach international standards in the restaurant industry.
            </p>
            <p className="mt-4 text-lg text-gray-700">
          Our restaurant is located in a calm environment where you can chat with your family members and friends very happily. We have three sections for dining, accommodating up to 50 people at one time.
           </p>
          </div>

          

        
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          <img src={restaurantImage1} alt="Restaurant 1" className="object-cover w-full h-64 rounded-md" />
          <img src={restaurantImage2} alt="Restaurant 2" className="object-cover w-full h-64 rounded-md" />
          <img src={restaurantImage3} alt="Restaurant 3" className="object-cover w-full h-64 rounded-md" />
        </div>
      </section>
      

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>

        <div className="p-6 font-serif bg-white rounded-lg shadow-md">
        <p className="mb-4 text-lg text-gray-700">
          At MS Restaurant, our mission is to provide an unforgettable dining experience by offering high-quality food and exceptional service. 
          </p>
          <p className="mb-4 text-lg text-gray-700">
          We aim to create a friendly place where everyone feels welcome and at home. 
          </p>
          <p className='mb-4 text-lg text-gray-700'>
          Our goal is to make every meal a memorable one.
        </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          <img src={familyImage} alt="family" className="object-cover w-full h-64 rounded-md" />
          <img src={coffeeImage} alt="coffee" className="object-cover w-full h-64 rounded-md" />
          <img src={friendimage} alt="friend" className="object-cover w-full h-64 rounded-md" />
        </div>
      </section>
      
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Meet the Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            
            <h3 className="text-xl font-semibold">Sunil Perera</h3>
            <p className="text-gray-700">Head Chef</p>
          </div>
          <div className="text-center">
            
            <h3 className="text-xl font-semibold">Malaka Shehan</h3>
            <p className="text-gray-700">Founder</p>
          </div>
          <div className="text-center">
            
            <h3 className="text-xl font-semibold">Jeewani Saranga</h3>
            <p className="text-gray-700">Restaurant Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;


