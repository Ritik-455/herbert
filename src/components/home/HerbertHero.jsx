import React from "react";
import Header from "../../common/Header";
import PrimaryParagraph from "../../common/PrimaryParagraph";
import PrimaryButton from "../../common/PrimaryButton";
import helloLeftBoy from "../../assets/images/home/webp/hero-hello-boy.webp";
import helloRightBoy from "../../assets/images/home/webp/hero-right-hello.webp";

const HerbertHero = () => {
  return (
    <div className="bg-heroBgImg bg-full relative">
      <Header />
      <div className="absolute top-[24%] left-[4%]">
        <img src={helloLeftBoy} alt="helloLeftBoy" width={329} />
      </div>
      <div className="absolute end-0 top-[32%] right-[5%]">
        <img src={helloRightBoy} alt="helloRightBoy" width={324} />
      </div>
      <div className="pt-[139px] pb-[198px]">
        <div className="container">
          <div className="mx-auto text-center">
            <h1 className="font-Rubik text-3lg font-semibold leading-lg text-dark_black max-w-[716px] text-center pb-4 mx-auto">
              Navigating <span className="text-orange">German Bureaucracy</span>{" "}
              with ease
            </h1>
            <PrimaryParagraph
              className="pb-10"
              text="Herbert Visa: Your AI-powered assistant for German visa and
                immigration processes"
            />
            <PrimaryButton BtnText="Start your conversation with Herbert" />
          </div>
        </div>
      </div>
      {/* ===cards=== */}
       
    </div>
  );
};

export default HerbertHero;
