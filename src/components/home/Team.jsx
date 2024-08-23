import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryParagraph from '../../common/PrimaryParagraph'
import PrimaryButton from '../../common/PrimaryButton'
import teamPosImg from '../../assets/images/home/webp/team-pos-image.png'
import greetingPerson from '../../assets/images/home/webp/greeting-person.png'
import teamTopRightVector from '../../assets/images/home/png/team-top-right-vector.png'
import teamBottomLeftVector from '../../assets/images/home/png/bottom-left-vector.png'
import leftTeamVector from '../../assets/images/home/png/team-sec-left-vector.png'


const Team = () => {
  return (
    <div className='relative max-w-[1536px] mx-auto lg:mt-36 md:mt-28 mt-20 sm:mb-8 lg:pt-36 xl:pb-60 md:pb-36 max-sm:mb-20 py-0'>
      <div className='absolute opacity-10 lg:-top-36 md:-top-28 -top-20 right-0 z-0 max-sm:max-w-[150px] lg:max-w-[630px] max-sm:h-[470px] sm:max-w-[400px]'>
        <img src={teamTopRightVector} alt="top right vector" className='w-full h-full' />
      </div>
      <div className='absolute opacity-10 z-10 lg:max-w-[630px] md:max-w-[400px] max-w-[150px] md:h-[570px] h-[470px] bottom-0 left-0'>
        <img src={teamBottomLeftVector} alt="bottom left vector" className='w-full h-full' />
      </div>
      <div className='absolute opacity-100 lg:max-w-[630px] md:max-w-[400px] max-w-[150px] md:h-[570px] h-[470px] -top-12 -left-16 2xl:hidden'>
        <img src={leftTeamVector} alt="bottom left vector" className='w-full h-full' />
      </div>
      <div className='absolute lg:max-w-[701px] md:max-w-[630px] max-w-[500px] lg:h-[602px] h-auto right-0 -translate-y-1/2 top-1/2 z-20 pointer-events-none max-lg:opacity-30 sm:flex hidden'>
        <img src={teamPosImg} alt="painting of some people" className='w-full h-full' />
      </div>
      <div className='container max-w-[1180px] flex items-start justify-start flex-col relative z-20'>
        <PrimaryHeading text="Team " LeadingText=" Resources">
          <span className='text-orange'>&</span>
        </PrimaryHeading>
        <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed. Vulputate eget lectus vitae iaculis rhoncus" className="md:max-w-[463px] sm:mt-4 mt-[14px]"></PrimaryParagraph>
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