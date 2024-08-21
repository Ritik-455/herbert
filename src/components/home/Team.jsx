import React from 'react'
import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'
import PrimaryButton from '../../common/PrimaryButton'


const Team = () => {
  return (
    <div className='relative'>
      <div className='container flex items-start justify-start flex-col'>
        <PrimaryHeading text="Team " LeadingText=" Resources">
          <span className='text-orange'>&</span>
        </PrimaryHeading>
        <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed. Vulputate eget lectus vitae iaculis rhoncus" className="max-w-[473px] mt-4"></PrimaryParagraph>
        <ul style={{ listStyleType: 'unset' }} className='ps-6 pt-4'>
          <li>Single entrepreneur (yourself)</li>
          <li>Outsourced development to freelancers</li>
          <li>Budget: $15,000</li>
        </ul>
        <PrimaryButton BtnText="Learn more" className="mt-11"></PrimaryButton>
      </div>
    </div>
  )
}

export default Team