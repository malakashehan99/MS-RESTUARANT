import React, { useState } from 'react';
import chickenPizza from '../assets/chicken-pizza.jpg';
import sausagePizza from '../assets/sausage-pizza.jpg';
import cheesePizza from '../assets/cheese-pizza.jpg';
import chickenFriedRice from '../assets/chicken-fried-rice.jpg';
import biryani from '../assets/biryani.jpg';
import riceAndCurry from '../assets/rice-and-curry.jpg';
import veggieBurger from '../assets/veggie-burger.jpg';
import cheeseBurger from '../assets/cheese-burger.jpg';
import chickenBurger from '../assets/chicken-burger.jpg';
import coffee from '../assets/coffee.jpg';
import orangeJuice from '../assets/orange-juice.jpg';
import cappuccino from '../assets/cappuccino.jpg';
import coffeeIceCream from '../assets/coffee-ice-cream.jpg';
import pistachio from '../assets/pistachio.jpg';
import strawberryIceCream from '../assets/strawberry-ice-cream.jpg';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = {
    pizza: [
      { name: 'Chicken Pizza', price: 'Rs.1800', image: chickenPizza },
      { name: 'Sausage Pizza', price: 'Rs.1700', image: sausagePizza },
      { name: 'Cheese Pizza', price: 'Rs.1800', image: cheesePizza },
    ],
    rice: [
      { name: 'Chicken Fried Rice', price: 'Rs.500', image: chickenFriedRice },
      { name: 'Biryani', price: 'Rs.700', image: biryani },
      { name: 'Rice and Curry', price: 'Rs.420', image: riceAndCurry },
    ],
    burger: [
      { name: 'Veggie Burger', price: 'Rs.300', image: veggieBurger },
      { name: 'Cheese Burger', price: 'Rs.500', image: cheeseBurger },
      { name: 'Chicken Burger', price: 'Rs.600', image: chickenBurger },
    ],
    drinks: [
      { name: 'Coffee', price: 'Rs.200', image: coffee },
      { name: 'Orange Juice', price: 'Rs.250', image: orangeJuice },
      { name: 'Cappuccino', price: 'Rs.500', image: cappuccino },
    ],
    iceCream: [
      { name: 'Coffee Ice Cream', price: 'Rs.400', image: coffeeIceCream },
      { name: 'Pistachio', price: 'Rs.500', image: pistachio },
      { name: 'Strawberry Ice Cream', price: 'Rs.450', image: strawberryIceCream },
    ],
  };

  const getAllItems = () => {
    return Object.values(categories).flat();
  };

  const menuItems = selectedCategory === 'all' ? getAllItems() : categories[selectedCategory];

  return (
    <div className="p-4">
      <h1 className="mb-6 text-3xl font-bold text-center">Menu</h1>
      <p className="mb-6 text-lg text-center text-gray-700 animate-pulse">Enjoy our tasty food and drinks. We hope you have a great meal!</p>
      <div className="flex justify-center mb-6">
        {['all', 'pizza', 'rice', 'burger', 'drinks', 'iceCream'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mx-2 text-white ${
              selectedCategory === category ? 'bg-blue-700' : 'bg-gray-500'
            } rounded hover:bg-blue-600`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="p-4 transition-shadow duration-300 bg-gray-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
          >
            <img src={item.image} alt={item.name} className="object-cover w-full h-48 mb-4 rounded-md" />
            <h2 className="mb-2 font-serif text-xl font-semibold">{item.name}</h2>
            <p className="font-semibold text-gray-700">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
