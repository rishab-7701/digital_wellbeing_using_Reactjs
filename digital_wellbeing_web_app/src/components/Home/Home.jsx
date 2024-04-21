// HomePage.js
import React from 'react';
// import backgroundImage from './images/background.jpg';

function HomePage() {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-indigo-600 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Welcome to Digital Wellbeing</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          In today's digital age, it's easy to get overwhelmed by the constant stream of notifications, emails, and social media updates. 
          Digital wellbeing is about maintaining a healthy balance between technology and life, so you can use digital tools mindfully 
          and purposefully.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Why Digital Wellbeing Matters</h2>
          <ul className="text-lg text-gray-600">
            <li className="mb-2">
              <span className="font-bold">Improved Focus:</span> By minimizing distractions and setting boundaries, you can improve your 
              concentration and productivity.
            </li>
            <li className="mb-2">
              <span className="font-bold">Better Sleep:</span> Limiting screen time before bed can help you sleep better and wake up feeling 
              refreshed.
            </li>
            <li className="mb-2">
              <span className="font-bold">Reduced Stress:</span> Taking regular breaks from technology can lower stress levels and improve 
              overall well-being.
            </li>
            <li className="mb-2">
              <span className="font-bold">Healthier Relationships:</span> By being present in the moment and engaging in face-to-face 
              interactions, you can strengthen your relationships with others.
            </li>
          </ul>
        </div>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Our digital wellbeing web application is designed to help you take control of your digital habits and make healthier choices 
          online. Sign up now to get started on your journey to a more balanced digital life.
        </p>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
