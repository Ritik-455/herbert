import React, { useEffect, useLayoutEffect } from "react";
import Header from "../../common/Header";
import PrimaryParagraph from "../../common/PrimaryParagraph";
import PrimaryButton from "../../common/PrimaryButton";
import helloLeftBoy from "../../assets/images/home/webp/hero-hello-boy.webp";
import helloRightBoy from "../../assets/images/home/webp/hero-right-hello.webp";
import { CARD_DATA } from "../../utils/helper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HerbertHero = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".heroMainText",
      {
        scale: 0,
      },
      {
        scale: 1,
        delay: 2,
        duration: 1,
        stagger: 0.5,
      }
    );
  });

  useLayoutEffect(() => {
    const hx = gsap.context(() => {
      let hl = gsap.timeline();
      ScrollTrigger.create({
        trigger: ".heroCardSection",
        start: "top 90%",
        end: "bottom 100%",
        markers: false,
      });
      hl.from(".heroCardAnimation", {
        scale: 0,
        stagger: 0.5,
        delay: 2,
      });
    });
    return () => hx.revert();
  }, []);

  return (
    <div className="bg-heroBgImg bg-full relative max-w-[1920px] mx-auto">
      <Header />
      <div className="absolute lg:top-[16%] top-[10%] left-[7%] max-sm:hidden xl:opacity-100 sm:opacity-15 heroMainText">
        <img src={helloLeftBoy} alt="helloLeftBoy" width={329} />
      </div>
      <div className="absolute max-sm:hidden end-0 lg:top-[23%] top-[13%] right-[3%] xl:opacity-100 heroMainText sm:opacity-15">
        <img src={helloRightBoy} alt="helloRightBoy" width={324} />
      </div>
      <div className="xl:pt-[139px] container max-w-[1180px] pt-[72px] lg:pb-[198px] pb-20 relative z-10">
        <div className="max-sm:mb-20">
          <div className="mx-auto text-center">
            <h1 className="font-Rubik md:text-3lg sm:text-5xl text-3xl font-semibold sm:leading-lg text-dark_black max-w-[716px] text-center sm:pb-4 pb-[14px] mx-auto heroMainText">
              Navigating{" "}
              <span className="text-orange font-Rubik">German Bureaucracy</span>{" "}
              with ease
            </h1>
            <PrimaryParagraph
              className="sm:pb-10 pb-8 heroMainText"
              text="Herbert Visa: Your AI-powered assistant for German visa and
                immigration processes"
            />
            <div className="heroCardAnimation flex justify-center">
              <PrimaryButton
                BtnText="Start your conversation with Herbert"
                className="max-sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center sm:hidden">
          <div className="sm:absolute relative sm:top-[24%] sm:left-[4%] sm:opacity-15 xl:opacity-100 opacity-100 leftBoy">
            <img src={helloLeftBoy} alt="helloLeftBoy" width={329} />
          </div>
          <div className="sm:absolute relative sm:end-0 sm:top-[32%] sm:right-[3%] sm:opacity-15 xl:opacity-100 opacity-100 rightBoy max-sm:scale-75">
            <img src={helloRightBoy} alt="helloRightBoy" width={324} />
          </div>
        </div>
      </div>

      {/* ===cards=== */}

      <div className="container max-w-[1180px] relative z-20 heroCardSection">
        <div className="row items-center justify-center">
          {CARD_DATA.map((obj, index) => (
            <div
              className={`lg:col-4 md:min-h-[238px] h-[155px] ${
                index === 0 || index === 1 ? "max-md:mb-3" : "mb-0"
              } h-auto md:col-6 w-full flex items-center justify-center px-3 heroCardAnimation`}
              key={index}
            >
              <div className="lg:max-w-[364px] max-sm:max-w-[327px] h-full max-w-full max-md:max-w-[500px] rounded-lg border w-full border-[#00000029] ease-linear duration-300 bg-white py-5 flex items-center justify-center flex-col hover:shadow-cardHoverShadow hover:border-none sm:hover:min-h-[238px] hover:min-h-[180px]">
                <div className="sm:size-14 size-12">
                  <img src={obj.img} alt="images of diff types" />
                </div>
                <p className="font-semibold text-xl pb-3 pt-4">
                  {obj.mainText}
                </p>
                <p className="font-normal text-grey text-center max-w-[192px]">
                  {obj.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HerbertHero;
