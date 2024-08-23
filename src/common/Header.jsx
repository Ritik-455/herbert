import React, { useEffect, useState } from "react";
import navLogoImg from "../assets/images/home/webp/nav-logo.webp";
import { NAV_LINKS_LIST } from "../utils/helper";
import { NavCross, NavLine } from "./Icon";
import PrimaryButton from "./PrimaryButton";
import { gsap } from "gsap";

const Header = () => {

  useEffect(() => {
    let tl = gsap.timeline()
    tl.fromTo(".herbertLogo", {
      y: -200,
    },
      {
        y: 0,
        duration: 1,
      })

    tl.fromTo(".navLinks", {
      y: -200,
    },
      {
        y: 0,
        stagger: 0.3,
      }
    )

  })

  const [nav, setNav] = useState(true);
  const handleNavbar = () => {
    setNav(!nav);
    let body = document.body;
    nav && body.classList.add("max-lg:overflow-hidden");
    !nav && body.classList.remove("max-lg:overflow-hidden");
  };
  return (
    <div className="container max-w-[1180px]">
      <div className="h-[100px] flex items-center justify-between">
        <a href="/" className="herbertLogo">
          <img className="" src={navLogoImg} alt="navLogoImg" width={180} />
        </a>
        <div
          className="flex flex-col lg:hidden justify-between z-50 cursor-pointer transition-all ease-linear duration-300"
          onClick={handleNavbar}
        >
          <span className="lg:hidden">
            {nav === false ? <NavCross /> : <NavLine />}
          </span>
        </div>
        <div
          className={`${nav && "max-lg:left-[-100%]"} ${!nav && "max-lg:start-0"
            } flex items-center gap-11 z-40 max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:h-full max-lg:top-0 max-lg:bg-white transition-all duration-300 ease-linear`}
        >
          {NAV_LINKS_LIST.map((obj, index) => (
            <a
              href={obj.url}
              key={index}
              className="leading-6 navLinks text-grey relative after:absolute decoration-1 after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-0 after:left-[25%] after:bg-dark_black after:rounded-xl transition duration-300 after:transition-all after:duration-300 ease-linear hover:text-dark_black"
            >
              {obj.navlink}
            </a>
          ))}
          <PrimaryButton BtnText="Start your conversation with Herbert" className="lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Header;
