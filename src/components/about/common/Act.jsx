import React from "react";
import PrimaryHeading from "../../../common/PrimaryHeading";
import PrimaryParagraph from "../../../common/PrimaryParagraph";
import actImage from "../../../assets/images/about/webp/act.webp";
import { RESIDENCE_DATA, VISA_DATA } from "../../../utils/helper";

const Act = ({ sectionData }) => {
  if (!sectionData || !sectionData.length) return null;
  return (
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
                className="lg:mb-4 sm:mb-3 mb-4 max-sm:text-sm leading-5 sm:leading-6"
              />
              {sectionData !== VISA_DATA && (
                <div className="md:max-w-[392px] sm:max-w-[290px] max-w-[261px] w-full lg:h-[457px] h-auto max-sm:h-[305] lg:ml-12 md:hidden my-8 mx-auto">
                  <img
                    src={actImage}
                    alt="act-Image"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              {value.listItems.map((listItem, index) => (
                <PrimaryParagraph
                  key={index}
                  className={`${
                    index !== 0 &&
                    index !== value.listItems.length - 1 &&
                    "sm:my-1 my-2"
                  } after:w-[5px] after:h-[5px] after:!bg-grey after:rounded-full after:absolute after:left-2  ${
                    index === value.listItems.length - 1 &&
                    sectionData === VISA_DATA
                      ? "lg:after:top-1/2 md:after:top-[28%] max-sm:after:top-[35%]"
                      : "after:top-1/2"
                  } after:top-1/2 after:-translate-y-1/2 relative ps-6 max-sm:text-sm leading-5`}
                  text={listItem}
                />
              ))}
              {sectionData !== VISA_DATA && (
                <PrimaryParagraph
                  text={value.about}
                  className="lg:mt-4 mt-3 max-sm:text-sm leading-5 sm:leading-6"
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`lg:col-6 md:col-5 col-12 md:mt-0 mt-14 max-md:flex max-md:justify-center ${
          sectionData === RESIDENCE_DATA && "md:mt-14 !mt-0"
        }`}
      >
        <div className="md:max-w-[392px] sm:max-w-[290px] max-w-[261px] w-full lg:h-[457px] h-auto max-sm:h-[305] lg:ml-12 md:block hidden">
          <img
            src={actImage}
            alt="act-Image"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
        {sectionData !== RESIDENCE_DATA && (
          <div className="md:max-w-[392px] sm:max-w-[290px] max-w-[261px] w-full lg:h-[457px] h-auto max-sm:h-[305] lg:ml-12 md:hidden">
            <img
              src={actImage}
              alt="act-Image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Act;
