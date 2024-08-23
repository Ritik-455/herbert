import React, { useLayoutEffect } from 'react';
import PrimaryHeading from '../../common/PrimaryHeading';
import PrimaryParagraph from '../../common/PrimaryParagraph';
import { FEATURES_DATA } from '../../utils/helper';
import middleMen from '../../assets/images/home/webp/feature-center-img.webp';
import bottomLayer from '../../assets/images/home/png/features-bottom-layer.png';
import topLayer from '../../assets/images/home/png/features-top-ellips.png'
import leftLayer from '../../assets/images/home/png/left-ellips.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let imageAnimation = gsap.timeline();
      ScrollTrigger.create({
        trigger: '.main',
        start: '10% 8%',
        end: '80% 44%',
        animation: imageAnimation,
        markers: false,
        pin: true,
        scrub: 5,
      });
      imageAnimation.from('.middleImg', { opacity: 0, scale: 0 });
      imageAnimation.from(".card_animation", {
        x: -1000,
      })
      imageAnimation.from(".card_animation2", {
        x: 1000,
      })

    });
    return () => ctx.revert();
  }, []);
  const limitedFeatures = FEATURES_DATA.slice(0, 3);
  const limitedFeatures2 = FEATURES_DATA.slice(3, 6);

  return (
    <div className="2xl:max-w-[1536px] mx-auto relative overflow-hidden  main">
      <div className='container max-w-[1180px] py-20 xl:pb-0 xl:pt-[119px] xl:mb-[119px]'>
        <PrimaryHeading text="Herbert Main" className="text-center">
          <span className='text-orange font-Rubik'> Features</span>
        </PrimaryHeading>
        <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed." className="text-center max-w-[556px] mx-auto mt-4" />
        <div className="hidden lg:flex justify-between flex-wrap lg:flex-nowrap">
          <div className="">
            {limitedFeatures.map((data, index) => (
              <div className="max-w-[325px] w-full mt-14 card_animation" key={index}>
                <div className="flex justify-end"><img src={data.img} alt="numbers" /></div>
                <p className='font-medium text-xl text-dark_black mt-4 text-end'>{data.para}</p>
              </div>
            ))}
          </div>
          <img src={middleMen} alt="middleMen" className='max-w-[324px] w-100 h-[452px] mt-14 pointer-events-none middleImg' />
          <div className="">
            {limitedFeatures2.map((data, index) => (
              <div className="max-w-[325px] w-full mt-14 card_animation2" key={index}>
                <div className="flex"><img src={data.img} alt="numbers" /></div>
                <p className='font-medium text-xl text-dark_black mt-4'>{data.para}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="lg:hidden flex justify-center"><img src={middleMen} alt="middleMen" className='max-w-[324px] w-100 h-[452px] mt-6 pointer-events-none middleImg' /></div>
          <div className="flex lg:hidden justify-between">
            <div className="">
              {limitedFeatures.map((data, index) => (
                <div className="max-w-[391px] w-full mt-10 card_animation" key={index}>
                  <div className="flex"><img src={data.img} alt="numbers" /></div>
                  <p className='font-medium text-base md:text-xl text-dark_black mt-4'>{data.para}</p>
                </div>
              ))}
            </div>
            <div className="">
              {limitedFeatures2.map((data, index) => (
                <div className="max-w-[391px] w-full mt-10 card_animation2" key={index}>
                  <div className="flex"><img src={data.img} alt="numbers" /></div>
                  <p className='font-medium text-base md:text-xl text-dark_black mt-4'>{data.para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute left-0 2xl:left-[14%] bottom-[-17%] z-[-1]"><img src={bottomLayer} alt="bottomLayer" className='w-full' /></div>
      </div>
      <div className="hidden lg:block absolute right-0 top-[8%] z-[-1]"><img src={topLayer} alt="topLayer" /></div>
      <div className="hidden lg:block absolute left-[-1%] top-[25%] z-[-1]"><img src={leftLayer} alt="leftLayer" /></div>
    </div>
  );
}

export default Features;
