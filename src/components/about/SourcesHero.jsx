import React from "react";
import PrimaryParagraph from "../../common/PrimaryParagraph";
import PrimaryButton from "../../common/PrimaryButton";
import Header from "../../common/Header";

const AboutHero = () => {
  return (
    <div className="relative">
      <Header />
      <div className="pt-[72px] xl:pb-[120px] md:pb-[105px] pb-[95px]">
        <div className="container xl:max-w-[1188px] mx-auto">
          <div className="sm:max-w-[807px] max-w-[532px] w-full mx-auto text-center">
            <h1 className="font-Rubik sm:text-4xl sm:!leading-10 md:text-[42px] lg:text-5xl xl:text-3lg text-[28px] !leading-8 sm:font-semibold font-bold md:!leading-[52px] lg:!leading-[52px] xl:!leading-lg text-dark_black sm:mb-4 mb-[14px]">
              The Foundations of
              <span className="text-orange"> German Immigration </span>
              Expertise
            </h1>
            <PrimaryParagraph
              className="xl:mb-[42px] md:mb-9 mb-8 max-w-[685px] mx-auto sm:leading-6 max-sm:text-sm leading-5"
              text="Herbert, our AI chatbot, is built on a comprehensive understanding of German immigration law. To ensure accuracy and reliability, Herbert's knowledge base is derived from the following authoritative sources:"
            />
            <PrimaryButton BtnText="Contact Us" className="py-3" />
          </div>
        </div>
      </div>
      <div className="bg-sources_hero bg-cover bg-center bg-no-repeat w-full md:h-[773px] h-[700px] absolute top-0 left-1/2 -translate-x-1/2 -z-20 pointer-events-none"></div>
    </div>
  );
};

export default AboutHero;
