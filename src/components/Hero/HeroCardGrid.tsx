import React from 'react'
import Image, { StaticImageData } from 'next/image'

export interface ServiceCard {
  id: number
  label: string
  image: string | StaticImageData
  bgColor?: string
  className?: string
}

interface HeroCardGridProps {
  cards: ServiceCard[]
}

const CARD_STYLES = [
  {
    background: 'linear-gradient(180deg, #CFE0FF 0%, #C6DBFF 100%)',
    border: '0.765px solid #E1DDFF',
    pillGradient: 'linear-gradient(270deg, #B7D1FF 50%, #C9B4FF 100%)',
  },
  {
    background: 'linear-gradient(180deg, #A3F1FF 0%, #81ECFF 100%)',
    border: '0.765px solid #E1DDFF',
    pillGradient: 'linear-gradient(270deg, #5BE9FF 50%, #00DBFF 100%)',
  },
  {
    background: 'linear-gradient(180deg, #EFD7FF 0%, #ECCFFF 100%)',
    border: '0.764px solid #E1DDFF',
    pillGradient: 'linear-gradient(270deg, #E6BFFF 50%, #DCA6FF 100%)',
  },
  {
    background: 'linear-gradient(180deg, #FFE8C2 0%, #FFDFA6 100%)',
    border: '0.758px solid #E1DDFF',
    pillGradient: 'linear-gradient(270deg, #FFB040 50%, #FF9500 100%)',
  },
]

const HeroCardGrid: React.FC<HeroCardGridProps> = ({ cards }) => {
  const leftColumnCards = cards.filter((_, i) => i % 2 === 0)
  const rightColumnCards = cards.filter((_, i) => i % 2 !== 0)

  const renderColumn = (columnCards: ServiceCard[], offsetIndex: number) => (
    <>
      {columnCards.map((card, i) => {
        const styleIndex = i * 2 + offsetIndex
        const style = CARD_STYLES[styleIndex % 4]

        return (
          <div
            key={`${card.id}-${i}`}
            className="relative flex-none group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            style={{
              width: '243px',
              height: '284px',
              background: style.background,
              border: style.border,
              borderRadius: '12px',
              boxSizing: 'border-box',
            }}
          >
            <div
              className="absolute overflow-hidden"
              style={{
                width: '225px',
                height: '190px',
                left: '9px',
                top: '9px',
                borderRadius: '9px',
              }}
            >
              <Image
                src={card.image}
                alt={card.label}
                fill
                className="object-cover"
                sizes="225px"
              />
            </div>

            <div
              className="absolute flex flex-col items-start gap-[7px]"
              style={{
                left: '9px',
                top: '215px',
                width: '225px',
              }}
            >
              <span className="font-semibold text-[16px] text-[#06040F] leading-[18px]">
                {card.label}
              </span>

              <div className="flex items-center gap-2 mt-1">
                <div
                  style={{
                    width: '130px',
                    height: '10px',
                    borderRadius: '15px',
                    background: style.pillGradient,
                  }}
                />
                <div
                  style={{
                    width: '80px',
                    height: '10px',
                    borderRadius: '15px',
                    background: style.pillGradient,
                    opacity: 0.6,
                  }}
                />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )

  return (
    <div
      className="hidden md:block relative"
      style={{
        width: '500px',
        height: '685px',
        left: '0px',
        overflow: 'hidden',
      }}
    >
      <div
        className="absolute flex flex-col gap-[14px]"
        style={{ left: '0px', top: '37px', width: '243px' }}
      >
        {renderColumn(leftColumnCards, 0)}
      </div>

      <div
        className="absolute flex flex-col gap-[14px]"
        style={{ left: '0px', top: '633px', width: '243px' }}
      >
        {renderColumn(leftColumnCards, 0)}
      </div>

      <div
        className="absolute flex flex-col gap-[14px]"
        style={{ left: '257px', top: '100px', width: '243px' }}
      >
        {renderColumn(rightColumnCards, 1)}
      </div>

      <div
        className="absolute flex flex-col gap-[14px]"
        style={{ left: '257px', top: '-496px', width: '243px' }}
      >
        {renderColumn(rightColumnCards, 1)}
      </div>
    </div>
  )
}

export default HeroCardGrid
