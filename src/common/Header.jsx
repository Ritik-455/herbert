import React, { useEffect, useState } from "react";
import navLogoImg from "../assets/images/home/webp/nav-logo.webp";
import { NAV_LINKS_LIST } from "../utils/helper";
import { NavCross, NavLine } from "./Icon";
import PrimaryButton from "./PrimaryButton";
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".herbertLogo",
      {
        y: -200,
      },
      {
        y: 0,
        duration: 1,
      }
    );

    tl.fromTo(
      ".navLinks",
      {
        y: -200,
      },
      {
        y: 0,
        stagger: 0.3,
      }
    );
  }, []);

  const [nav, setNav] = useState(true);
  const handleNavbar = () => {
    setNav(!nav);
    let body = document.body;
    nav && body.classList.add("max-lg:overflow-hidden");
    !nav && body.classList.remove("max-lg:overflow-hidden");
  };
  let path = window.location.pathname;
  return (
    <div className="container max-w-[1180px]">
      <div className="sm:h-[100px] h-16 flex items-center justify-between">
        <a href="/" className="herbertLogo z-50">
          <img className="sm:w-[180px] w-[117px]" src={navLogoImg} alt="navLogoImg" />
        </a>
        <div
          className="flex flex-col lg:hidden justify-between z-50 cursor-pointer transitionEffect"
          onClick={handleNavbar}
        >
          <span className="lg:hidden">
            {nav === false ? <NavCross /> : <NavLine />}
          </span>
        </div>
        <div
          className={`${nav && "max-lg:left-[-100%]"} ${!nav && "max-lg:start-0"
            } flex items-center gap-11 z-40 max-lg:flex-col max-lg:items-center max-lg:justify-start max-lg:pt-[108px] max-lg:fixed max-lg:w-full max-lg:h-full max-lg:top-0 max-lg:bg-white transitionEffect`}
        >
          {NAV_LINKS_LIST.map((obj, index) => (
            <a
              href={obj.url}
              key={index}
              className={`leading-6 navLinks ${path === obj.url &&
                "after:absolute decoration-1 after:h-[3px] after:w-[31px] after:-bottom-[2px] after:left-[25%] after:bg-dark_black after:rounded-xl !text-black"
                } text-grey relative transitionEffect after:transitionEffect hover:text-dark_black ${index === 0 || index === 1
                  ? "max-lg:after:w-[327px] max-lg:after:h-px max-lg:after:absolute  max-lg:after:left-1/2 max-lg:after:-translate-x-1/2 max-lg:after:-bottom-6 max-lg:after:bg-[#00000029]"
                  : ""
                }`}
            >
              {obj.navlink}
            </a>
          ))}
          <PrimaryButton
            BtnText="Start your conversation with Herbert"
            className="lg:hidden"
          />

        </div>
      </div>
    </div>
  );
};

export default Header;
