import React, { useLayoutEffect, useState } from 'react';
import PrimaryHeading from '../../common/PrimaryHeading';
import PrimaryParagraph from '../../common/PrimaryParagraph';
import PrimaryButton from '../../common/PrimaryButton';
import { FAQ_CONTENT } from '../../utils/helper';
import plusSign from '../../assets/images/home/svg/plus-sign.svg';
import minusSign from '../../assets/images/home/svg/minus-sign.svg';
import faqBackgroundVector from '../../assets/images/home/png/faq-background-vectoe.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Faq = () => {

  useLayoutEffect(() => {
    const aot = gsap.context(() => {
      let tl = gsap.timeline();
      ScrollTrigger.create({
        trigger: ".faq_animation",
        start: "top 10%",
        end: "bottom 40%",
        animation: tl,
        markers: false,
        pin: true,
        scrub: 5,
      });
      tl.from(".heading_text", {
        x: -1440,
      })
      tl.from(".accord_items", {
        x: -1440,
      })
    });
    return () => aot.revert();
  }, [])

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className='relative'>
      <div className='absolute -bottom-[40%] left-0'>
        <img src={faqBackgroundVector} alt="faq background vector" className='w-full h-full' />
      </div>
      <div className='container max-w-[1188px] faq_animation max-lg:mt-20 max-sm:mt-0'>
        <PrimaryHeading text="Frequently Asked " className="text-center heading_text">
          <span className='text-orange'>Questions</span>
        </PrimaryHeading>
        <div className='flex items-center justify-center'>
          <PrimaryParagraph text="Help users find quick answers to common queries about Herbert, our AI-powered assistant for German visa and immigration processes. " className="text-center max-w-[622px] sm:mt-4 mt-[14px] sm:mb-16 mb-8" />
        </div>
        <div className='row flex-wrap'>
          {FAQ_CONTENT.map((obj, index) => (
            <div className='lg:col-6 px-5 w-full sm:mb-6 mb-4 accord_items' key={index}>
              <div
                className={`max-lg:h-full rounded-md transition-all duration-300 ease-in-out ${activeIndex === index ? 'shadow-accordionShadow' : 'border border-[#00000029]'
                  }`}
              >
                <div
                  className={`flex justify-between items-center sm:px-6 px-[14px] sm:pt-[18px] pt-[14px] gap-3 cursor-pointer ${activeIndex === index ? 'pb-3' : 'pb-[18px]'
                    }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <p className='max-sm:text-sm'>{obj.mainText}</p>
                  <img
                    src={activeIndex === index ? minusSign : plusSign}
                    alt="accordion icon"
                    className="transition-transform duration-300 ease-in-out"
                    style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </div>
                <div
                  className='sm:px-6 px-[14px] overflow-hidden transition-all duration-300 ease-in-out'
                  style={{
                    maxHeight: activeIndex === index ? '1000px' : '0',
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                >
                  <p className='text-grey max-sm:text-sm pb-[18px]'>{obj.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <PrimaryButton BtnText="View All" className="sm:mt-12 mt-8" />
        </div>
      </div>
    </div>
  );
};

export default Faq;