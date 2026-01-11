import React from 'react'
import Image from 'next/image'
import LogosImage from '../../assets/Logos.png'

const HeroLogos: React.FC = () => {
  return (
    <div className="mt-16 w-full flex justify-center overflow-hidden pb-8">
      <style>
        {`
          @keyframes hero-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .hero-scroll {
            animation: hero-scroll 30s linear infinite;
            will-change: transform;
            display: flex;
            width: fit-content;
          }
          .hero-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="relative w-full max-w-[1320px] py-4">
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#281846] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#1e1136] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-full items-center overflow-hidden">
          <div className="hero-scroll">
            <div className="flex-shrink-0 pr-[55px] flex items-center justify-center">
              <Image
                src={LogosImage}
                alt="Partner Logos"
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-shrink-0 pr-[55px] flex items-center justify-center">
              <Image
                src={LogosImage}
                alt="Partner Logos"
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-shrink-0 pr-[55px] flex items-center justify-center">
              <Image
                src={LogosImage}
                alt="Partner Logos"
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLogos
