import React from 'react'
import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'
import PrimaryButton from '../../common/PrimaryButton'

const Faq = () => {
  return (
    <div className='container'>
      <PrimaryHeading text="Frequently Asked " className="text-center">
        <span className='text-orange'>Questions</span>
      </PrimaryHeading>
      <div className='flex items-center justify-center'>
        <PrimaryParagraph text="Help users find quick answers to common queries about Herbert, our AI-powered assistant for German visa and immigration processes. " className="text-center max-w-[622px] sm:mt-4 mt-[14px] sm:mb-16 mb-8" />
      </div>
      <div className='flex items-center justify-center'>
        <PrimaryButton BtnText="View All" className="mt-12" />
      </div>
    </div>
  )
}

export default Faq