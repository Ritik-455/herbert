import React from "react";
import SourcesHero from "../about/SourcesHero";
import Code from "../about/Code";
import { Regulation } from "../about/Regulation";
import HandBook from "../about/HandBook";
import Act from "../about/common/Act";
import { RESIDENCE_DATA, VISA_DATA } from "../../utils/helper";
import Visa from "../about/Visa";
import Residence from "../about/Residence";
import Help from "../../common/Help";

const About = () => {
  return (
    <>
      <SourcesHero />
      <Residence />
      <Code />
      <Regulation />
      <Visa />
      <Act />
      <HandBook />
      <Help />
    </>
  );
};

export default About;
