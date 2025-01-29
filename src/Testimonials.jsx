'use client';

import React, { useState } from 'react';

const testimonials = [
  { id: 1, text: 'Testimonial 1', author: 'Author 1' },
  { id: 2, text: 'Testimonial 2', author: 'Author 2' },
  { id: 3, text: 'Testimonial 3', author: 'Author 3' },
  { id: 4, text: 'Testimonial 4', author: 'Author 4' },
  { id: 5, text: 'Testimonial 5', author: 'Author 5' },
  { id: 6, text: 'Testimonial 6', author: 'Author 6' },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3; // Cards to show initially
  const maxIndex = testimonials.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6">
      {/* Buttons */}
      <div className="absolute top-0 right-0 flex space-x-2">
        <button
          onClick={prevSlide}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          disabled={currentIndex === 0}
        >
          Back
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          disabled={currentIndex === maxIndex}
        >
          Next
        </button>
      </div>

      {/* Testimonials */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[calc(100%/3)] md:min-w-[calc(100%/2)] px-4"
            >
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <h4 className="text-gray-900 font-bold mt-2">
                  - {testimonial.author}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
