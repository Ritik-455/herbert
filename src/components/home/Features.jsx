import React from 'react'
import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'

const Features = () => {
  return (
    <div className='container max-w-[1180px] py-[119px]'>
      <PrimaryHeading text="Herbert Main" className="text-center" >
        <span className='text-orange'> Features</span>
      </PrimaryHeading>
      <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed." className="text-center max-w-[556px] mx-auto mt-4" />
    </div>
  )
}

export default Features