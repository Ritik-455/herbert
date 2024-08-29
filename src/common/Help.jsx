import { useLayoutEffect } from "react";
import PrimaryButton from "./PrimaryButton"
import PrimaryHeading from "./PrimaryHeading"
import PrimaryParagraph from "./PrimaryParagraph"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Help = () => {

    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            let tl = gsap.timeline();
            ScrollTrigger.create({
                trigger: ".team_animation",
                start: "top 40%",
                end: "bottom 80%",
                animation: tl,
                markers: false,
                toggleActions: "play",
            });
            tl.from(".main_box", {
                scale: 0,
                stagger: 0.5,
            })
        });
        return () => aot.revert();
    }, [])
    let path = window.location.pathname;
    return (
        <div className="px-6 bg-bg_Linear_Gradient team_animation overflow-hidden max-w-[1920px] mx-auto">
            <div className={`container max-w-[1180px] ${path === "/sources" ? "mt-0" : "lg:mt-[120px] sm:mt-20 mt-16"} bg-light_orange sm:py-16 py-5 rounded-xl flex items-center justify-center flex-col main_box`}>
                <PrimaryHeading className="max-w-[632px] text-center main_box">
                    <span className="text-white font-rubik sm:!text-5xl xl:!text-[48px] xl:leading-[56px]">Need Help in Your Visa? <br className="lg:block hidden" /> Ask Herbert Now!</span>
                </PrimaryHeading>
                <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam." className="max-w-[528px] text-center text-white sm:mt-4 mt-3 lg:mb-11 mb-8 main_box" />
                <div className="flex items-center justify-center sm:gap-4 gap-3 sm:flex-nowrap flex-wrap">
                    <div className="main_box max-sm:w-full">
                        <PrimaryButton BtnText="Start your conversation" className="!text-light_orange bg-white max-sm:w-full firstBtn hover:!bg-transparent hover:!text-white hover:!border hover:!border-white" />
                    </div>
                    <div className="main_box max-sm:w-full">
                        <PrimaryButton BtnText="Learn More" className="border !border-white max-sm:w-full secondBtn" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help