import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'
import codePosImg from '../../assets/images/about/png/code-sec-col.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);

const Code = () => {

  useLayoutEffect(() => {
    const cx = gsap.context(() => {
      let cl = gsap.timeline();
      ScrollTrigger.create({
        trigger: ".codeSection",
        start: "-20% 40%",
        end: "bottom 100%",
        animation: cl,
        toggleActions: 'play',
        markers: false,
      });
      cl.from(".crossHeading", {
        scale: 0,
        stagger: 0.5,
      })
    })
    return () => cx.revert();
  }, [])

  return (
    <div className='relative max-w-[1920px] mx-auto lg:py-60 sm:py-20 py-16 codeSection bg-[#FFF8F2]'>
      <div className='lg:absolute relative pointer-events-none xl:max-w-[701px] lg:max-w-[500px] max-w-[490px] xl:h-[602px] max-lg:left-1/2 max-lg:-translate-x-1/2 h-auto left-0 lg:-translate-y-1/2 lg:top-1/2 z-20 pointer-event-none xl:posTeamImg xl:crossHeading'>
        <img src={codePosImg} alt="painting of some people" className='w-full h-full' />
      </div>
      <div className='container max-w-[1180px] flex lg:items-end items-center lg:justify-end justify-center max-lg:pt-14 flex-col relative z-20'>
        <div className='max-w-[473px]'>
          <PrimaryHeading text="Schengen Borders  " className="crossHeading">
            <span className='text-orange font-Rubik'>Code</span>
          </PrimaryHeading>
          <PrimaryParagraph text="As part of the Schengen Area, Germany adheres to this code for border control. Herbert's knowledge of the Schengener Grenzkodex covers:" className="md:max-w-[463px] sm:mt-4 mt-[14px] crossHeading"></PrimaryParagraph>
          <ul style={{ listStyleType: 'unset' }} className='ps-6 pt-4 sourceslistItems crossHeading'>
            <li className='text-grey'>Short-term stay regulations</li>
            <li className='text-grey'>Entry requirements for the Schengen Area</li>
            <li className='text-grey'>Border crossing procedures</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Code