import footerLogo from '../assets/images/home/webp/footer-logo.png'
import { FOOTER_DATA } from '../utils/helper'
import PrimaryParagraph from './PrimaryParagraph'
const Footer = () => {
  return (
    <div className='bg-[#FFF8F2] lg:pt-20 md:pt-16 pt-11 pb-4 max-w-[1920px] mx-auto'>
      <div className='container max-w-[1180px]'>
        <div className='row lg:justify-between justify-start'>
          <div className='lg:col-4 md:col-6 w-full flex flex-col items-start justify-start px-5'>
            <div className='sm:max-w-[326px] max-w-[210px] sm:h-[98px] h-16 w-full cursor-pointer'>
              <img src={footerLogo} alt="footer logo" className='w-full h-full object-cover pointer-events-none' />
            </div>
            <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor." className="lg:mt-4 mt-3" />
          </div>
          <div className='lg:col-8 w-full flex items-center lg:justify-end justify-start px-5'>
            <div className='row w-full lg:justify-end justify-start'>
              {FOOTER_DATA.map((obj, index) => (
                <div className={`lg:col-3 md:col-4 col-6 lg:mt-0 mt-8`} key={index}>
                  <p className='font-medium mb-4'>{obj.headLink}</p>
                  {obj.links ? (
                    <ul className='gap-2 flex flex-col'>
                      {obj.links.map((val, index) => (
                        <li key={index} className='hover:opacity-50 ease-linear duration-300'>
                          <a href="/" className='font-normal text-grey'>{val}</a>
                        </li>
                      ))}
                    </ul>
                  ) : obj.socialLinks ? (
                    <ul className='flex items-center justify-start gap-3'>
                      {obj.socialLinks.map((val, index) => (
                        <li key={index} className='size-9 bg-orange_gradient rounded-full flex items-center justify-center hover:-translate-y-2 ease-linear duration-300 cursor-pointer'>
                          <a href="/">
                            <img src={val} alt="social links" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-px bg-[#00000029] sm:mt-12 mt-11 mb-4'></div>
      <p className='text-grey font-normal text-center'>Copyright © 2024 herbert, All rights reserved</p>
    </div>
  )
}

export default Footer