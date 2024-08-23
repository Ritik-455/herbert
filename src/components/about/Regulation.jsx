import React from 'react'
import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'

export const Regulation = () => {
  return (
    <div className='container max-w-[1536px] py-[120px]'>
      <PrimaryHeading text="Employment" className="text-center" >
        <span className='text-orange font-Rubik'>  Regulation</span>
      </PrimaryHeading>
      <PrimaryParagraph text="This regulation details the conditions under which foreign nationals can work in Germany. Herbert's training in the Beschäftigungsverordnung allows for accurate guidance on:" className="max-w-[716px] text-center mx-auto mt-4" />
      <div className="flex gap-[73px]">
        <div className="max-w-[325px] w-full"></div>
      </div>
    </div>
  )
}
