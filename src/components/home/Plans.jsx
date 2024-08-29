import React, { useLayoutEffect } from 'react'
import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'
import { PLANS_DATA } from '../../utils/helper'
import { TickMarck } from '../../common/Icon'
import PrimaryButton from '../../common/PrimaryButton'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
  useLayoutEffect(() => {
    const tx = gsap.context(() => {
      let cardAnimation = gsap.timeline();
      ScrollTrigger.create({
        trigger: '.card',
        start: '10% 25%',
        end: '30% 55%',
        animation: cardAnimation,
        markers: false,
        toggleActions: "play",
      });
      cardAnimation.from('.card_anim', {
        x: -1440,
        stagger: 0.3,
      });
    });
    return () => tx.revert();
  }, []);
  return (
    <div className='bg-plans bg-cover bg-no-repeat bg-center card max-w-[1920px] overflow-hidden mx-auto'>
      <div className="container max-w-[1180px] py-16 lg:py-20">
        <PrimaryHeading text="Friendly Pricing" className="text-center" >
          <span className='text-orange font-Rubik'> Plans</span>
        </PrimaryHeading>
        <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed." className="text-center max-w-[556px] mx-auto mt-4" />
        <div className="flex flex-col md:flex-row justify-around custom_lg:justify-between lg:mt-14 flex-wrap items-center md:items-start">
          {PLANS_DATA.map((data, index) => (
            <div className={`${index === 2 ? "gap-0 mt-8 custom_lg:mt-0" : "gap-[29px] lg:gap-[52px]"} md:flex mt-8 custom_lg:mt-0 card_anim`} key={index}>
              <div className="max-w-[306px] w-full">
                <div className="flex justify-between items-center w-[306px] ">
                  <h4 className='font-Rubik font-semibold text-2xl md:text-3xl custom_lg:text-custom_2lg'>{data.heading}</h4>
                  <div className={`${index === 0 && "bg-dark_black"} ${index === 1 && "bg-yellow"} ${index === 2 && "bg-orange"} p-[5px_8px] rounded-[6px]`}>
                    <p className={`${index === 1 ? "text-black" : "text-white"} font-normal text-xs md:text-base`}>{data.plan}</p>
                  </div>
                </div>
                <p className='font-normal text-sm md:text-base text-grey mt-4'>{data.para}</p>
                <p className='font-bold text-base text-dark_black mt-8 md:mt-6'>What’s included?</p>
                <div className="flex mt-6 gap-1 items-center">
                  <TickMarck />
                  <p className='font-normal text-base text-grey'>{data.message}</p>
                </div>
                <PrimaryButton BtnText={data.upgrade} className='w-full mt-8' />
              </div>
              <div className={`${index === 2 ? "border-0" : "border-b md:border-r border-b-[#00000029] md:border-r-[#00000029] mt-8 lg:mt-0"}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Plans