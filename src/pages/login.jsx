import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const options = [
  {
    title: "Get our trusted Points® program",
    image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3Jhd3BpeGVsX29mZmljZV8zN19zaW5nbGVfd2hpdGVfY2hvb2tfaGVuX2lzb2xhdGVkX29uX3doaXRlX2JhY19lMDAyMDRiZi0wNmIwLTQxZDUtYjQ1MS1iZGY1OTIyNjJhNTcucG5n.png",
  },
  {
    title: "NEW! Access weight-loss meds",
    image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3Jhd3BpeGVsX29mZmljZV8zN19zaW5nbGVfd2hpdGVfY2hvb2tfaGVuX2lzb2xhdGVkX29uX3doaXRlX2JhY19lMDAyMDRiZi0wNmIwLTQxZDUtYjQ1MS1iZGY1OTIyNjJhNTcucG5n.png",
  },
  {
    title: "NEW! Personalized meal planning with a Dietitian",
    image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3Jhd3BpeGVsX29mZmljZV8zN19zaW5nbGVfd2hpdGVfY2hvb2tfaGVuX2lzb2xhdGVkX29uX3doaXRlX2JhY19lMDAyMDRiZi0wNmIwLTQxZDUtYjQ1MS1iZGY1OTIyNjJhNTcucG5n.png",
  },
  {
    title: "Coach-led Workshops with other members",
    image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3Jhd3BpeGVsX29mZmljZV8zN19zaW5nbGVfd2hpdGVfY2hvb2tfaGVuX2lzb2xhdGVkX29uX3doaXRlX2JhY19lMDAyMDRiZi0wNmIwLTQxZDUtYjQ1MS1iZGY1OTIyNjJhNTcucG5n.png",
  },
];

const slides = [
  {
    heading: "Transform Your Health Journey",
    image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    alt: "Slide 1",
  },
  {
    heading: "Achieve Real Results",
    image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg",
    alt: "Slide 2",
  },
  {
    heading: "Your Wellness, Delivered",
    image: "https://t3.ftcdn.net/jpg/09/66/25/08/360_F_966250839_jBhNnhyGs4wbtxXeBEsgFGu4dxhCrdjn.jpg",
    alt: "Slide 3",
  },
];

export default function WeightLossSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-indigo-900 mb-2">
        Weight loss. <span className="text-indigo-600">Health gains.</span>
      </h2>
      <p className="text-xl text-gray-700 mb-10">
        Choose the path that <span className="font-semibold">fits you</span>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-[#fcf7f2] rounded-3xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-gray-900 w-3/4">
                {option.title}
              </h3>
              <div className="bg-indigo-600 text-white p-2 rounded-full">
                <FaArrowRight size={14} />
              </div>
            </div>
            <div className="mt-6 w-full h-40 flex justify-center items-center">
              <img
                src={option.image}
                alt={option.title}
                className="h-48 w-full object-contain"
            />
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-indigo-800 mb-8">
  How It Works
</h1>
{/* New Section with Text and Slideshow */}
<div className="bg-indigo-700 rounded-xl px-10 py-6 mt-10 flex flex-col gap-10 items-center">
  {/* Container for the 4 items */}
  <div className="flex w-full items-center justify-between gap-4">
    
    {/* Left Arrow */}
    <button
      onClick={handlePrev}
      className="text-white p-3 hover:bg-white/10 rounded-full"
    >
      <FaArrowLeft size={24} />
    </button>

    {/* Text Content */}
    <div className="w-1/3 text-left">
      <p className="text-white text-lg mb-4">
        Start your journey by completing a brief questionnaire. This helps us provide the best care tailored to you.
      </p>
      <ul className="list-disc list-inside text-white/90">
        <li>Create a profile with your name, contact information, and address.</li>
        <li>Complete a short health questionnaire.</li>
        <li>Select a payment option and complete payment.</li>
      </ul>
    </div>

    {/* Slide Content */}
    <div className="w-1/3 text-center text-white">
      <p className="text-2xl font-extrabold mb-4">
        {slides[currentSlide].heading}
      </p>
      <div className="w-full h-64 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Right Arrow */}
    <button
      onClick={handleNext}
      className="text-white p-3 hover:bg-white/10 rounded-full"
    >
      <FaArrowRight size={24} />
    </button>
  </div>

  {/* Centered Sign Up Button */}
  <div className="mt-8">
    <button className="px-30 py-6 bg-white text-indigo-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
      Sign Up
    </button>
  </div>
</div>

      

      </div>
   
    
  );
}