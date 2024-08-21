import footerLogo from '../assets/images/home/webp/footer-logo.png'
import PrimaryParagraph from './PrimaryParagraph'
const Footer = () => {
  return (
    <div className='bg-[#FFF8F2] pt-20 pb-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-4 flex flex-col items-start justify-start'>
            <div className='max-w-[326px] h-[98px] w-full'>
              <img src={footerLogo} alt="footer logo" className='w-full h-full object-cover' />
            </div>
            <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor." className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer