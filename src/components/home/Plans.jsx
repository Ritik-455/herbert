import React from 'react'
import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'
import { PLANS_DATA } from '../../utils/helper'
import { TickMarck } from '../../common/Icon'
import PrimaryButton from '../../common/PrimaryButton'

const Plans = () => {
  return (
    <div className='bg-plans bg-cover bg-no-repeat bg-center'>
      <div className="container max-w-[1180px] py-20">
        <PrimaryHeading text="Friendly Pricing" className="text-center" >
          <span className='text-orange font-'> Plans</span>
        </PrimaryHeading>
        <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed." className="text-center max-w-[556px] mx-auto mt-4" />
        <div className="flex justify-between mt-14 flex-wrap">
          {PLANS_DATA.map((data, index) => (
            <div className={`${index === 2 ? "gap-0" : "gap-[52px]"} flex`} key={index}>
              <div className="max-w-[306px] w-full">
                <div className="flex justify-between items-center w-[306px] ">
                  <h4 className='font-Rubik font-semibold text-2lg'>{data.heading}</h4>
                  <div className={`${index === 0 && "bg-dark_black"} ${index === 1 && "bg-yellow"} ${index === 2 && "bg-orange"} p-[5px_8px] rounded-[6px]`}>
                    <p className={`${index === 1 ? "text-black" : "text-white"} font-normal text-base`}>{data.plan}</p>
                  </div>
                </div>
                <p className='font-normal text-base text-grey mt-2'>{data.para}</p>
                <p className='font-bold text-base text-dark_black mt-6'>What’s included?</p>
                <div className="flex mt-6 gap-1 items-center">
                  <TickMarck />
                  <p className='font-normal text-base text-grey'>{data.message}</p>
                </div>
                <PrimaryButton BtnText={data.upgrade} className='max-w-[308px] w-full mt-8' />
              </div>
              <div className={`${index === 2 ? "border-0" : "border-r  border-r-[#00000029]"}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Plans