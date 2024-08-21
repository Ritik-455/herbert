import React from 'react'
import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'

const Plans = () => {
  return (
    <div className='bg-plans bg-cover bg-no-repeat bg-center'>
      <div className="container py-20">
        <PrimaryHeading text="Friendly Pricing" className="text-center" >
          <span className='text-orange'> Plans</span>
        </PrimaryHeading>
        <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed." className="text-center max-w-[556px] mx-auto mt-4" />
      </div>
    </div>
  )
}

export default Plans