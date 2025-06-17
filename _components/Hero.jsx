"use client";
import { useState, useEffect } from "react";
export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images - these can be replaced from the dashboard later
  const images = [
    "https://pbs.twimg.com/media/GPSC_rJXgAAJVeo?format=jpg&name=small",
    "https://pbs.twimg.com/media/GC5ryNTXIAAqjZf?format=jpg&name=small",
    "https://pbs.twimg.com/media/FVrjqdOUcAEyK-s?format=jpg&name=360x360",
    "https://pbs.twimg.com/media/FVrjq5CUcAA0B8T?format=jpg&name=360x360",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}>
            <img
              src={image}
              alt={`Food service event ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Anandbhoj
        </h1>
        <p className="text-xl md:text-2xl mb-4 animate-fade-in">
          Serving Free Food to the Needy
        </p>
        <p className="text-lg md:text-xl mb-8 animate-fade-in">
          Every Tuesday in Jamshedpur - Spreading Joy Through Food
        </p>
        <div className="space-x-4">
          <a
            href="#about"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Learn More
          </a>
          <a
            href="/donate"
            className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
            Donate Now
          </a>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
