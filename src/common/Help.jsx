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
                trigger: ".faq_animatio",
                start: "top 40%",
                end: "bottom 80%",
                animation: tl,
                markers: false,
                toggleActions: "play",
            });
            tl.from(".main_box", {
                scale: 0,
            })
            tl.from(".headingtext", {
                x: -1440,
            })
            tl.from(".subContent", {
                x: 1440,
            })
        });
        return () => aot.revert();
    }, [])

    return (
        <div className="px-6 bg-bgLinearGradient faq_animatio overflow-hidden">
            <div className="container max-w-[1180px] lg:mt-[120px] sm:mt-20 mt-16 bg-light_orange sm:py-16 py-5 rounded-xl flex items-center justify-center flex-col main_box">
                <PrimaryHeading className="max-w-[632px] text-center headingtext">
                    <span className="text-white">Need Help in Your Visa? Ask Herbert Now!</span>
                </PrimaryHeading>
                <PrimaryParagraph text="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam." className="max-w-[528px] text-center text-white sm:mt-4 mt-3 sm:mb-11 mb-8 subContent" />
                <div className="flex items-center justify-center sm:gap-4 gap-3 sm:flex-nowrap flex-wrap">
                    <PrimaryButton BtnText="Start your conversation" className="!text-light_orange bg-white max-sm:w-full firstBtn" />
                    <PrimaryButton BtnText="Learn More" className="border !border-white max-sm:w-full secondBtn" />
                </div>
            </div>
        </div>
    )
}

export default Help