import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'
import PrimaryButton from '../../common/PrimaryButton'
import teamPosImg from '../../assets/images/home/webp/team-pos-image.png'
import greetingPerson from '../../assets/images/home/webp/greeting-person.png'


const Team = () => {
  return (
    <div className='relative max-w-[1536px] mx-auto lg:mt-36 md:mt-28 mt-20 lg:mb-32 md:mb-28 mb-16 lg:py-36 py-0'>
      <div className='absolute w-[701px] h-[602px] right-0 -translate-y-1/2 top-1/2 z-10 pointer-events-none max-lg:opacity-30 sm:flex hidden'>
        <img src={teamPosImg} alt="painting of some people" className='w-full h-full' />
      </div>
      <div className='container flex items-start justify-start flex-col relative z-20'>
        <PrimaryHeading text="Team " LeadingText=" Resources">
          <span className='text-orange'>&</span>
        </PrimaryHeading>
        <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed. Vulputate eget lectus vitae iaculis rhoncus" className="max-w-[463px] sm:mt-4 mt-[14px]"></PrimaryParagraph>
        <div className='max-w-[261px] min-h-[305px] sm:hidden flex mb-4 mt-8'>
          <img src={greetingPerson} alt="person giving greeting" className='w-full h-full' />
        </div>
        <ul style={{ listStyleType: 'unset' }} className='ps-6 pt-4'>
          <li>Single entrepreneur (yourself)</li>
          <li>Outsourced development to freelancers</li>
          <li>Budget: $15,000</li>
        </ul>
        <PrimaryButton BtnText="Learn more" className="sm:mt-11 mt-8"></PrimaryButton>
      </div>
    </div>
  )
}

export default Team