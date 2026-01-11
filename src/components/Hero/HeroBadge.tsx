import React from 'react'
import Image from 'next/image'
import OUKGImage from '../../assets/oukg.png'

const HeroBadge: React.FC = () => (
  <div
    className="inline-flex items-center gap-2 px-[14px] py-[8px] mb-[40px] rounded-[100px]"
    style={{
      background: 'rgba(255, 255, 255, 0.1)',
      boxShadow: '0px 4px 29.3px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(255, 255, 255, 0.09)',
    }}
  >
    <div className="relative flex items-center justify-center w-[34px] h-[34px] bg-[#351750] rounded-full overflow-hidden flex-shrink-0 border border-white/20">
      <Image src={OUKGImage} alt="Official UK Government Partner" fill className="object-cover" />
    </div>

    <span
      className="text-[16px] font-medium text-white tracking-wide"
      style={{ fontFamily: 'Rebond Grotesque, sans-serif' }}
    >
      Official UK Government Partner
    </span>
  </div>
)

export default HeroBadge
