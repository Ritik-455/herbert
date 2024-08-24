import React, { useLayoutEffect } from 'react'
import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'
import { REGULATIONS_DATA } from '../../utils/helper'
import regulationMiddle from '../../assets/images/about/webp/regulation-center-img.webp'
import bottomLayer from '../../assets/images/about/png/regulation-bottom-layer.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Regulation = () => {
  useLayoutEffect(() => {
    const sst = gsap.context(() => {
      let tsg = gsap.timeline();
      ScrollTrigger.create({
        trigger: '.regulation',
        start: '10% 8%',
        end: '120% 60%',
        animation: tsg,
        markers: false,
        toggleActions: "play",
      });
      tsg.from('.centerImg', { opacity: 0, scale: 0 });
      tsg.from('.animation_card', {
        opacity: 0,
        stagger: 0.3
      })
      tsg.from('.animation_card2', {
        opacity: 0,
        stagger: 0.3
      })
    })
    return () => sst.revert();
  })
  const RegulationData1 = REGULATIONS_DATA.slice(0, 2);
  const RegulationData2 = REGULATIONS_DATA.slice(2, 4);
  return (
    <div className="max-w-[1920px] mx-auto relative regulation">
      <div className='container max-w-[1536px] py-20 xl:py-[120px]'>
        <PrimaryHeading text="Employment" className="text-center" >
          <span className='text-orange font-Rubik'> Regulation</span>
        </PrimaryHeading>
        <PrimaryParagraph text="This regulation details the conditions under which foreign nationals can work in Germany. Herbert's training in the Beschäftigungsverordnung allows for accurate guidance on:" className="max-w-[716px] text-center mx-auto mt-3.5 lg:mt-4" />
        <div className="gap-[73px] justify-center mt-14 hidden md:flex">
          <div className="">
            {RegulationData1.map((data, index) => (
              <div className={`${index === 0 ? "mt-16" : "mt-14"} max-w-[325px] w-full flex-col items-end flex animation_card`} key={index}>
                <img src={data.img} alt="count" />
                <p className='font-medium text-xl text-dark_black mt-4 text-end'>{data.para}</p>
              </div>
            ))}
          </div>
          <img src={regulationMiddle} alt="regulationMiddle" className='max-w-[259px] centerImg' />
          <div className="">
            {RegulationData2.map((data, index) => (
              <div className={`${index === 0 ? "mt-16" : "mt-14"} max-w-[325px] w-full animation_card2`} key={index}>
                <img src={data.img} alt="count" />
                <p className='font-medium text-xl text-dark_black mt-4'>{data.para}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6"><img src={regulationMiddle} alt="regulationMiddle" className='max-w-[259px] md:hidden centerImg' /></div>
        <div className="flex justify-between sm:justify-center">
          <div className="md:hidden">
            {RegulationData1.map((data, index) => (
              <div className={`${index === 0 ? "mt-16" : "mt-14"} max-w-[151px] w-full`} key={index}>
                <img src={data.img} alt="count" />
                <p className='font-medium text-md text-dark_black mt-4'>{data.para}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden">
            {RegulationData2.map((data, index) => (
              <div className={`${index === 0 ? "mt-16" : "mt-14"} max-w-[151px] w-full`} key={index}>
                <img src={data.img} alt="count" />
                <p className='font-medium text-md text-dark_black mt-4'>{data.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12 %] md:-bottom-6 2xl:right-[7%]"><img src={bottomLayer} alt="bottomLayer" className='w-full' /></div>
    </div>
  )
}
