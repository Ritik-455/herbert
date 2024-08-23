import React from 'react'
import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'
import { REGULATIONS_DATA } from '../../utils/helper'
import regulationMiddle from '../../assets/images/about/webp/regulation-center-img.webp'

export const Regulation = () => {
  const RegulationData1 = REGULATIONS_DATA.slice(0, 2);
  const RegulationData2 = REGULATIONS_DATA.slice(2, 4);
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className='container max-w-[1536px] py-[120px]'>
        <PrimaryHeading text="Employment" className="text-center" >
          <span className='text-orange font-Rubik'>  Regulation</span>
        </PrimaryHeading>
        <PrimaryParagraph text="This regulation details the conditions under which foreign nationals can work in Germany. Herbert's training in the Beschäftigungsverordnung allows for accurate guidance on:" className="max-w-[716px] text-center mx-auto mt-4" />
        <div className="flex gap-[73px] justify-center mt-14">
          <div className="">
            {RegulationData1.map((data, index) => (
              <div className={`${index === 0 ? "mt-16" : "mt-14"} max-w-[325px] w-full flex flex-col items-end`} key={index}>
                <img src={data.img} alt="count" />
                <p className='font-medium text-xl text-dark_black mt-4'>{data.para}</p>
              </div>
            ))}
          </div>
          <img src={regulationMiddle} alt="regulationMiddle" className='max-w-[259px]' />
          <div className="">
            {RegulationData2.map((data, index) => (
              <div className={`${index === 0 ? "mt-16" : "mt-14"} max-w-[325px] w-full`} key={index}>
                <img src={data.img} alt="count" />
                <p className='font-medium text-xl text-dark_black mt-4'>{data.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
