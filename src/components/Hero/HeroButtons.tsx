import React from 'react'

const HeroButtons: React.FC = () => (
  <div className="flex flex-wrap items-center gap-[12px] w-full sm:w-auto">
    <button
      className="flex flex-row justify-center items-center px-[20px] py-[18px] gap-[10px] bg-white text-[#351750] rounded-[118px] font-medium text-[18px] font-['Inter'] shadow-md hover:scale-105 active:scale-95 transition-all duration-300 leading-[12px]"
      style={{ width: '134px', height: '49px' }}
    >
      Contact us
    </button>

    <button
      className="px-[20px] py-[18px] text-white rounded-[100px] font-medium text-[18px] font-['Inter'] hover:bg-white/20 active:scale-95 transition-all duration-300 w-full sm:w-auto leading-[12px]"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0px 4px 29.3px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(255, 255, 255, 0.09)',
        width: '162px',
        height: '49px',
      }}
    >
      View Services
    </button>
  </div>
)

export default HeroButtons
