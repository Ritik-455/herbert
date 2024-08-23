import React from "react";
import PrimaryHeading from "../../../common/PrimaryHeading";
import PrimaryParagraph from "../../../common/PrimaryParagraph";
import actImage from "../../../assets/images/sources/webp/act.webp";
import { VISA_DATA } from "../../../utils/helper";

const Act = ({ sectionData }) => {
  if (!sectionData || !sectionData.length) return null;
  return (
    <div className="xl:pb-[120px] md:pb-[100px] pb-20">
      <div className="container xl:max-w-[1188px] mx-auto">
        <div className="row items-center">
          <div className="lg:col-6 md:col-7 col-12">
            {sectionData.map((value, index) => (
              <div key={index} className="md:max-w-[478px] w-full">
                <PrimaryHeading
                  text={value.titleBlack}
                  className="sm:mb-4 mb-[14px]"
                >
                  <span className="text-orange font-Rubik">
                    &nbsp;{value.titleOrange}
                  </span>
                </PrimaryHeading>
                <div>
                  <PrimaryParagraph
                    text={value.aboutListItems}
                    className="mb-2 font-Lato max-sm:text-sm leading-5 sm:leading-6"
                  />
                  {value.listItems.map((listItem, index) => (
                    <PrimaryParagraph
                      key={index}
                      className={`${
                        index !== 0 && "my-1"
                      } after:w-[5px] after:h-[5px] after:!bg-grey after:rounded-full after:absolute after:left-2 after:top-1/2 after:-translate-y-1/2 relative ps-6 font-Lato max-sm:text-sm leading-5`}
                      text={listItem}
                    />
                  ))}
                  {sectionData !== VISA_DATA && (
                    <PrimaryParagraph
                      text={value.about}
                      className="mt-2 font-Lato max-sm:text-sm leading-5 sm:leading-6"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-6 md:col-5 col-12 md:mt-0 mt-14 max-md:flex max-md:justify-center">
            <div className="md:max-w-[392px] sm:max-w-[290px] max-w-[261px] w-full lg:h-[457px] h-auto max-sm:h-[305] lg:ml-12">
              <img
                src={actImage}
                alt="act-Image"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Act;
