"use client";
import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handlePositionChange = (position: number) => {
    setSliderPosition(position);
  };

  return (
    <section className="flex flex-col items-center justify-center px-5 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-6 md:my-10">
        <span className="inline-block align-middle mr-2">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2 md:mb-4 mr-2"
          >
            <path
              d="M9 3.5V2M5.06066 5.06066L4 4M5.06066 13L4 14.0607M13 5.06066L14.0607 4M3.5 9H2M8.5 8.5L12.6111 21.2778L15.5 18.3889L19.1111 22L22 19.1111L18.3889 15.5L21.2778 12.6111L8.5 8.5Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
        Antes e depois: Veja a magia da edição
      </h1>
      <div
        className="relative w-full max-w-xl h-auto"
      >
        <ReactCompareSlider
          position={sliderPosition}
          onPositionChange={handlePositionChange}
          itemOne={<img src={beforeImage} alt="Original" className="w-full h-auto" />}
          itemTwo={<img src={afterImage} alt="Edited" className="w-full h-auto" />}
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                backgroundColor: '#fff',
                border: '1px solid #ddd'
              }}
            />
          }
        />
        {sliderPosition > 2 && (
          <div
            className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-white text-sm md:text-base bg-black bg-opacity-50 px-2 py-1 rounded"
          >
            Antes
          </div>
        )}
        {sliderPosition < 98 && (
          <div
            className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-white text-sm md:text-base bg-black bg-opacity-50 px-2 py-1 rounded"
          >
            Depois
          </div>
        )}
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
