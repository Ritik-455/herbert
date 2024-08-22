import React from "react";
import Header from "../../common/Header";
import PrimaryParagraph from "../../common/PrimaryParagraph";
import PrimaryButton from "../../common/PrimaryButton";

const HerbertHero = () => {
  return (
    <div className="bg-url['../../assets/images/home/webp/Hero-bg-img.webp']">
      <Header />
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
  );
};

export default HerbertHero;
