import React, { useLayoutEffect } from 'react'
import { VISA_CODE_DATA } from '../../utils/helper'
import PrimaryHeading from '../../common/PrimaryHeading';
import PrimaryParagraph from '../../common/PrimaryParagraph';
import PrimaryButton from '../../common/PrimaryButton'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Visa = () => {
  useLayoutEffect(() => {
    const ls = gsap.context(() => {
      let vl = gsap.timeline();
      ScrollTrigger.create({
        trigger: '.visa',
        start: '10% 40%',
        end: '120% 60%',
        animation: vl,
        markers: false,
        pin: false,
        toggleActions: "play",
      });
      vl.from('.visa_card', {
        opacity: 0,
        stagger: 0.3,
      })
    })
    return () => ls.revert();
  })

  const VisaCodeData1 = VISA_CODE_DATA.slice(0, 1);
  const VisaCodeData2 = VISA_CODE_DATA.slice(1, 3);
  return (
    <div className='bg-visa_code bg-no-repeat bg-center bg-cover max-w-[1920px] mx-auto visa'>
      <div className="container max-w-[1180px] py-16 lg:py-[100px]">
        <div className="row">
          <div className="col-12 md:col-6">
            <div className="row">
              <div className="col-6 flex items-center">
                {VisaCodeData1.map((data, index) => (
                  <div className="max-w-[248px] w-full rounded-xl bg-white flex flex-col items-center py-[18px] sm:py-5 md:py-7 visa_card" key={index}>
                    <img src={data.img} alt="images" />
                    <p className='font-medium text-base sm:text-lg lg:text-xl text-dark_black max-w-[197px] text-center mt-4'>{data.para}</p>
                  </div>
                ))}
              </div>
              <div className="col-6">
                {VisaCodeData2.map((data, index) => (
                  <div className={`${index === 1 && "mt-9"} max-w-[248px] w-full rounded-xl bg-white flex flex-col items-center py-[18px] sm:py-5 md:py-7 visa_card`} key={index}>
                    <img src={data.img} alt="images" />
                    <p className='font-medium text-base sm:text-lg lg:text-xl text-dark_black max-w-[197px] text-center mt-3.5 md:mt-4'>{data.para}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 flex flex-col justify-center md:items-end">
            <div className="mt-14 md:mt-0">
              <PrimaryHeading text="Visa" className="visa_heading">
                <span className='text-orange font-Rubik'> Code</span>
              </PrimaryHeading>
              <PrimaryParagraph text="This code standardizes procedures for short-stay visas in the Schengen Area. Herbert's understanding of the Visa-Kodex ensures accurate information on:" className="max-w-[473px] mt-4" />
              <PrimaryButton BtnText="Learn More" className="mt-8 md:mt-11" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visa;
