import React from 'react'
import HeroBadge from './HeroBadge'
import HeroButtons from './HeroButtons'
import HeroCardGrid from './HeroCardGrid'
import HeroLogos from './HeroLogos'
import cards from './heroData'

const Hero: React.FC = () => (
  <section
    className="relative w-full bg-[#31194D] overflow-hidden rounded-b-[100px]"
    style={{ height: '830px' }}
  >
    <div
      className="absolute pointer-events-none select-none"
      style={{
        width: '1152.33px',
        height: '217.62px',
        left: '-17px',
        top: '-193px',
        background:
          'linear-gradient(90deg, rgba(72, 33, 107, 0.21) 0%, rgba(186, 160, 255, 0.21) 100%)',
        filter: 'blur(50px)',
        transform: 'rotate(33.81deg)',
      }}
    />

    <div
      className="absolute pointer-events-none select-none"
      style={{
        width: '616.39px',
        height: '431.4px',
        right: '108.55px',
        top: '11.78px',
        background: 'rgba(168, 112, 220, 0.7)',
        filter: 'blur(75.9px)',
        transform: 'rotate(-20.03deg)',
        opacity: 0.7,
      }}
    />

    <div className="relative w-full max-w-[1440px] mx-auto h-full">
      <div
        className="absolute flex flex-col items-start z-10"
        style={{
          width: '700px',
          left: '60px',
          top: 'calc(50% - 280px)',
        }}
      >
        <HeroBadge />

        <h1
          className="font-semibold text-white mb-[32px]"
          style={{
            fontFamily: 'Rebond Grotesque, sans-serif',
            fontSize: '52px',
            lineHeight: '60px',
            textShadow: '0px 4px 9.5px rgba(0, 0, 0, 0.37)',
          }}
        >
          Transforming <span style={{ color: '#B6A1FF' }}>educational</span> outcomes for vulnerable
          young communities
        </h1>

        <p
          className="text-white mb-[52px]"
          style={{
            fontFamily: 'Rebond Grotesque, sans-serif',
            fontSize: '18px',
            lineHeight: '26px',
            width: '542px',
          }}
        >
          We design equitable learning solutions that empower every learner to thrive bridging gaps
          in access, opportunity, and achievement across vulnerable communities.
        </p>

        <HeroButtons />
      </div>

      <div
        className="absolute z-10 hidden lg:block"
        style={{
          left: '812px',
          top: '0px',
        }}
      >
        <HeroCardGrid cards={cards} />
      </div>

      <div
        className="absolute w-full"
        style={{
          top: '680px',
          left: '0',
        }}
      >
        <HeroLogos />
      </div>
    </div>
  </section>
)

export default Hero
